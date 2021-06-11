import React from 'react'
import Header from '../header/Header'
import Nav from '../nav/Nav'
import Row from '../row/Row'
import Detail from '../src/Detail'
import { useState } from 'react';
export default function Home() {
  const [selectedMovie, setSelectedMovie] = useState();
  const selectMovie = (movie) => {
    setSelectedMovie(() => movie);
  }
  const closeDetail = () => {
    setSelectedMovie(null);
  }
  return (
    <>
      <div className="app">
        <Nav />
        <Header />
        <Row title='Netflix Originals' movieType='netflix-originals' onMovieSelected={selectMovie} />
        <Row title='Trending Now' movieType='trending-now' onMovieSelected={selectMovie} />
        <Row title='Top Rated' movieType='top-rated' onMovieSelected={selectMovie} />
        <Row title='Action Movies' movieType='action-movies' onMovieSelected={selectMovie} />
        <Row title='Horror Movies' movieType='horror-movies' onMovieSelected={selectMovie} />
        <Row title='Romance Movies' movieType='romance-movies' />
        <Row title='Documentaries Movies' movieType='documentaries-movies' onMovieSelected={selectMovie} />

      </div>
      {selectedMovie && <Detail movie={selectedMovie} onDetailClosed={closeDetail} />}
    </>
  );
}
