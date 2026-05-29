function Navbar({ language, changeLanguage }) {
  return (
    <nav className="navbar">
      <h1>
        {language === "en"
          ? "Country Explorer"
          : "Explorador de Países"}
      </h1>

      <p>
        {language === "en"
          ? "Data obtained from REST Countries API"
          : "Datos obtenidos desde REST Countries API"}
      </p>

      <button
        className="language-button"
        onClick={changeLanguage}
      >
        🌐 {language === "en"
          ? "Español"
          : "English"}
      </button>
    </nav>
  );
}

export default Navbar;