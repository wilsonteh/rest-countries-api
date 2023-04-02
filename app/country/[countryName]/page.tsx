import CountryDetail from "@/components/CountryDetail";

async function fetchCountryByName(name: string) {
  const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
  const country = await res.json();
  return country[0];
}

export default async function CountryDetailPage({ params }: { params: { countryName: string } }) {
  const { countryName } = params;
  const countryData = await fetchCountryByName(countryName);

  return (
    <div>
      <h1 className="dark:text-slate-200"> Params: { params.countryName } </h1>

      <CountryDetail {...countryData} />

    </div>
  )

}