import CountryList from "@/components/CountryList";
import FilterDropDown from "@/components/FilterDropDown";
import SearchBar from "@/components/SearchBar";
import HomePageWrapper from "@/components/wrappers/HomePageWrapper";
import { fetchAllCountries } from "@/utils/dataFetching";

export default async function Home({ searchParams }: { searchParams: any }) {
  const countriesData = await fetchAllCountries();
  let filteredCountries = countriesData;
  const { continent: continentQuery } = searchParams;
  
  if (continentQuery) {   
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
