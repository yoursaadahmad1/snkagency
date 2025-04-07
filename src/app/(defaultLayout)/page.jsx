"use client"
import React from 'react';

import ClientSection from '../Components/ClientComponents/ClientSection';
import Testimonial from '../Components/Testimonial/Testimonial';
import VideoSection from '../Components/Sections/VideoSection';
import TextAboutSection from '../Components/Misc/TextAboutSection';
import CallToAction from '../Components/Misc/CallToAction';
import ProjectHeader from '../Components/Headers/ProjectHeader';

import ProjectsSection from '../Components/ProjectComponents/ProjectsSection';

const Home = () => {
    return (
        <div>
            {/* Video section - start */}
            <VideoSection />
            {/* Video section - end */}

            {/* About section - start */}
            <TextAboutSection />
            {/* About section - end */}

            {/* Projects section - start */}
            <div className="projects">
                <div className="projects-wrapper">
                    <ProjectHeader
                        heading={'Recent work'}
                        paragraph={
                            'Our team helps companies develop their ideas into cutting-edge products that will cause customers to love and enjoy.'
                        }
                    />
                    <ProjectsSection />
                    <CallToAction 
                        wrapperClass='projects-footer bg-black'
                        headingClass='light-1'
                        heading={
                            <>
                                Have an idea?
                                <br />
                                Let’s get it done right!
                            </>
                        }
                        buttonText="Let's Work Together"
                        buttonLink="/contact"
                        buttonType="1"
                    />
                </div>
            </div>
            {/* Projects section - end */}

            {/* Testimonials section - start */}
            <Testimonial />
            {/* Testimonials section - end */}

            {/* Clients section - start */}
            <ClientSection />
            {/* Clients section - end */}
        </div>
    );
};

export default Home;