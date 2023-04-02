import CountryCard from './CountryCard';

const CountryList = ({ countries }: any) => {

  // to see the values of specific property for ALL countries
  // countries.forEach(country => {
  //   console.log(country.tld)
  // })

  return (
    <section className="grid grid-cols-4 gap-16 my-8">
      { countries.map((country: any, i: number) => (
        <CountryCard key={i} {...country} />
      )) }
    </section>
  );
}
 
export default CountryList;