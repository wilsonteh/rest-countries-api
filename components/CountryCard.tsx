import { thousandSeparator } from "@/utils/Utils";
import Image from "next/image";
import Link from "next/link";

const CountryCard = (country: any) => {
  let countryName = country.name.official.toLowerCase();

  return (
    <div className="flex flex-col bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-200 
      rounded-md" >
      <div className="h-[200px] block relative">
        <Image src={country.flags.svg} alt={country.flags.alt || country.name.official } 
          className="rounded-md object-cover" fill={true} />
      </div>

      <Link href={`/country/${countryName}`} className="p-6">
        <h3 className="font-extrabold text-xl line-clamp-1"> 
          { country.name.official } 
        </h3>
        <div className="py-4">
          <div>
            <span className="font-semibold">Population: </span>
            <span className="font-light"> { thousandSeparator(country.population) } </span>
          </div>
          <div> 
            <span className="font-semibold">Region: </span>
            <span className="font-light"> { country.region } </span>
          </div>
          <div> 
            <span className="font-semibold">Capital: </span>
            <span className="font-light"> { country.capital } </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
 
export default CountryCard;