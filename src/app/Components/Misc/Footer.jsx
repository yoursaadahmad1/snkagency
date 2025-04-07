"use client"
import React from 'react';
import NavSocials from '../Navs/NavSocials';
import Image from 'next/image';
import logowhite from '../../assets/images/logowhite.png'

function Footer() {
    return (
        <footer className="footer" style={{ position: 'relative', width: '100%' }}>
            <div className="footer--wrapper">
                <div className="container">
                    <div className="footer--header">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="footer--logo">
                                    <a href="index.html">
                                        <Image src={logowhite} alt="footer" height={100} width={100} />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-5 offset-lg-1">
                                <div className="footer--paragraph">
                                    <h3 className="heading heading-large light-1">
                                        A young digital agency in the heart of Vehari.
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer--details">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="detail-single footer-phone-number">
                                    <h6>PHONE</h6>
                                    <a href="tel:+923056755492">
                                        <h4>+92 305 6755492</h4>
                                    </a>
                                </div>
                                <div className="detail-single footer-address">
                                    <h6>ADDRESS</h6>
                                    <h4>
                                        Vehari, 61100,
                                        <br />
                                        Punjab, Pakistan
                                    </h4>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="detail-single footer-email">
                                    <h6>ENQUIRIES</h6>
                                    <a href="/mailto:mosesnuggz@gmail.com">
                                        <h4>mosesnuggz@gmail.com</h4>
                                    </a>
                                </div>
                                <div className="detail-single">
                                    <NavSocials />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="detail-single">
                                    <div className="email-form">
                                        <label>SUBSCRIBE</label>
                                        <div className="email-form-field">
                                            <span className="email">
                                                <input type="email" name="email" placeholder="Email address" />
                                            </span>
                                            <button type="submit">
                                                <i className="fas fa-check-circle"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <h6>Copyright © 2024.</h6>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
