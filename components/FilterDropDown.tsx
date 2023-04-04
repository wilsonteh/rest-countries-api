"use client";
import { useState } from "react";

interface Props {
  className?: string;
}

const FilterDropDown = ({ className }: Props) => {
  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  const [isDropDown, setIsDropDown] = useState<boolean>(false);


  return (
    <div className={`${className} relative`}>
      <div className={`bg-slate-50 dark:bg-slate-700 dark:text-slate-200 flex justify-between 
        items-center gap-2 px-6 py-4 rounded-md cursor-pointer`}
        onClick={() => setIsDropDown(!isDropDown)} >
        <span>Filter by Continents</span>
        <span className="material-symbols-outlined">
          { isDropDown ? 'arrow_drop_up' : 'arrow_drop_down' }
        </span>
      </div>
      
      { isDropDown &&
        <div className="bg-slate-50 dark:bg-slate-700 dark:text-slate-200 w-full absolute top-[65px] 
          px-4 py-4 rounded-md z-10 border-[1px] border-slate-300 shadow-[2px_2px_15px_hsl(0,0%,70%)]
          dark:border-slate-800 dark:shadow-[2px_2px_15px_hsl(0,0%,15%)]">
          <ul className="flex flex-col text-center gap-2">
            { regions.map((region, i) => (
              <li key={i} className="cursor-pointer px-2 py-2 rounded-md hover:bg-slate-200 
                dark:hover:bg-slate-750"> 
                { region } 
              </li>
            ))}
          </ul>
        </div>
      }
    </div>
  );
}


export default FilterDropDown;