"use client";
import { useEffect, useState } from "react";
import CountryList from "../CountryList";
import FilterDropDown from "../FilterDropDown";
import SearchBar from "../SearchBar";

interface Props {
  countries: any;
}

const HomePageWrapper = ({ countries }: Props) => {
  const [isFilterLoading, setIsFilterLoading] = useState<boolean>(false);

  useEffect(() => {
    console.log("isFilterLoading", isFilterLoading);
    
  }, [isFilterLoading])
  

  return (
    <>
      <div className="my-8 flex flex-col items-start justify-center gap-3 md:flex-row md:items-center 
        md:justify-between">
        <SearchBar className="self-start" />
        <FilterDropDown className="self-stretch xs:self-auto" 
          numOfCountries={countries.length} 
          isFilterLoading={isFilterLoading}
          setIsFilterLoading={setIsFilterLoading} 
          />
      </div>

      <CountryList 
        countries={countries} 
        isFilterLoading={isFilterLoading} setIsFilterLoading={setIsFilterLoading} 
        />
    </>
  );
};

export default HomePageWrapper;
