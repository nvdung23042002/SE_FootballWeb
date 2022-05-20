import "./fixturesleague.css";
import { useEffect, useRef, useState } from "react";
const FixturesLeague = ({ id }) => {
  const milisecondsperday = 86400000;
  const today = new Date();
  const datePre1 = new Date(today - milisecondsperday)
    .toISOString()
    .slice(0, 10);
  const dateNext3 = new Date(today - -milisecondsperday * 3)
    .toISOString()
    .slice(0, 10);

  const [data, setData] = useState(null);

  const loadFixtures = async () => {
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
      `https://v3.football.api-sports.io/fixtures?from=${datePre1}&to=${dateNext3}&league=${id}&season=2021&timezone=Asia/Ho_Chi_Minh`,
      requestOptions
    );
    const data = await response.json();
    console.log(data);
    if (data.results > 0) {
      setData(data.response);
    } else {
      setData(null);
    }
  };
  useEffect(() => {
    loadFixtures();
  }, []);

  return (
    <div className="fixtures">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {data && (
          <LeagueTitle
            img={data[0].league.flag}
            name={data[0].league.name}
            country={data[0].league.country}
          />
        )}

        {data &&
          data.map((item, index) => {
            return <MatchCard data={item} key={index} />;
          })}
      </div>
    </div>
  );
};

export default FixturesLeague;

const LeagueTitle = ({ img, name, country }) => {
  return (
    <div className="header-card">
      <img src={img} className="header-card-img" />
      <div className="des">
        <div className="league-name">{name}</div>
        <div className="country">{country}</div>
      </div>
    </div>
  );
};

const MatchCard = ({ data }) => {
  const time = new Date(data.fixture.timestamp * 1000);
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  function padTo2(number) {
    if (Math.round(number) < 10) {
      return "0" + number;
    }
    return number;
  }
  return (
    <div className="match-card">
      <div className="time-fl">
        <div className="date-month">
          {padTo2(time.getDate())} {months[time.getMonth()]}
        </div>
        <div className="hour-fl">{data.fixture.date.slice(11, 16)}</div>
      </div>
      <div className="t2t">
        <div className="team">
          <img className="logo" src={data.teams.home.logo}></img>
          <div className="name">{data.teams.home.name}</div>
        </div>
        <div className="team">
          <img className="logo" src={data.teams.away.logo}></img>
          <div className="name">{data.teams.away.name}</div>
        </div>
      </div>
      <div className="h2h-score">
        <div className="score">{data.goals.home}</div>
        <div className="score">{data.goals.away}</div>
      </div>
      <div className="icon">
        <span class="material-symbols-outlined">grade</span>
      </div>
    </div>
  );
};
