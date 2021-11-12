import React from 'react';
import video from './Videos/Shoes Ad.MOV';

const Main = () => {
    return (
        <>
            <video muted autoPlay loop className="video-container">
                <source src={video} type="video/mp4" />
            </video>
            <div className="heading">
                <h1>Stories Arabia</h1>
                <h3>Ut aliquam purus sit amet. Velit sed ullamcorper morbi tincidunt ornare.</h3>
            </div>
            <div className="video-overlay"></div>
        </>
    );
};

export default Main;
