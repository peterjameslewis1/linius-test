import React, { useState, useEffect } from 'react';
import Filter from './Filter'

const MovieList = () => {
    // State
    const [data, setData] = useState([])

    // Enviroment variable to store apiKey
    const apiKey = process.env.REACT_APP_API_KEY;

    useEffect(() => {
        fetchData()
    }, [])

    // Data call
    const fetchData = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`);
        const movies = await response.json()
        await setData(movies.results)
    };



    const sortAscending = () => {
        setData([...data].sort((a, b) => a.vote_average - b.vote_average))
    }
    const sortDecending = () => {
        setData([...data].sort((a, b) => a.vote_average - b.vote_average).reverse())
    }
    const alphabetical = () => {
        setData([...data].sort((a, b) => a.title > b.title ? -1 : a.title < b.title ? 1 : 0).reverse())
        console.log([...data].sort(x => x.title))
    }

    return (
        <div className="movie-container">
            <Filter sortAscending={sortAscending} sortDecending={sortDecending} alphabetical={alphabetical} />
            <ul className="movie-list" id="list">
                {data.map(movie => {
                    return <li className="movie-list__item" key={movie.id}>
                        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
                        <div className="movie-list__item__details">
                            <h2>{movie.title}</h2>
                            <span><i class="fas fa-star"></i>{movie.vote_average}/10</span>
                        </div>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default MovieList;