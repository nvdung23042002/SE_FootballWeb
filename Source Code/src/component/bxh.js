import { useEffect, useState } from "react";
import "./bxh.css";

const BXH = ({ idLeague }) => {
  const [data, setData] = useState(null);
  const [league, setLeague] = useState(2021);

  const loadData = async () => {
    const response = await fetch(
      `https://api.football-data.org/v2/competitions/${league}/standings`,
      {
        headers: {
          "X-Auth-Token": "978b34f9c60e4d98a9a5cb6c0c367df7",
        },
      }
    );
    const data = await response.json();
    setData(data.standings[0].table);
  };

  useEffect(() => {
    loadData();
  }, [league]);

  return (
    <div className="bxh">
      <div className="bxh-content">
        <table>
          <thead>
            <tr className="card">
              <th className="idx">#</th>
              <th className="bxh-team">TEAM</th>
              <th className="idx">P</th>
              <th className="idx">W</th>
              <th className="idx">D</th>
              <th className="idx">L</th>
              <th className="idx">F</th>
              <th className="idx">A</th>
              <th className="idx">GD</th>
              <th className="idx">PTS</th>
            </tr>
          </thead>
          <tbody>{data && data.map((item) => <Row data={item} />)}</tbody>
        </table>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          <div className="league-des">
            <div className="dot ry-blue"></div>
            <div style={{ fontSize: "14px" }}>Champions League</div>
          </div>
          <div className="league-des">
            <div className="dot orange"></div>
            <div style={{ fontSize: "14px" }}>Europa League</div>
          </div>
          <div className="league-des">
            <div className="dot ry-green"></div>
            <div style={{ fontSize: "14px" }}>
              Europa Conference League qualification
            </div>
          </div>
          <div className="league-des">
            <div className="dot ry-red"></div>
            <div style={{ fontSize: "14px" }}>Relegation</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BXH;

const Row = ({ data }) => {
  return (
    <tr className="card">
      <td className="idx">
        <p style={{ textAlign: "center" }}>{data.position}</p>
        {data.position < 5 ? (
          <span className="foot ry-blue"></span>
        ) : data.position < 7 ? (
          <span className="foot orange"></span>
        ) : data.position < 8 ? (
          <span className="foot ry-green"></span>
        ) : data.position > 17 ? (
          <span className="foot ry-red"></span>
        ) : null}
      </td>
      <td className="bxh-team">
        <img src={data.team.crestUrl}></img>
        <div>{data.team.name.replace("FC", "")}</div>
      </td>
      <td className="idx">{data.playedGames}</td>
      <td className="idx">{data.won}</td>
      <td className="idx">{data.draw}</td>
      <td className="idx">{data.lost}</td>
      <td className="idx">{data.goalsFor}</td>
      <td className="idx">{data.goalsAgainst}</td>
      <td className="idx">{data.goalDifference}</td>
      <td className="idx">{data.points}</td>
    </tr>
  );
};
