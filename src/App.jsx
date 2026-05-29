import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import CountryList from "./components/CountryList";
import "./App.css";

function App() {
  const [countries, setCountries] =
    useState([]);

  const [search, setSearch] =
    useState("");

  const [language, setLanguage] =
    useState("en");

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {
    const getCountries = async () => {
      try {
        const response =
          await axios.get(
            "https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags,cca3"
          );

        setCountries(response.data);
      } catch (err) {
        setError(
          language === "en"
            ? "Countries could not be loaded."
            : "No se pudieron cargar los países."
        );
      } finally {
        setLoading(false);
      }
    };

    getCountries();
  }, [language]);

  const filteredCountries =
    countries.filter((country) =>
      country.name.common
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  const changeLanguage = () => {
    setLanguage(
      language === "en"
        ? "es"
        : "en"
    );
  };

  return (
    <>
      <Navbar
        language={language}
        changeLanguage={
          changeLanguage
        }
      />

      <main className="container">
        <h2 className="section-title">
          {language === "en"
            ? "Countries List"
            : "Lista de Países"}
        </h2>

        <input
          type="text"
          className="search-input"
          placeholder={
            language === "en"
              ? "Search country..."
              : "Buscar país..."
          }
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        {loading && (
          <p className="message">
            {language === "en"
              ? "Loading countries..."
              : "Cargando países..."}
          </p>
        )}

        {error && (
          <p className="error">
            {error}
          </p>
        )}

        {!loading &&
          !error &&
          filteredCountries.length ===
            0 && (
            <p className="message">
              {language === "en"
                ? "No countries found."
                : "No se encontraron países."}
            </p>
          )}

        {!loading &&
          !error &&
          filteredCountries.length >
            0 && (
            <CountryList
              countries={
                filteredCountries
              }
              language={
                language
              }
            />
          )}
      </main>
    </>
  );
}

export default App;