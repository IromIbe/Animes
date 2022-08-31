import React from "react";
import { useState, useEffect } from "react";
import { InferGetServerSidePropsType } from "next";
import { IMoviesProps } from "./components/moviePg";
import MoviesPage from "./components/moviePg";
import axios from "axios";

function NowPlaying() {
  const [page, setPage] = useState<number>(1);
  const [movieList, setMovieList] = useState<IMoviesProps[]>([]);
  useEffect(() => {
    const api_Key = process.env.API_KEY;
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_Key}&language=en-US&page=${page}`
      )
      .then((res) => {
        setMovieList(res.data.results);
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

export default NowPlaying;

// export async function getServerSideProps(context: any) {
//   //   const page = context.query?.page || 1;
//   const api_Key = process.env.API_KEY;
//   const res = await fetch(
//     `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_Key}&language=en-US&page=1`
//   );
//   const data = await res.json();

//   return {
//     props: {
//       allMovies: data.results, // data.results is an array of movie objects
//     },
//   };
// }
