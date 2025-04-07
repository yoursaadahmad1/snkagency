'use client';

import React, { useEffect } from 'react';

import Navbar from '../Components/Navs/Navbar';
import Footer from '../Components/Misc/Footer';

import { initializePage } from '../Components/utils';

const HomeAlternateLayout = ({ children }) => {

    useEffect(initializePage, []);

    return (
        <div className='main-page-area2'>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default HomeAlternateLayout;