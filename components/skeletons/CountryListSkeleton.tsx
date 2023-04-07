
const CountryListSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 xl:gap-16 my-8">
      <CountryCardSkeleton />
    </div>
  );
}

const CountryCardSkeleton = () => {
  return (
    <div className="bg-slate-100 dark:bg-slate-700 rounded-lg shadow-lg p-4">
      <div className="animate-pulse flex flex-col gap-4">

        <div className="image-container h-[200px] bg-slate-300 dark:bg-slate-600 rounded-lg"></div>

        <div className="flex flex-col gap-2">
          <div className="country-info h-2 bg-slate-300 dark:bg-slate-600 rounded-md"></div>
          <div className="country-info h-2 bg-slate-300 dark:bg-slate-600 rounded-md"></div>
          <div className="country-info h-2 bg-slate-300 dark:bg-slate-600 rounded-md"></div>
          <div className="country-info h-2 bg-slate-300 dark:bg-slate-600 rounded-md"></div>
          <div className="country-info h-2 bg-slate-300 dark:bg-slate-600 rounded-md mb-4"></div>
        </div>

      </div>
    </div>
  );
}

export default CountryListSkeleton;

