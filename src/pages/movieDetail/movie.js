import React, {useEffect, useState} from "react"
import "./movie.css"
import { useParams } from "react-router-dom"
import Cards from "../../components/card/card"

const MovieList = () => {
    
   
    const {type} = useParams()

  return (
  <MovieListComponent type={type} />)
}

export default MovieList; 

export const MovieListComponent = ({type}) => {
    
    const [movieList, setMovieList] = useState([])
    
    useEffect(() => {
        getData()
    }, [type])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
    }

    return (
        <div className="movie__list">
            <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    movieList.map(movie => (
                        <Cards movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}
