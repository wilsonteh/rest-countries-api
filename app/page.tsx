import HomePageWrapper from "@/components/wrappers/HomePageWrapper";
import { isValidContinent } from "@/utils/Utils";
import { fetchAllCountries } from "@/utils/dataFetching";

export default async function Home({ searchParams }: { searchParams: any }) {
  const countriesData = await fetchAllCountries();
  let filteredCountries = countriesData;
  const { continent: continentQuery } = searchParams;
  
  if (continentQuery && isValidContinent(continentQuery)) {   
    filteredCountries = countriesData.filter((country: any) => {
      return country.region.toLowerCase() === continentQuery;
    })
  } 
  

  return (
    <div className="px-4 xs:px-8 sm:px-0">
      
      <HomePageWrapper countries={filteredCountries}  />

    </div>
  )
}
