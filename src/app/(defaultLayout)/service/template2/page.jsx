import React from 'react';
import Services1Header from '../../../Components/ServicesComponents/Services1Header';
import CallToAction from '../../../Components/Misc/CallToAction';
import ServicesSection from '../../../Components/ServicesComponents/ServicesSection';
import TextContent from '../../../Components/TextContent/TextContent';
import Heading from '../../../Components/Headers/Heading';
import TabsSection from '../../../Components/Sections/TabsSection';
import artImage from '../../../assets/images/art_3.png'

import Art from '../../../Components/Misc/Art';

function ServiceStyle2() {
    return (
        <>
            <Services1Header />
            <ServicesSection />

            <TextContent />

            <div className="tab-section">
                <div className="tab-section-wrapper">
                    <div className="container">
                        <Heading 
                            heading={<h2>Impactful approach to problem solving</h2>}
                            headingClass="heading-very-large dark-1"
                            headingColumn="col-lg-9"
                        />
                        <TabsSection />
                    </div>
                </div>
            </div>
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
        </>
    );
}

export default ServiceStyle2;
