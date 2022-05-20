import BXH from "../component/bxh";
import FixturesLeague from "../component/fixturesleague";
import Top from "../component/top";

const Leagues = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <BXH idLeague={"2021"} />
      <FixturesLeague id={39} />
      <Top />
    </div>
  );
};

export default Leagues;
