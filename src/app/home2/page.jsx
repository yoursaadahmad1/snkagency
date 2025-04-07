import React from 'react';

import Testimonial from '../Components/Testimonial/Testimonial';
import ServicesSection from '../Components/ServicesComponents/ServicesSection';
import ClientSection from '../Components/ClientComponents/ClientSection';
import TextContent from '../Components/TextContent/TextContent';
import CallToAction from '../Components/Misc/CallToAction';
import ImageSlider from '../Components/Misc/ImageSlider';
import Heading from '../Components/Headers/Heading';
import headerImage from '../assets/images/index-2-header-img-1.jpg';
import artImage from '../assets/images/art_3.png';

import ProjectsContent from '../Components/ProjectComponents/ProjectsContent';
import Art from '../Components/Misc/Art';

const page = () => {
    return (
        <div>
            <div className="index-2-header position-relative">
                <div className="top-heading">
                    <div className="container">
                        <Heading 
                            heading={<h1>Your ideas realized for the real world.</h1>}
                            headingClass="heading-very-large dark-1"
                            headingColumn="col-lg-9"
                        />
                    </div>
                </div>
                <ImageSlider
                    images={[
                        {
                            image: headerImage,
                            alt: 'Hero Image',
                        },
                        {
                            image: headerImage,
                            alt: 'Hero Image',
                        },
                    ]}
                />
            </div>
            <ServicesSection />
            <TextContent />
            <div className="projects">
                <Heading 
                    heading={<h2>Check some of our recent works.</h2>}
                    headingClass="heading-very-large dark-1"
                    headingColumn="col-lg-9"
                    WrapperComponent={(props) => {
                        return (
                            <div className="projects-header-1">
                                <div className="container">
                                    {props.children}
                                </div>
                            </div>
                        )
                    }}
                />
                <ProjectsContent />
            </div>
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
            <Testimonial />
            <ClientSection />
            <CallToAction 
                wrapperClass='bg-main'
                heading={
                    <>
                        Have an idea?
                        <br />
                        Let’s get it done right!
                    </>
                }
                buttonText="Let's Work Together"
                buttonLink="/contact"
                buttonType="2"
                artwork={<Art art={artImage} type={'4'} />}
            />
        </div>
    );
};

export default page;