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

export interface movieList {
  allMovies: IMoviesProps[];
  page: number;
  setPage: (page: number) => void;
  setMovieList: any;
}

function MoviesPage({ allMovies, setMovieList, page, setPage }: movieList) {

  const [search, setSearch] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <div className='movie-body'>
        <div className='search flex justify-center items-center my-4'>
          <Search
            setMovies={setMovieList}
            value={search}
            onChange={handleChange}
          />
        </div>
        <div className='movie-list '>
          <div className='flex flex-wrap justify-evenly items-center mx-8'>
            {allMovies?.map((movie: IMoviesProps) => (
              <div key={movie.id}>
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
          <div className='flex justify-center items-center py-6'>
            <Move direction='backward' page={page} setPage={setPage} />
            <Move direction='forward' page={page} setPage={setPage} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default MoviesPage;
