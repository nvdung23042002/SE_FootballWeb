import './teamcard.css';
const TeamCard = ({ props }) => {
    return (
        <div className="container">
            {props === undefined ? (
                <>
                    <div className='idx'>#</div>
                    <div className='team'>

                        <div>TEAM</div>
                    </div>
                    <div className='idx'>P</div>
                    <div className='idx'>W</div>
                    <div className='idx'>D</div>
                    <div className='idx'>L</div>
                    <div className='idx'>F</div>
                    <div className='idx'>A</div>
                    <div className='idx'>GD</div>
                    <div className='idx'>PTS</div>
                </>
            ) : (
                <>
                    <div className='idx'>1</div>
                    <div className='team'>
                        <img src="https://lsm-static-prod.livescore.com/medium/enet/8456.png"></img>
                        <div>Manchester City</div>
                    </div>
                    <div className='idx'>33</div>
                    <div className='idx'>25</div>
                    <div className='idx'>5</div>
                    <div className='idx'>3</div>
                    <div className='idx'>80</div>
                    <div className='idx'>21</div>
                    <div className='idx'>59</div>
                    <div className='idx'>80</div>
                </>
            )}

        </div>
    )
}

export default TeamCard;