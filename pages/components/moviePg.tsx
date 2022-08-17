import * as React from 'react';
import Search from './search';
import { InferGetServerSidePropsType } from 'next'
import { GetServerSideProps } from 'next'


// interface movieObj {
//   id: number;
//   original_title: string;
//   backdrop_path: string;
//   overview: string;
// }
// interface IMoviesProps {
//   allMovies: movieObj[]
// }

export const getServerSideProps: GetServerSideProps = async ()  => {
  const API_KEY = process.env.API_KEY;
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
// const data = await res.json();

  return {
    props: {
 allMovies: await res.json()
    }
}
}



function MoviesPage ({allMovies}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(allMovies, "allMovies");

  // useEffect(() => {
  //   const api_Key = process.env.API_KEY;
  //   console.log(api_Key, "api_Key");

  //   axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${api_Key}&language=en-US&page=1`)
  //   .then(res => {
  //     setAllMovies(res.data.results);
  //   }).catch(err => {
  //     console.log(err);
  //   }
  //   );
  // },[allMovies]);
  return (
    <div>
<div className="movie-body">
  <div className="search flex justify-center items-center my-4">
    <Search />
  </div>
  <div className="movie-list">

    </div>
</div>
    </div>
  );
}
export default MoviesPage;