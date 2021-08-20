import React,{useEffect, useState} from 'react'
import axios from './axios'
import './MovieSlider.css'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const base_url = `https://image.tmdb.org/t/p/original/`
const MovieSlider = ({title,fetchUrl}) => {
    const [data,setData] = useState([])
    const [trailerUrl, setTrailerUrl] = useState();

    const fetchData = async () =>{
        const response = await axios.get(fetchUrl);
        setData(response.data.results)
    }
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autopaly: 1,
        }
    }
    const handleClick = (movie) =>{
        if(trailerUrl){
            setTrailerUrl("");
        }else{
            movieTrailer(movie?.name || "")
            .then(url =>{
                const urlParams =new URLSearchParams(new URL(url).search) ;
                setTrailerUrl(urlParams.get('v'));
            })
            .catch((error) => console.log(error));
        }
    }
    useEffect(() => {
        fetchData();
    }, [fetchUrl])
    console.log(trailerUrl);
    return (
        <div className="movieSlider">
            <h2 className="movieSlider__title">{title}</h2>
            <div className="movieSlider__container">
                {
                    data.map((movie) =>{
                        return <img onClick={() => handleClick(movie)} className={title==='Netflix Originals'? 'movieSlider__backdrop':'movieSlider__poster'} src={`${base_url}${title==='Netflix Originals'? movie.poster_path:movie.backdrop_path}`} alt={movie.name}/>
                    })
                }
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>}
        </div>
    )
}

export default MovieSlider
