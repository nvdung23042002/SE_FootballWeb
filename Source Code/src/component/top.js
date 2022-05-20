import "./top.css";
import { useEffect, useState } from "react";
const Top = () => {
  const [top, setTop] = useState(null);
  const loadTops = async () => {
    var myHeaders = new Headers();
    myHeaders.append(
      "x-rapidapi-key",
      `${process.env.REACT_APP_FIXTURES_API_KEY_1}`
    );
    myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
    };
    const response = await fetch(
      `https://v3.football.api-sports.io/players/topscorers?league=39&season=2021`,
      requestOptions
    );
    const data = await response.json();
    setTop(data.response);
    console.log(data.response);
  };

  useEffect(() => {
    loadTops();
  }, []);
  return (
    <div className="top">
      <div className="header">
        <div className="header-inner">Top scorers</div>
      </div>
      <table>
        <thead>
          <tr className="card-player">
            <th className="rank">#</th>
            <th className="name-player">NAME</th>
            <th className="club">CLUB</th>
            <th className="nationality">NATIONALITY</th>
            <th className="stat">STATS</th>
          </tr>
        </thead>
        <tbody>
          {top &&
            top.map((player, index) => (
              <Player key={index} player={player} rank={index} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Top;

const Player = ({ player, rank }) => {
  return (
    <tr className="card-player">
      <td className="rank">{rank + 1}</td>
      <td className="name-player">{player.player.name}</td>
      <td className="club">
        <img
          src={player.statistics[0].team.logo}
          style={{ height: "25px", width: "auto" }}
        />
      </td>
      <td className="nationality">{player.player.birth.country}</td>
      <td className="stat">{player.statistics[0].goals.total}</td>
    </tr>
  );
};
