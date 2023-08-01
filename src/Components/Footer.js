import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import "./Footer.css";

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-content">
                    <div className="footer-content-top">
                        <div className="footer-content-top-left">
                            <div className="brand">Stories Arabia</div>
                            <div className="brand-email"><i className="fa fa-mail"/>
                            <a href="mailto://info@storiesarabia.com" target="_blank">info@storiesarabia.com</a>
                            </div>
                            <div className="brand-number"><i className="fa fa-phone"/>
                            <a href="tel:+971-55-555-4836" target="_blank">+971-55-555-4836</a>
                            </div>
                            <div className="brand-icons">
                                <span>
                                    <FaFacebook />
                                </span>
                                <span>
                                    <FaInstagram />
                                </span>
                                <span>
                                    <FaTwitter />
                                </span>
                            </div>
                        </div>
                        <div className="footer-content-top-right">
                                <p>We work closely with all our clients to create visible results</p>
                               
                                <hr />
                                <div className="brand-tags">Video Production - Influencer marketing - Content creation - Website Production - Promo Videos - Post Production</div>
                            
                        </div>
                    </div>
                    <div className="footer-content-bottom">
                        <div className="footer-content-bottom-left">
                            <h6>Stories Arabia Company. Making films for clients around the Globe</h6>
                        </div>
                        <div className="footer-content-bottom-right">
                            <h6>© 2021 Stories Arabia - All rights reserved.</h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
