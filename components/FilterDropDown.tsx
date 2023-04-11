"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";

interface Props {
  className?: string;
  numOfCountries: number;
}

const FilterDropDown = ({ className, numOfCountries }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const continentQuery = searchParams.get('continent');
  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  const [isDropDown, setIsDropDown] = useState<boolean>(false);
  const [selectedContinent, setSelectedContinent] = useState<string|null>(null);

  const createQueryString = useCallback((query: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set(query, value);

    return params.toString();
  }, [searchParams]);
  
  const handleContinentFilter = (continent: string) => {
    setIsDropDown(!isDropDown)
    setSelectedContinent(continent);
    continent = continent.toLowerCase()
    router.push(`${pathname}?${createQueryString('continent', continent)}`)
  }

  const handleClearFilter = () => {
    setSelectedContinent(null);
    // remove just the 'continent' query from url
    const params = new URLSearchParams(searchParams);
    params.delete('continent');
    router.push(`${pathname}?${params.toString()}`)
  }


  return (
    <div className="dropdown flex flex-col gap-2 items-center">
      <div className="">
        <label tabIndex={0} className="bg-slate-50 dark:bg-slate-700 dark:text-slate-200 flex justify-between 
          items-center gap-2 px-6 py-4 rounded-md cursor-pointer"
          onClick={() => setIsDropDown(!isDropDown)} >
          <span>Filter by { selectedContinent ? selectedContinent : 'Continent' }</span>
          <span className="material-symbols-outlined">
            { isDropDown ? 'arrow_drop_up' : 'arrow_drop_down' }
          </span>
        </label>

        { isDropDown && 
          <datalist tabIndex={0} className="dropdown-content menu bg-slate-50 dark:bg-slate-700 
            dark:text-slate-200 w-full absolute top-[65px] px-4 py-4 rounded-md z-10 border-[1px] 
            border-slate-300 shadow-[2px_2px_15px_hsl(0,0%,70%)] dark:border-slate-800 
            dark:shadow-[2px_2px_15px_hsl(0,0%,15%)]">
              { selectedContinent && 
                <button className="text-xs py-2 hover:underline" onClick={handleClearFilter}>
                  Clear Filtering
                </button> }
              { regions.map((region, i) => (
                <option key={i} className="cursor-pointer px-2 py-2 rounded-md text-center hover:bg-slate-200 
                dark:hover:bg-slate-750" value={region}
                onClick={() => handleContinentFilter(region)} > 
                  { region } 
                </option>
              ))}
          </datalist> }
      </div>

      { selectedContinent && continentQuery && 
        <div className="dark:text-slate-200 text-sm">
          {`${numOfCountries} countries found in ${selectedContinent}`}
        </div> }
        
    </div>


      

  );
}


export default FilterDropDown;