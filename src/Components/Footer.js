import React from "react";

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-content">
                    <div className="footer-content-top">
                        <div className="footer-content-top-left">
                            <div className="brand">ARABIA</div>
                            <div className="brand-email"><i className="fa fa-mail"/>arabia@gmail.com</div>
                            <div className="brand-number"><i className="fa fa-phone"/>+966-5-567-567-567</div>
                            <div className="brand-icons">
                                <span>
                                    <i className="fa fa-facebook">F</i>
                                </span>
                                <span>
                                    <i className="fa fa-instagram">I</i>
                                </span>
                                <span>
                                    <i className="fa fa-twitter">T</i>
                                </span>
                            </div>
                        </div>
                        <div className="footer-content-top-right">
                                <p>If you'd like to talk to us about a project, we would love to hear from you. Let's make films!</p>
                                <div className="brand-works">
                                    <span>Chicago Video Production</span>
                                    <span>Los Angeles Video Production</span>
                                    <span>New York Video Production</span>
                                </div>
                                <hr />
                                <div className="brand-tags">Video Production - Corporate Video Production - Commercial Video - Website Video Production - Promo Videos - Post Production</div>
                            
                        </div>
                    </div>
                    <div className="footer-content-bottom">
                        <div className="footer-content-bottom-left">
                            <h6>Arabia Company. Making films for clients around the Globe</h6>
                        </div>
                        <div className="footer-content-bottom-right">
                            <h6>© 2021 Arabia - All rights reserved.</h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
