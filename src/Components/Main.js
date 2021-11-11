import React, { useRef } from 'react';
import video from './Videos/Shoes Ad.MOV';

const Main = () => {
    return (
        <>
            <video muted autoPlay loop class="video-container">
                <source src={video} type="video/mp4" />
                <h1>video project</h1>
            </video>
        </>
    );
};

export default Main;
