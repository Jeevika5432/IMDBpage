import React, { useEffect , useState } from "react";
import "./home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import { MovieListComponent } from "../movieDetail/movie";

const Home = () => {

    const [popularMovies, setPopularMovies ] = useState([])
      useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
      .then(res => res.json())
      .then(data => setPopularMovies(data.results));
  }, []);

  return (
    <>
    <div className="poster">
            <Carousel
                showThumbs={false}
                autoPlay={true}
                transitionTime={300} // Assuming you want 300 milliseconds
                infiniteLoop={true}
                showStatus={false}
            >
        
                   {
      popularMovies.map(movie => (
        <Link key={movie.id} style={{ textDecoration: "none", color: "white" }} to={`/movie/${movie.id}`}>
          <div className="posterImage">
            <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
          </div>
          <div className="posterImage__overlay">
            <div className="posterImage__title">
              {movie ? movie.original_title : ""}
            </div>
            <div className="posterImage__runtime">
              {movie ? movie.release_date : ""}
            </div>
            <span className="posterImage__rating">
              {movie ? movie.vote_average : ""}
              <i className="fas fa-star" />
            </span>
          </div>
          <div className="posterImage__description">
            {movie ? movie.description : ""}
          </div>
        </Link>
                       
                    ))
                }
            </Carousel>
        </div>
   
        <MovieListComponent type={"popular"} />
    </>
  )
}

export default Home;
