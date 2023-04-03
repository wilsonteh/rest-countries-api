"use client";
import { thousandSeparator } from "@/utils/Utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import Label from "./Label";
import Image from "next/image";
import { fetchCountryByCode } from "@/utils/dataFetching";

interface Country {
  borderCountries?: string[]; // may'nt hav 'borders' property (e.g: Singapore)
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
  };
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
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

interface BorderCountry {
  name: string;
  flag: string;
}

const CountryDetail = (countryData: any) => {
  const [country, setCountry] = useState({} as Country);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [borderCountries, setBorderCountries] = useState([] as BorderCountry[]);

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
        img: countryData.coatOfArms.svg,
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
      maps: {
        googleMaps: countryData.maps.googleMaps,
        openStreetMaps: countryData.maps.openStreetMaps,
      },
      languages: languageKeys.map((key) => countryData.languages[key]),
      latlng: countryData.latlng.map((num: number) => Number(num.toFixed(2))),
      name: countryData.name.common,
      nativeName: countryData.name.nativeName[nativeNameKey].common,
      population: countryData.population,
      region: countryData.region,
      size: countryData.area,
      subregion: countryData.subregion,
      timezones: countryData.timezones,
      topLevelDomain: countryData.tld[0],
      // translation: countryData.translations,
    });

    setIsLoading(true);
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  useEffect(() => {
    country.borderCountries?.map(async (code: string) => {
      const borderCountry = await fetchCountryByCode(code);
      setBorderCountries((prev) => [
        ...prev,
        {
          name: borderCountry.name.common,
          flag: borderCountry.flags.png,
        },
      ]);
    });

    return () => {
      setBorderCountries([]);
    }

  }, [country]);

  return (
    <div className="dark:text-slate-200">

      <button className="rounded-md bg-slate-50 px-6 py-2 hover:bg-slate-100 dark:bg-slate-700">
        <Link href={"/"} className="flex items-center gap-2">
          <span className="material-symbols-outlined cursor-pointer">
            keyboard_backspace
          </span>
          <span>Back</span>
        </Link>
      </button>

      { !isLoading ? (
        <div> Loading... </div>
      ) : (
        <main className="grid grid-cols-[1fr_1.5fr] justify-center gap-12">
          <section className="relative m-8">
            <Image src={country.flag.svg} alt={country.flag.alt}
              className="object-contain" fill={true} />
          </section>

          <section className="flex flex-col gap-4 p-8">
            <h1 className="text-2xl font-extrabold"> { country.name } </h1>

            <div className="grid grid-cols-2 gap-y-8">
              <div className="flex flex-col gap-1 font-semibold">
                <div className="">
                  <span>Native Name: </span>
                  <span className="font-light"> {country.nativeName} </span>
                </div>
                <div className="">
                  <span>Population: </span>
                  <span className="font-light">
                    { thousandSeparator(country.population) }
                  </span>
                </div>
                <div className="">
                  <span>Size: </span>
                  <span className="font-light">
                    { thousandSeparator(country.size) } km&sup2;
                  </span>
                </div>
                <div className="">
                  <span>Region: </span>
                  <span className="font-light"> { country.region } </span>
                </div>
                <div className="">
                  <span>Sub-Region: </span>
                  <span className="font-light"> { country.subregion } </span>
                </div>
                <div className="">
                  <span>Capital: </span>
                  <span className="font-light"> { country.capital } </span>
                </div>
                <div className="flex">
                  <span>Maps:&nbsp;</span>
                  <div className="flex gap-1">
                    <Link href={country.maps.googleMaps} target="_blank"
                      className="flex items-center rounded-full bg-teal-400 text-slate-700 
                      font-medium px-2 text-xs hover:underline" >
                      Google
                    </Link>
                    <Link href={country.maps.openStreetMaps} target="_blank"
                      className="flex items-center rounded-full bg-teal-400 text-slate-700 
                      font-medium px-2 text-xs hover:underline" >
                      OpenStreet
                    </Link>
                  </div>
                </div>
                <div className="">
                  <span>Lat & Long: </span>
                  <span className="font-light">
                    { `${country.latlng[0]}°N, ${country.latlng[1]}°E` }
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-1 font-semibold">
                <div className="">
                  <span>Top Level Domain: </span>
                  <span className="font-light"> {country.topLevelDomain} </span>
                </div>
                <div className="">
                  <span>Currencies: </span>
                  <span className="font-light capitalize">
                    {` ${country.currencies.name} (${country.currencies.code}) ${country.currencies.symbol}`}
                  </span>
                </div>
                <div className="">
                  <span>Languages: </span>
                  <span className="font-light">
                    { country.languages.join(', ') }
                  </span>
                </div>
                <div className="">
                  <span>Timezones: </span>
                  <span className="font-light text-sm">
                    { country.timezones.join(', ') }
                  </span>
                </div>
              </div>

              <div className="col-span-2">
                <div className="">
                  <div className="font-semibold">Border Countries:</div>
                  <div className="flex justify-start gap-4 flex-wrap">
                    {borderCountries?.map((country, i) => (
                      <Link key={i} href={`/country/${country.name}`}>
                        <Label text={country.name} style={{ backgroundImage: `url(${country.flag})` }}
                          className="relative border-2 bg-contain bg-left bg-repeat text-slate-200 
                          opacity-60 transition-all duration-200 ease-in-out py-1 hover:scale-105 
                          hover:opacity-80 dark:border-slate-500 dark:hover:border-slate-200" 
                          >
                          <div className="overlay absolute left-0 top-0 h-full w-full rounded-full 
                            bg-black opacity-60" />
                        </Label>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </section>

        </main>
      )}
    </div>
  );
};

export default CountryDetail;
