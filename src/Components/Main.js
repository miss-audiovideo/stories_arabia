import React from 'react';
import video from './Videos/Shoes Ad.MOV';

const Main = () => {
    return (
        <>
            <div>
                <video width="400" controls>
                    <source src={video} type="video/mp4" />
                    Your browser does not support HTML video.
                </video>
            </div>
        </>
    );
};

export default Main;
