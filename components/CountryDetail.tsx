"use client";
import { addCommaSeparator } from "@/utils/Utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import Label from "./Label";
import Image from "next/image";

interface Country {
  borderCountries: string[] | undefined;    // may'nt hav 'borders' property (e.g: Singapore)
  capital: string;
  coatOfArms: {
    img: string;
  };
  currencies: {
    name: string;
    code: string;
    symbol: string;
  };
  flag: {
    png: string;
    svg: string;
    alt: string;
  }
  googleMapsLink: string;
  languages: string[];
  latlng: number[];
  name: string; 
  nativeName: string;
  population: number;
  region: string;
  size: number;
  subregion: string;
  timezones: string[];
  topLevelDomain: string;
  // translation: {
  //   [key: string]: string;
  // }
}

const CountryDetail = (countryData: any) => {
  const [country, setCountry] = useState({} as Country);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    // to extract the key for specific property becoz the key can be diff for different countries
    let nativeNameKey = Object.keys(countryData.name.nativeName)[0];
    let currencyCodeKey = Object.keys(countryData.currencies)[0];
    let languageKeys = Object.keys(countryData.languages);

    setCountry({
      ...country, 
      borderCountries: countryData.borders, 
      capital: countryData.capital[0],
      coatOfArms: { 
        img: countryData.coatOfArms.svg 
      },
      currencies: {
        name: countryData.currencies[currencyCodeKey].name,
        code: currencyCodeKey,
        symbol: countryData.currencies[currencyCodeKey].symbol,
      },
      flag: {
        png: countryData.flags.png,
        svg: countryData.flags.svg,
        alt: countryData.flags.alt,
      },
      googleMapsLink: countryData.maps.googleMaps,
      languages: languageKeys.map((key) => countryData.languages[key]),
      latlng: countryData.latlng.map(((num: number) => Number(num.toFixed(2)))),
      name: countryData.name.common,
      nativeName: countryData.name.nativeName[nativeNameKey].official,
      population: countryData.population,
      region: countryData.region,
      size: countryData.area,
      subregion: countryData.subregion,
      timezones: countryData.timezones,
      topLevelDomain: countryData.tld[0],
      // translation: countryData.translations,
    })
    setIsLoading(true);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="dark:text-slate-200">
      
      <button className="bg-slate-50 dark:bg-slate-700 rounded-md px-6 py-2 hover:bg-slate-100">
        <Link href={"/"} className="flex items-center gap-2">
          <span className="material-symbols-outlined cursor-pointer">keyboard_backspace</span>
          Back
        </Link>
      </button>

      { !isLoading ? <div> Loading </div> : 
      <main className="flex gap-12 justify-center items-center">
        <section className="border- border-slate-100 w-[500px] h-[300px] relative p-8">
          <Image src={country.flag.svg} alt={country.flag.alt} 
            className="object-fill"  fill={true} />
        </section>

        <section className="border- border-teal-500 flex flex-col gap-4 p-8">
          <h1 className="text-2xl font-extrabold">{ country.name }</h1>

          <div className="grid grid-cols-2 gap-y-8">
            <div className="font-semibold">
              <div className=""> 
                Native Name: <span className="font-light"> { country.nativeName } </span>
              </div>
              <div className=""> 
                Population: <span className="font-light"> { addCommaSeparator(country.population) } </span>
              </div>
              <div className="">
                Size: <span className="font-light"> { country.size }km&sup2; </span>
              </div>
              <div className="">
                Region: <span className="font-light"> { country.region } </span>
              </div>
              <div className="">
                Sub-Region: <span className="font-light"> { country.subregion } </span>
              </div>
              <div className="">
                Capital: <span className="font-light"> { country.capital } </span>
              </div>
              <div className="">
                Google Maps: <span className="font-light"> {  } </span>
              </div>
              <div className="">
                Lat & Long: 
                <span className="font-light"> { `${country.latlng[0]}°N, ${country.latlng[1]}°E` } </span>
              </div>
            </div>

            <div className="font-semibold">
              <div className=""> 
                Top Level Domain: <span className="font-light"> { country.topLevelDomain } </span>
              </div>
              <div className=""> 
                Currencies: 
                <span className="font-light capitalize"> 
                {` ${ country.currencies.name } (${ country.currencies.code })`} 
                </span>
              </div>
              <div className=""> 
                Languages: <span className="font-light"> { country.languages.join(', ') } </span>
              </div>
              <div className=""> 
                Timezones: <span className="font-light"> { country.timezones.join(', ') } </span>
              </div>
            </div>

            <div className="col-span-2 border-2 border-orange-500">
              <div className=""> 
                <div>Border Countries:</div> 
                <div className="flex gap-4">
                  { country.borderCountries?.map((countryCode, i) => (
                    <Label key={i} code={countryCode} className="" />
                  ))}
                </div>
              </div>
            </div>

          </div>


        </section>

      </main>
      }
    </div>
  );
}
 
export default CountryDetail;