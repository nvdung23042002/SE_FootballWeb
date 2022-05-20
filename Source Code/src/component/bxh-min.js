import { useState, useEffect } from 'react';
import './bxh-min.css'

const BXHmin = () => {
    const [data, setData] = useState(null);
    const [league, setLeague] = useState(2021);

    const loadData = async () => {
        const response = await fetch(`https://api.football-data.org/v2/competitions/${league}/standings`, {
            headers: {
                'X-Auth-Token': '978b34f9c60e4d98a9a5cb6c0c367df7',
            }
        });
        const data = await response.json();
        setData(data.standings[0].table);
    }

    useEffect(() => {
        loadData();
    }, [league]);

    const handleSelect = (e) => {
        setLeague(e.target.value);
    }
    return (
        <div className="bxh-min">
            <div className="bxh-min-header">Live table</div>
            <div >
                <select className="selecter" onChange={(e) => handleSelect(e)}>
                    <option value="2021">Premier League</option>
                    <option value="2014">LaLiga</option>
                    <option value="2002">Bundesliga</option>
                    <option value="2015">Ligue 1</option>
                    <option value="2019">Serie A</option>
                </select>
            </div>
            <div className="bxh-min-body">
                <table>
                    <thead>
                        <tr className='card'>
                            <div className='idx'>#</div>
                            <div className='bxhmin-team'>TEAM</div>
                            <div className='idx'>P</div>
                            <div className='idx'>GD</div>
                            <div className='idx'>PTS</div>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((item, index) => <Row data={item} key={index}/>)}
                    </tbody>
                </table>




            </div>
            <div className='league-des'>
                <div className='dot ry-blue'></div>
                <div style={{ fontSize: '14px' }}>Champions League</div>
            </div>
            <div className='league-des'>
                <div className='dot orange'></div>
                <div style={{ fontSize: '14px' }}>Europa League</div>
            </div>
            <div className='league-des'>
                <div className='dot ry-green'></div>
                <div style={{ fontSize: '14px' }}>Europa Conference League qualification</div>
            </div>
            <div className='league-des'>
                <div className='dot ry-red'></div>
                <div style={{ fontSize: '14px' }}>Relegation</div>
            </div>
            <div style={{ borderTop: '1px solid #181818', marginTop: '10px', padding: '16px' }}>
                <p style={{ fontSize: '12px', whiteSpace: 'pre-wrap', textAlign: 'left', wordWrap: 'break-word' }}>Cup result provided 1 additional position in UEFA <br />Europa League</p>
            </div>

        </div>
    )
}
export default BXHmin;

const Row = ({ data }) => {
    return (
        <div className='card'>
            <div className='idx'>
                <p>
                    {data.position}
                </p>
                {
                    data.position < 5 ? <span className='foot ry-blue'></span> : (
                        data.position < 7 ? <span className='foot orange'></span> : (
                            data.position < 8 ? <span className='foot ry-green'></span> : (
                                data.position > 17 ? <span className='foot ry-red'></span> : null
                            )
                        )
                    )
                }

            </div>
            <div className='bxhmin-team'>
                <img src={data.team.crestUrl}></img>
                <div>{data.team.name.replace(' FC', '')}</div>
            </div>
            <div className='idx'>{data.playedGames}</div>
            <div className='idx'>{data.goalDifference}</div>
            <div className='idx'>{data.points}</div>
        </div>
    )
}