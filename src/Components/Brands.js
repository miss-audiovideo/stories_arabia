import React from "react";
import icon1 from "./Images/Icon1.png";
import icon2 from "./Images/Icon2.png";
import icon3 from "./Images/Icon3.png";
import icon4 from "./Images/Icon4.png";
import icon5 from "./Images/Icon5.png";

const Brands = () => {
    return (
        <>
            <div className="brands-section">
                <h1>As Seen On</h1>
                <div className="brands-container">
                    <div className="brand-item">
                        <img src={icon1} alt="icon1" />
                        <img src={icon2} alt="icon2" />
                        <img src={icon3} alt="icon3" />
                        <img src={icon4} alt="icon4" />
                        <img src={icon5} alt="icon5" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Brands;
