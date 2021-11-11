import React, { useRef } from 'react';
import video from './Videos/Shoes Ad.MOV';

const Main = () => {
    // const vidRef = useRef(null);
    // // const [state, setState] = useState("");
    // let playVideo = () => {
    //     // You can use the play method as normal on your video ref
    //     this.vidRef.play();
    // };

    // let pauseVideo = () => {
    //     // Pause as well
    //     this.vidRef.pause();
    // }; onClick={playVideo.bind(this)}onClick={pauseVideo.bind(this)}

    return (
        <>
            <video controls muted autoPlay loop class="video-container">
                <source src={video} type="video/mp4" />
                <h1>video project</h1>
            </video>
            <button className="switch-btn">
                <span>
                    play
                </span>
                <span>
                    pause
                </span>
                <span className="switch"></span>
            </button>
        </>
    );
};

export default Main;
