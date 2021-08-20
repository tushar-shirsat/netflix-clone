import { useState } from 'react';
import './App.css';
import Header from './Header';
import MovieSlider from './MovieSlider';
import requests from './Requests'
import Navbar from './Navbar'

function App() {
  const [fetchUrl, setFetchUrl] = useState(requests);
  
  return (
    <>
    <Navbar/>
    <div className="App">
      
      <Header/>
      <MovieSlider title={'Netflix Originals'} fetchUrl={fetchUrl.fetchNetflixOriginals} />
      <MovieSlider title={'Trending'} fetchUrl={fetchUrl.fetchTrending} />
      <MovieSlider title={'Top Rated'} fetchUrl={fetchUrl.fetchTopRated} />
      <MovieSlider title={'Action'} fetchUrl={fetchUrl.fetchActionMovies} />
      <MovieSlider title={'Comedy'} fetchUrl={fetchUrl.fetchComedyMovies} />
      <MovieSlider title={'Horror'} fetchUrl={fetchUrl.fetchHorrorMovies} />
      <MovieSlider title={'Romance'} fetchUrl={fetchUrl.fetchRomanceMovies} />
      <MovieSlider title={'Documentaries'} fetchUrl={fetchUrl.fetchDocumentaries} />
    </div>
    </>
  );
}

export default App;
