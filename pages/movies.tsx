import * as React from "react";
import MoviesPage, { IMoviesProps } from "./components/moviePg";
import { useState, useEffect } from "react";
import { InferGetServerSidePropsType } from "next";
import axios from "axios";
function Movies({}) {
  const [page, setPage] = useState<number>(1);
  console.log(page, "papa");

  const [movieList, setMovieList] = useState<IMoviesProps[]>([]);

  useEffect(() => {
    const api_Key = process.env.API_KEY;
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${api_Key}&language=en-US&page=${page}`
      )
      .then((res) => {
        const data = res.data
        const moviesWithOnlyPosters =
        data.results &&
        data.results.filter((item:any) => (item.poster_path != null ? item : null));
        setMovieList(moviesWithOnlyPosters);
        // setMovieList(res.data.results);
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

export default Movies;

// export async function getServerSideProps() {
//   const api_Key = process.env.API_KEY;
//   const res = await fetch(
//     `https://api.themoviedb.org/3/movie/popular?api_key=${api_Key}&language=en-US&page=1`
//   );
//   const data = await res.json();
//   return {
//     props: {
//       allMovies: data.results, // data.results is an array of movie objects
//     },
//   };
// }
