import CountryList from "@/components/CountryList";
import FilterDropDown from "@/components/FilterDropDown";
import SearchBar from "@/components/SearchBar";
import { fetchAllCountries, fetchCountryByName } from "@/utils/dataFetching";

export default async function Home() {
  const countries = await fetchAllCountries();

  return (
    <div className="px-4 xs:px-8 sm:px-0">

      <div className="my-8 flex flex-col gap-3 items-start justify-center md:flex-row md:justify-between md:items-center">
        <SearchBar className="self-stretch" />
        <FilterDropDown className="self-stretch xs:self-auto" />
      </div>

      <CountryList {...{countries}} />

    </div>
  )
}
