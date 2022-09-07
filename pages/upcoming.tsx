import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { IMoviesProps } from "./components/moviePg";
import MoviesPage from "./components/moviePg";

function Upcoming() {
  const [page, setPage] = useState<number>(1);
  const [movieList, setMovieList] = useState<IMoviesProps[]>([]);
  useEffect(() => {
    const api_Key = process.env.API_KEY;
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_Key}&language=en-US&page=${page}`
      )
      .then((res) => {
        const data = res.data
        const moviesWithOnlyPosters =
        data.results &&
        data.results.filter((item:any) => (item.poster_path != null ? item : null));
        setMovieList(moviesWithOnlyPosters);
      });
  }, [page]);
  return (
    <MoviesPage
      allMovies={movieList}
      setMovieList={setMovieList}
      page={page}
      setPage={setPage}
    />
  );
}

export default Upcoming;

// export async function getServerSideProps(context: any) {
//   //   const page = context.query?.page || 1;
//   const api_Key = process.env.API_KEY;
//   const res = await fetch(
//     `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_Key}&language=en-US&page=1`
//   );
//   const data = await res.json();

//   return {
//     props: {
//       allMovies: data.results, // data.results is an array of movie objects
//     },
//   };
// }
