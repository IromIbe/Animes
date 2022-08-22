import React from "react";
import MovieId from "../components/movieId";
import { InferGetServerSidePropsType } from "next";

function Movie({
  movieInfo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      <MovieId movieInfo={movieInfo} />
    </div>
  );
}

export default Movie;

export async function getServerSideProps({ params }: any) {
  const api_Key = process.env.API_KEY;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=${api_Key}&language=en-US`
  );
  const data = await res.json();

  return {
    props: {
      movieInfo: data,
    },
  };
}
