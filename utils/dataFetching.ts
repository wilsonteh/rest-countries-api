// fetch all countries
// https://restcountries.com/v3.1/all 
export async function fetchAllCountries() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const countries = await res.json();
  return countries;
}

// fetch a country by its name
// https://restcountries.com/v3.1/name/{name}
export async function fetchCountryByName(name: string) {
  const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
  const country = await res.json();
  return country[0];
}

// fetch a country by its code
// Search by cca2, ccn3, cca3 or cioc country code (yes, any!)
// https://restcountries.com/v3.1/alpha/{code}
export async function fetchCountryByCode(code: string) {
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
  const data = await res.json();

  return data[0];
}
