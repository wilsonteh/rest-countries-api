"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Props {
  code: string;
  className: string;
}
interface Country {
  name: string; 
  flag: string;
}

const Label = ({ code, className }: Props) => {
  const [country, setCountry] = useState({} as Country);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  useEffect(() => {
    async function fetchCountryByCode(code: string) {
      setIsLoading(true);
      const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
      const data = await res.json();
      const countryData = data[0];
      setCountry({
        ...country,
        name: countryData.name.common,
        flag: countryData.flags.png,
      });
      setIsLoading(false);
    }
    fetchCountryByCode(code);
  
  }, [])
  

  return (
    <> 
      { !isLoading && 
        <Link href={`/country/${country.name}`} style={{ backgroundImage: `url(${country.flag})`}} 
          className={`${className} px-4 py-2 rounded-full bg-contain bg-repeat bg-left relative
          flex justify-center items-center text-slate-200 text-sm
          hover:scale-105`} 
          >
          <div className="overlay absolute top-0 left-0 w-full h-full bg-black rounded-full 
            opacity-60" 
            />
          <span className="relative z-10"> {country.name} </span>

        </Link>

      }
    </>
    
  );
}
 
export default Label;