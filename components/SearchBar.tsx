"use client";
import { useRef, useState } from "react";

interface Props {
  className?: string;
}

const SearchBar = ({ className }: Props) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const searchBarDiv = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col relative">
      { isVisible && 
        <small className="text-red-500 dark:text-red-300 text-xs absolute top-[-20px] left-0">
          Search not working..
        </small> }

      <div ref={searchBarDiv} className={`${className} bg-slate-50 dark:bg-slate-700 rounded-lg 
        sm:min-w-[490px] border-2 ${ isFocus ? 'border-slate-300 dark:border-slate-500' : 
        'border-slate-200 dark:border-slate-800' } `}>
        <label htmlFor="search-input" className="dark:text-slate-200 flex items-center gap-4 px-6 py-4 
          cursor-pointer">
          <span className="material-symbols-outlined">search</span>
          <input type="text" name="" id="search-input" 
            className="bg-slate-50 dark:bg-slate-700 dark:text-slate-200 w-full outline-none" 
            placeholder="Search for a country..." 
            onFocus={() => {
              setIsFocus(true)
              setIsVisible(true)
            }} 
            onBlur={() => {
              setIsFocus(false)
              setIsVisible(false)
            }}
            />
        </label>
      </div>
    </div>
  );
}
 
export default SearchBar;