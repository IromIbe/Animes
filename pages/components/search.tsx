import * as React from 'react';
import { useState } from 'react';

 interface ISearchProps {
}

export function Search (props: ISearchProps) {
    const [search, setSearch] = useState<string>("");
  return (
    <div>
<input type="search" className="py-3 px-3 border-2 rounded-lg border-[#00800060] outline-none text-black text-[14px] dark:text-white dark:bg-transparent  focus:border-[#008000]" placeholder='Search for movie choice' value={search} onChange={(e)=> setSearch(e.target.value)} />
    </div>
  );
}
