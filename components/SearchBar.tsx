"use client";
import { useEffect, useRef, useState } from "react";

interface Props {
  className?: string;
}

const SearchBar = ({ className }: Props) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const searchBarDiv = useRef<HTMLDivElement>(null);

  return (
    <div ref={searchBarDiv} className={`${className} bg-slate-50 dark:bg-slate-700 rounded-lg 
      sm:min-w-[490px] border-2 ${ isFocus ? 'border-slate-300 dark:border-slate-500' : 
      'border-slate-200 dark:border-slate-800' } `}>
      <label htmlFor="search-input" className="dark:text-slate-200 flex items-center gap-4 px-6 py-4 
        cursor-pointer">
        <span className="material-symbols-outlined">search</span>
        <input type="text" name="" id="search-input" 
          className="bg-slate-50 dark:bg-slate-700 dark:text-slate-200 w-full outline-none" 
          placeholder="Search for a country..." 
          onFocus={() => setIsFocus(true)} onBlur={() => setIsFocus(false)}
          />
      </label>
    </div>
  );
}
 
export default SearchBar;