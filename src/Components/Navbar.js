import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Navbar = () => {
    // const [display, setDisplay] = useState("");

    return (
        <>
            <Router>
                <nav>
                    <div className="NavBar">
                        <Link to="/">
                            <div className="brand">ARABIA</div>
                        </Link>
                        <div className="humburger-btn">
                            <div className="fa-bar"></div>
                            <div className="fa-bar"></div>
                            <div className="fa-bar"></div>
                        </div>
                    </div>
                    {/* <div className="humburger-menu">
                        <ul>
                            <li>
                                <Link to="/products">
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link to="/about">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div> */}
                </nav>
            </Router>
            <style jsx>{`
                
            `}</style>
        </>
    );
};

export default Navbar;
