"use client";
import { useState } from "react";

const FilterDropDown = () => {
  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  const [isDropDown, setIsDropDown] = useState<boolean>(false);


  return (
    <div className="relative">
      <div className="bg-slate-50 dark:bg-slate-700 dark:text-slate-200 flex justify-between items-center gap-2 px-6 py-4  
        rounded-md cursor-pointer"
        onClick={() => setIsDropDown(!isDropDown)} >
        <span>Filter by Continents</span>
        <span className="material-symbols-outlined">
          { isDropDown ? 'arrow_drop_up' : 'arrow_drop_down' }
        </span>
      </div>
      
      { isDropDown &&
        <div className="bg-slate-50 dark:bg-slate-700 dark:text-slate-200 w-full absolute top-[60px] z-10 px-6 py-4">
          <ul className="flex flex-col gap-2">
            { regions.map((region, i) => (
              <li key={i} className="cursor-pointer hover:opacity-70"> 
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