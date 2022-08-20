import * as React from "react";
import MoviesPage from "./components/moviePg";
import { useState } from "react";
import { InferGetServerSidePropsType } from "next";

function Movies({
  allMovies,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [count, setCount] = useState<number>(0);
  return <MoviesPage allMovies={allMovies} />;
}

export default Movies;

export async function getServerSideProps() {
  const api_Key = process.env.API_KEY;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${api_Key}&language=en-US&page=7`
  );
  const data = await res.json();

  return {
    props: {
      allMovies: data.results, // data.results is an array of movie objects
    },
  };
}
