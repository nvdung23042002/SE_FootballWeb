import { Link, NavLink, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/header";
import Home from "./screen/home";
import News from "./screen/news";
import Videos from "./screen/video";
import Leagues from "./screen/leagues";

function App() {
  return (
    <div className="App">
      <Header />
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/news">News</NavLink>
          </li>
          <li>
            <NavLink to="/videos">Videos</NavLink>
          </li>
          <li>
            <NavLink to="/league">Leagues</NavLink>
          </li>
        </ul>
      </nav>

      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/league" element={<Leagues />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
