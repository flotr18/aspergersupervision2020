import React from 'react';
import neon from './css/img/neon.mp4';

function Milo_part_1() {
    const videoSource = "./img_videos/neon.mp4"
    return (
        <div className="header">
            <video className='videoTag' id="video" autoPlay loop muted>
                <source src={neon} type='video/mp4' />
            </video>
            <div id="videoMessage" className="styling">
                <div className="extend"></div>
                <p>Discover Alter, a serious game in which you will understand the difficulty of someone being affected by the Asperger syndrome. Try to communicate and befriend all the people by making the good choices
</p>
                <button>Discover the game</button>
            </div>
        </div>
    )

}

export default Milo_part_1