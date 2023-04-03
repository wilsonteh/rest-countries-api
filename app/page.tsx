import CountryList from "@/components/CountryList";
import FilterDropDown from "@/components/FilterDropDown";
import SearchBar from "@/components/SearchBar";
import { fetchAllCountries } from "@/utils/dataFetching";

export default async function Home() {
  const countries = await fetchAllCountries();

  return (
    <div className="">
      <div className="my-8 flex justify-between items-center">
        <SearchBar />
        <FilterDropDown />
      </div>
      <CountryList {...{countries}} />
    </div>
  )
}
