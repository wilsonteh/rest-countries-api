import CountryList from "@/components/CountryList";
import FilterDropDown from "@/components/FilterDropDown";
import SearchBar from "@/components/SearchBar";

async function getAllCountries() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const countries = await res.json();
  return countries;
}

export default async function Home() {
  const countries = await getAllCountries();

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
