"use client"

import React from 'react';
import Heading from '../Headers/Heading';
import Art from '../Misc/Art';
import Image from 'next/image';
import services1 from '../../assets/images/services-1.jpg'
import artImage from '../../assets/images/art_1.png'

function ServicesDetailedheader() {
    return (
        <>
            <div className="page-header position-relative">
                <Heading 
                        heading={<h1>Strategy</h1>}
                        headingClass="heading-very-large dark-1"
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
                        <Image src={services1} alt="about-header" />
                    </div>
                </div>
                <Art art={artImage} type="1" />
            </div>
        </>
    );
}

export default ServicesDetailedheader;
