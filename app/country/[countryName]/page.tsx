import Loading from "@/app/loading";
import CountryDetail from "@/components/CountryDetail";
import { fetchCountryByName } from "@/utils/dataFetching";
import { Suspense } from "react";

interface Props {
  params: {
    countryName: string;
  }
}

export default async function CountryDetailPage({ params }: Props) {
  const { countryName } = params;
  const countryData = await fetchCountryByName(countryName);

  return (
    <div>
      <h1 className="dark:text-slate-200"> Params: { params.countryName } </h1>

      <CountryDetail {...countryData} />

    </div>
  )

}