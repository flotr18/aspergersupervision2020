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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim iste animi eligendi aspernatur natus est et
                obcaecati dignissimos deserunt, facilis maxime voluptate praesentium. Assumenda eaque corrupti quasi eum
                autem porro!</p>
                <button>Discover the game</button>
            </div>
        </div>
    )

}

export default Milo_part_1