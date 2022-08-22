import * as React from "react";
import { useEffect } from "react";
import IMoviesProps from "./moviePg";

interface ISearchProps {
  setMovies: (curMovies: IMoviesProps[]) => void;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Search({ setMovies, value, onChange }: ISearchProps) {
  const api_Key = process.env.API_KEY;

  useEffect(() => {
    async function handleFetch() {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${api_Key}&language=en-US&query=${value}`
      );
      const data = await res.json();
      setMovies(data.results);
    }
    handleFetch();
  }, [value]);
  return (
    <div>
      <input
        type='search'
        className='py-3 px-3 border-2 rounded-lg border-[#00800080] outline-none text-black text-[14px] dark:text-white dark:bg-transparent  focus:border-[#008000]'
        placeholder='Search for movie choice'
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
export default Search;
