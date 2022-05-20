import BXH from "../component/bxh";
import BXHmin from "../component/bxh-min";
import Fixtures from "../component/fixtures";
import NewsMini from "../component/newsmin";


const Home = () => {
    return (
        <div style={{ display: "flex", justifyContent: 'center', }}>

            <BXHmin />
            <Fixtures/>
            <NewsMini/>

        </div>
    )
}
export default Home;