import React from 'react';
import neon from './css/img/neon.mp4';
import img from './css/img/Plan_de_travail_2.jpg';

function Milo_part_1() {
    const videoSource = "./img_videos/neon.mp4"
    return (
        <div className="header">
            <img src={img} id="img" alt="presentation img"/>
            <div id="imgMessage" className="styling">
                <p>Discover Alter, a serious game in which you will understand the difficulty of someone being affected by the Asperger syndrome. Try to communicate and befriend all the people by making the good choices
</p>
                <button>Discover the game</button>
                
            </div>
        </div>
    )

}
/*
<video className='videoTag' id="video" autoPlay loop muted>
                <source src={neon} type='video/mp4' />
            </video>
*/

export default Milo_part_1