import React, { Component } from 'react';
import { firebaseDatabase } from "../firebase/firebase";
import { useEffect, useState } from "react";
function Row(props) {
    const { title, movieType } = props;
    const [movies, setMovies] = useState([]);
    const leafRoot = 'movies';
    const fetchMovies = (movieType) => {
        const movieRef = firebaseDatabase.ref(`${leafRoot}/${movieType}`);
        movieRef.on("value", (snapshot) => {
            const movies = snapshot.val();
            if (movies && movies.length !== 0) {
                // update "movies" state by calling "setMovies" function.
                setMovies(() => movies);
            }
        });
    };
    useEffect(() => {
        fetchMovies(movieType);
    }, []);
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map((movie) => (
                    <img
                        className="row__poster row__posterLarge"
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                        alt={movie.original_name}
                    />
                ))}
            </div>
        </div>
    );
}

export default Row;