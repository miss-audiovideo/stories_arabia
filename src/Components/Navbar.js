import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
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
                            <FontAwesomeIcon icon={faBars} color="white" fontSize="1.5rem" />
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
                .humburger-menu{
                    opacity:0.8;
                    background-color:#ccc;
                    position:fixed;
                    width:100%;
                    height:100%;
                    top:0px;
                    left:0px;
                    z-index:1000;
                }
            `}</style>
        </>
    );
};

export default Navbar;
