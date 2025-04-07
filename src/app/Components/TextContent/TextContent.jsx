import React from 'react';
import TextContentHeader from './TextContentHeader';
import CallToAction from '../Misc/CallToAction';
import TextContentInner from './TextContentInner';
import Art from '../Misc/Art';
import Image from 'next/image';
import artImage from '../../assets/images/art_2.png';
import blogContentImage from '../../assets/images/blog_content_img.jpg';

import { TextContentData } from '../../Data/TextContent';

function TextContent() {
    return (
        <>
            <div className="text-content">
                <div className="text-content-wrapper position-relative bg-black">
                    <TextContentHeader heading="Next level free strategy sessions." />
                    <TextContentInner content={TextContentData} />
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

                <div className="single-image ">
                    <Image src={blogContentImage} alt="generic" />
                </div>
            </div>
        </>
    );
}

export default TextContent;
