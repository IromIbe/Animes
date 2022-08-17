
import * as React from 'react';
import  MoviesPage from './components/moviePg';
export interface IMoviesProps {
}

 function Movies (props: IMoviesProps) {
  return (
    <div>
<MoviesPage/>
    </div>
  );
}

export default Movies;
