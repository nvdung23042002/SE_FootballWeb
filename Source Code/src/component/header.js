import "./header.css";

const Header = () => {
  return (
    <div className="header-page">
      <a href="https://www.premierleague.com/">
        <img
          src="https://upload.wikimedia.org/wikipedia/vi/thumb/f/f2/Premier_League_Logo.svg/2560px-Premier_League_Logo.svg.png"
          className="header-league-logo"
        />
      </a>

      <a href="https://www.laliga.com/en-GB">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/LaLiga.svg/2560px-LaLiga.svg.png"
          className="header-league-logo"
        />
      </a>

      <a href="https://www.bundesliga.com/de/bundesliga">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Bundesliga_logo_%282017%29.svg/1200px-Bundesliga_logo_%282017%29.svg.png"
          className="header-league-logo"
        />
      </a>

      <a href="https://www.ligue1.com/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Ligue1.svg"
          className="header-league-logo"
        />
      </a>

      <a href="https://www.seriea.com/">
        <img
          src="https://seeklogo.com/images/L/lega-serie-a-logo-F6AA6C64C9-seeklogo.com.png"
          className="header-league-logo"
        />
      </a>
    </div>
  );
};

export default Header;
