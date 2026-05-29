import CountryCard from "./CountryCard";

function CountryList({
  countries,
  language,
}) {
  return (
    <div className="country-list">
      {countries.map((country) => (
        <CountryCard
          key={country.cca3}
          country={country}
          language={language}
        />
      ))}
    </div>
  );
}

export default CountryList;