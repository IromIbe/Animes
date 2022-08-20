import * as React from "react";
import MoviesPage from "./components/moviePg";
import { GetServerSideProps } from "next";
import { InferGetServerSidePropsType } from "next";
import { useState, useEffect } from 'react'

function Movies({
  allMovies,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const query = new URLSearchParams()
  const [pageNumber, setPageNumber] = useState(query.get('page'))
  const [movies, setMovies] = useState(allMovies)

  const fetchMovies = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${api_Key}&language=en-US&page=1`
    );
    const data = await res.json();

    setMovies({
        allMovies: data.results, // data.results is an array of movie objects
      })
  }

  useEffect(() => {
    fetchMovies()
  }, [pageNumber])

  return <MoviesPage allMovies={movies} />;
}

export default Movies;

export async function getServerSideProps() {
  const api_Key = process.env.API_KEY;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${api_Key}&language=en-US&page=1`
  );
  const data = await res.json();

  return {
    props: {
      allMovies: data.results, // data.results is an array of movie objects
    },
  };
}
