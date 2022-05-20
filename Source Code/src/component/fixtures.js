import "./fixtures.css";
import { useEffect, useRef, useState } from "react";
const Fixtures = () => {
  const PRid = "39";
  const LLGid = "140";
  const BDid = "78";
  const L1id = "61";
  const SRAid = "135";
  const milisecondsperday = 86400000;
  const weekdays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
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
  const today = new Date();
  const [date, setDate] = useState(today);
  const [dateAPI, setDateAPI] = useState(today);
  const [datePre1, setDatePre1] = useState(new Date(today - milisecondsperday));
  const [datePre2, setDatePre2] = useState(
    new Date(today - milisecondsperday * 2)
  );
  const [dateNext1, setDateNext1] = useState(
    new Date(today - -milisecondsperday)
  );
  const [dateNext2, setDateNext2] = useState(
    new Date(today - -milisecondsperday * 2)
  );
  const [butindex, setButindex] = useState(0);
  function handleDate(index) {
    setButindex(index);
    setDateAPI(new Date(date - index * milisecondsperday));
  }

  function handleDateChange(e) {
    let date = new Date(e.target.value);
    setDate(date);
    setButindex(0);
    setDateAPI(date);
    setDatePre1(new Date(date - milisecondsperday));
    setDatePre2(new Date(date - milisecondsperday * 2));
    setDateNext1(new Date(date - -milisecondsperday));
    setDateNext2(new Date(date - -milisecondsperday * 2));
  }

  function padTo2(number) {
    if (Math.round(number) < 10) {
      return "0" + number;
    }
    return number;
  }

  return (
    <div className="fixtures">
      <div className="timeline">
        <a
          style={{
            textDecoration: "none",
            color: butindex === 2 ? "orange" : "black",
          }}
          onClick={() => handleDate(2)}
          href="#"
        >
          <div className="day">{weekdays[datePre2.getDay()]}</div>
          <div className="month">
            {datePre2.getDate()} {months[datePre2.getMonth()]}
          </div>
        </a>
        <a
          style={{
            textDecoration: "none",
            color: butindex === 1 ? "orange" : "black",
          }}
          onClick={() => handleDate(1)}
          href="#"
        >
          <div className="day">{weekdays[datePre1.getDay()]}</div>
          <div className="month">
            {datePre1.getDate()} {months[datePre1.getMonth()]}
          </div>
        </a>
        <a
          style={{
            textDecoration: "none",
            color: butindex === 0 ? "orange" : "black",
          }}
          onClick={() => handleDate(0)}
          href="#"
        >
          <div className="day">
            {date === today ? "TODAY" : weekdays[date.getDay()]}
          </div>
          <div className="month">
            {date.getDate()} {months[date.getMonth()]}
          </div>
        </a>
        <a
          style={{
            textDecoration: "none",
            color: butindex === -1 ? "orange" : "black",
          }}
          onClick={() => handleDate(-1)}
          href="#"
        >
          <div className="day">{weekdays[dateNext1.getDay()]}</div>
          <div className="month">
            {dateNext1.getDate()} {months[dateNext1.getMonth()]}
          </div>
        </a>
        <a
          style={{
            textDecoration: "none",
            color: butindex === -2 ? "orange" : "black",
          }}
          onClick={() => handleDate(-2)}
          href="#"
        >
          <div className="day">{weekdays[dateNext2.getDay()]}</div>
          <div className="month">
            {dateNext2.getDate()} {months[dateNext2.getMonth()]}
          </div>
        </a>

        <input
          value={`${date.getFullYear()}-${padTo2(date.getMonth() + 1)}-${padTo2(
            date.getDay()
          )}`}
          type="date"
          style={{ width: "16px", height: "20px" }}
          onChange={(event) => handleDateChange(event)}
        ></input>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <LeagueFixtures id={PRid} date={dateAPI} />
        <LeagueFixtures id={LLGid} date={dateAPI} />
        <LeagueFixtures id={BDid} date={dateAPI} />
        <LeagueFixtures id={L1id} date={dateAPI} />
        <LeagueFixtures id={SRAid} date={dateAPI} />
      </div>
    </div>
  );
};

export default Fixtures;

const LeagueTitle = ({ img, name, country }) => {
  return (
    <div className="header-card">
      <img src={img} className="header-card-img" />
      <div className="des">
        <div className="league-name">{name}</div>
        <div className="country">{country}</div>
      </div>
      <div className="icon">
        <span class="material-symbols-outlined">chevron_right</span>
      </div>
    </div>
  );
};

const MatchCard = ({ data }) => {
  const time =
    data.fixture.status.short == "NS"
      ? data.fixture.date.slice(11, 16)
      : data.fixture.status.short;
  return (
    <div className="match-card">
      <div className="hour">{time}</div>
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

const LeagueFixtures = ({ id, date }) => {
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
      `https://v3.football.api-sports.io/fixtures?date=${date
        .toISOString()
        .slice(0, 10)}&league=${id}&season=2021&timezone=Asia/Ho_Chi_Minh`,
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
  }, [date]);

  return (
    <div>
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
  );
};
