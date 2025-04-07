"use client"

import React from 'react';
import Heading from '../Headers/Heading';
import Art from '../Misc/Art';
import Image from 'next/image';
import aboutHeader from '../../assets/images/about-header.jpg';
import artImage from '../../assets/images/art_1.png';

function Services1Header() {
    return (
        <>
            <div className="page-header position-relative">
                <Heading 
                    heading={<h1>Capabilities</h1>}
                    headingClass="heading-very-large dark-1"
                    paragraph="Our team helps companies develop their ideas into cutting-edge products that will cause customers to love and enjoy."
                    paragraphClass="dark-2"
                    WrapperComponent={(props) => {
                        return (
                            <div className="page-header-top">
                                <div className="container">
                                    {props.children}
                                </div>
                            </div>
                        )
                    }}
                />
                <div className="page-header-bottom">
                    <div className="single-image">
                        <Image src={aboutHeader} alt="about-header" />
                    </div>
                </div>
                <Art art={artImage} type="1" />
            </div>
        </>
    );
}

export default Services1Header;
