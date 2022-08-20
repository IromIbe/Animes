import * as React from "react";
import { useState } from "react";
import MovieCard from "./movieCard";
import Search from "./search";
import Move from "./move";

export interface IMoviesProps {
  id: number;
  title: string;
  backdrop_path: string;
  overview: string;
  poster_path: string;
  vote_average: number;
}

interface movieList {
  allMovies: IMoviesProps[];
}

function MoviesPage({ allMovies }: movieList) {
  return (
    <div>
      <div className='movie-body'>
        <div className='search flex justify-center items-center my-4'>
          <Search />
        </div>
        <div className='movie-list '>
          <div className='flex flex-wrap justify-evenly items-center mx-8'>
            {allMovies.map((movie: IMoviesProps) => (
              <div key={movie.id}>
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
          <div className='flex justify-center items-center py-6'>
            <Move direction='backward' />
            <Move direction='forward' />
          </div>
        </div>
      </div>
    </div>
  );
}
export default MoviesPage;
