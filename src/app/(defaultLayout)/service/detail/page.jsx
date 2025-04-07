import React from 'react';
import AboutText from '../../../Components/AboutComponents/AboutText';
import TextContentHeader from '../../../Components/TextContent/TextContentHeader';
import ServicesDetailedheader from '../../../Components/ServicesComponents/ServicesDetailedheader';
import CallToAction from '../../../Components/Misc/CallToAction';
import ImageSection from '../../../Components/Sections/ImageSection';
import Art from '../../../Components/Misc/Art';
import TabsSection from '../../../Components/Sections/TabsSection';
import { imageSectionData } from '../../../Data/ImageSectionData';
import logowhite from '../../../assets/images/logowhite.png';
import artImage from '../../../assets/images/art_2.png'
import blogContent from '../../../assets/images/blog_content_img.jpg'

import Image from 'next/image';

function ServicesDetailed() {
    return (
        <>
            <ServicesDetailedheader />
            <AboutText image={logowhite} content="To deliver our expertise flexibly and with maximum impact, we have developed
                                    three different ways of working. Each is adaptable to your core needs, processes
                                    and culture of your business." />

            {imageSectionData.map((imageSection, index) => {
                return (
                    <ImageSection
                        heading={imageSection.heading}
                        content={imageSection.content}
                        image={imageSection.image}
                        title={imageSection.title}
                        iconNum={imageSection.iconNum}
                        reverse={(index + 1) % 2 === 0}
                        icon={imageSection.icon}
                        key={index}
                    />
                );
            })}

            <div className="text-content">
                <div className="text-content-wrapper position-relative bg-black">
                    <TextContentHeader heading="Next level free strategy sessions." />

                    <div className="text-content-inner">
                        <TabsSection dark="true" />
                    </div>
                    <CallToAction 
                        wrapperClass='text-content-footer bg-black pt-0 pb-0'
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
                    <Art art={artImage} type="2" />
                </div>
            </div>

            <div className="single-image ">
                <Image src={blogContent} alt="generic" />
            </div>
        </>
    );
}

export default ServicesDetailed;
