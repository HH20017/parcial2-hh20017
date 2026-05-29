function CountryCard({
  country,
  language,
}) {
  const regionTranslations = {
    Africa: "África",
    Americas: "América",
    Asia: "Asia",
    Europe: "Europa",
    Oceania: "Oceanía",
    Antarctic: "Antártida",
  };

  const translatedRegion =
    language === "es"
      ? regionTranslations[
          country.region
        ] || country.region
      : country.region;

  return (
    <div className="country-card">
      {country.flags?.png ? (
        <img
          src={country.flags.png}
          alt={`Flag of ${country.name.common}`}
          className="country-flag"
        />
      ) : (
        <div className="country-flag no-flag">
          {language === "en"
            ? "No flag available"
            : "Sin bandera disponible"}
        </div>
      )}

      <div className="country-info">
        <h2>{country.name.common}</h2>

        <p>
          <strong>
            {language === "en"
              ? "Capital:"
              : "Capital:"}
          </strong>{" "}
          {country.capital?.[0] ||
            (language === "en"
              ? "Not available"
              : "No disponible")}
        </p>

        <p>
          <strong>
            {language === "en"
              ? "Region:"
              : "Región:"}
          </strong>{" "}
          {translatedRegion ||
            (language === "en"
              ? "Not available"
              : "No disponible")}
        </p>

        <p>
          <strong>
            {language === "en"
              ? "Population:"
              : "Población:"}
          </strong>{" "}
          {country.population > 0
            ? country.population.toLocaleString()
            : language === "en"
            ? "Not registered"
            : "No registrada"}
        </p>
      </div>
    </div>
  );
}

export default CountryCard;