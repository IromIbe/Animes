import * as React from "react";
import MoviesPage, { IMoviesProps } from "./components/moviePg";
import { useState, useEffect } from "react";
import { InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import axios from "axios";

function Movies({
  allMovies,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  // const router = useRouter();
  // const [page, setPage] = useState<string | number>(router.query?.page || 1);
  // useEffect(() => {
  //   axios.get(`/api/movies?page=${page}`).then((res) => {
  //     setAllMovies(res.data);
  //   });
  // }, [page]);
  const [movieList, setMovieList] = useState<null | IMoviesProps[]>(null);
  return (
    <MoviesPage
      allMovies={movieList ?? allMovies}
      setMovies={setMovieList}
      // page={page}
      // setPage={setPage}
    />
  );
}

export default Movies;

export async function getServerSideProps(context: any) {
  const page = context.query?.page || 1;
  const api_Key = process.env.API_KEY;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${api_Key}&language=en-US&page=${page}`
  );
  const data = await res.json();

  return {
    props: {
      allMovies: data.results, // data.results is an array of movie objects
    },
  };
}
