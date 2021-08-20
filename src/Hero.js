import React, { useEffect, useState } from 'react'
import axios from './axios'
import requests from './Requests'
import './Hero.css'

const Hero = () => {
    const [movie,setMovie] = useState([]);

    const movieData = async () =>{
        const response = await axios.get(requests.fetchNetflixOriginals);
        let  data = response.data.results[Math.floor(Math.random() * response.data.results.length-1)]
        setMovie(data)
        return response;
    }
    
    useEffect(() =>{
        movieData();
    },[])
    const truncate = (str,n) =>{
        return str?.length > n ? str.substr(0,n-1)+"..." : str;
    }
    return (
        <header
        style={{
            backgroundSize: "cover",
            backgroundImage:`url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
            backgroundPosition: "center center"
        }}
        className="hero">
        <div className="hero__content">
            <h1 className="hero__title">{movie?.title || movie?.name || movie?.original_name}</h1>
            <div className="hero__btn-container">
                <button className="btn">Play</button>
                <button className="btn">My List</button>
            </div>
            <h1 className="hero__description">{truncate(movie?.overview,150)}</h1>
        </div>
        <div className="hero__fadeBottom"></div>
        </header>
    )
}

export default Hero
