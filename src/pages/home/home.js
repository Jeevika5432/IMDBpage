import React, { useEffect , useState } from "react";
import "./home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Home = () => {

    const [popularMovies, setPopularMovies ] = useState([])
      useEffect(() => {
    fetch("https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbno4c3FUOXROM3ViUFh5ZXlFazJFQjR1SzZiQXxBQ3Jtc0tsTmdfZ0ZoSTNxbFhKdm05QXhyblZSaWtHS2tUZGxlczlzeHA4UXlTVU9uUk9EQnpDWkswOC1jcy1aWlhoUlNBRlB6NzRmeEpKVWhFSHRITEpfWmYzdkpFRzVWZXFvbHRRRUtxbjhPVE95Nkg2bUJCRQ&q=https%3A%2F%2Fapi.themoviedb.org%2F3%2Fmovie%2Fpopular%3Fapi_key%3D4e44d9029b1270a757cddc766a1bcb63%26language%3Den-US&v=KH-pw1cv34E")
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
   
    
    </>
  )
}

export default Home;
