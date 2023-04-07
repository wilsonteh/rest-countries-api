import CountryCard from './CountryCard';

const CountryList = ({ countries }: any) => {

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 xl:gap-16 my-8">
      { countries.map((country: any, i: number) => (
        <CountryCard key={i} {...country} />
      )) }
    </section>
  );
}
 
export default CountryList;