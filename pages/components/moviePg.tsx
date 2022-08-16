import * as React from 'react';
import { Header } from './header';
import { Search } from './search';

export function MoviesPage () {
  return (
    <div>
        <Header />
<div className="movie-body">
  <div className="search flex justify-center items-center my-4">
    <Search />
  </div>
</div>
    </div>
  );
}
