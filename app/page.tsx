import CountryList from "@/components/CountryList";
import FilterDropDown from "@/components/FilterDropDown";
import SearchBar from "@/components/SearchBar";
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

      <div className="my-8 flex flex-col gap-3 items-start justify-center md:flex-row md:justify-between 
        md:items-center">
        <SearchBar className="self-start" />
        <FilterDropDown className="self-stretch xs:self-auto" numOfCountries={filteredCountries.length}  />
      </div>

      <CountryList countries={filteredCountries} />

    </div>
  )
}
