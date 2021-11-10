import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <Router>
                <nav>
                    <div>
                        <Link to="/">
                            {/* Logo */}
                        </Link>
                        <button >
                            {/* Toggle */}
                        </button>
                        <div>
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
                    </div>
                </nav>
            </Router>
            <style jsx>{``}</style>
        </>
    );
};

export default Navbar;
