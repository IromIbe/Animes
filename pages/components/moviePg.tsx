import * as React from 'react';
import { useState, useEffect } from 'react';
import { Search } from './search';
import axios from 'axios';


const options = {
  method: 'GET',
  url: 'https://anime-db.p.rapidapi.com/anime',
  params: {
    page: '1',
    size: '10',
    search: 'Fullmetal',
    genres: 'Fantasy,Drama',
    sortBy: 'ranking',
    sortOrder: 'asc'
  },
  headers: {
    'X-RapidAPI-Key': '333f0328d0mshd591e4a1b5727a8p1e8128jsn7f294b234191',
    'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
  }
};


export async function  getServerSideProps  ()  {
  const res = axios.request(options);
  console.log(res, "hiii");

  return {
    props: {
// allMovies: res.data
    }
}
}
// interface movieObj {
//   title: string;
//   synopsis: string;
//   image: string;
// }
// interface IMoviesProps {
//   allMovies: movieObj[];
// }


export function MoviesPage ({res}: any) {
  console.log(res, "hiii");


  // const [allMovies, setAllMovies] = useState<string[]>([]);
//   console.log(allMovies, "heyy");
//   // const axios = require('axios').default;
// useEffect(() => {
//   axios.request(options).then(function (response) {
//     console.log(response.data.data);
//   }).catch(function (error) {
//     console.error(error);
//   });
// },[])

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
