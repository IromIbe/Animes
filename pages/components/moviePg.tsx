import * as React from "react";
import MovieCard from "./movieCard";
import Search from "./search";

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
  console.log(allMovies, "allMovies");
  return (
    <div>
      <div className='movie-body'>
        <div className='search flex justify-center items-center my-4'>
          <Search />
        </div>
        <div
          className='movie-list grid w-full justify-self-center self-center items-center my-9
          grid-cols-[repeat(auto-fit,_minmax(270px,_2fr))] content-center gap-6 px-8'
        >
          {allMovies.map((movie: IMoviesProps) => (
            <div key={movie.id}>
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default MoviesPage;
