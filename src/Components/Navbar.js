import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Navbar = () => {
    const [style, setStyle] = useState("humburger-menu-hidden");
    const toggleMenu = () => {
        if (style === "humburger-menu-hidden") {
            setStyle("humburger-menu");
        }
        else {
            setStyle("humburger-menu-hidden");
        }
    };

    return (
        <>
            <Router>
                <nav>
                    <div className="NavBar">
                        <Link to="/">
                            <div className="brand">ARABIA</div>
                        </Link>
                        <div className="humburger-btn" type="button" onClick={toggleMenu}>
                            <div className="fa-bar"></div>
                            <div className="fa-bar"></div>
                            <div className="fa-bar"></div>
                        </div>
                    </div>
                    <div className={style}>
                        <div className="close-btn" type="button" onClick={toggleMenu}></div>
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
                    </div>
                </nav>
            </Router>
            <style jsx>{`
                
            `}</style>
        </>
    );
};

export default Navbar;
