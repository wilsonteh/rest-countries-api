"use client";
import CountryCard from "./CountryCard";
import { useEffect, useState } from "react";
import CountryListSkeleton from "./skeletons/CountryListSkeleton";

interface Props {
  countries: any;
  isFilterLoading: boolean;
  setIsFilterLoading: (isLoading: boolean) => void;
}

const CountryList = ({ countries, isFilterLoading, setIsFilterLoading }: Props) => {

  useEffect(() => {
    console.log("countries data changed");
    setIsFilterLoading(false);
    
  }, [countries, setIsFilterLoading]);

  return (
    isFilterLoading ? (
      <CountryListSkeleton numOfCard={20} />
    ) : (
      <section className="my-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-16">
        {countries.map((country: any, i: number) => (
          <CountryCard key={i} {...country} />
        ))}
      </section>
    )
  );
};

export default CountryList;
