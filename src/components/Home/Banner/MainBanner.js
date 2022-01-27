import React from 'react';
import "./TopBanner.css";
import Fade from 'react-reveal/Fade';

const MainBanner = () => {
    return (
        <div className='banner-main text-white'>
            <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
                style={{
                    minHeight: "75vh"
                }}>
                <div className="absolute top-0 w-full h-full bg-center bg-cover"
                    style={{
                        backgroundImage: "url('https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg')"
                    }}>
                    <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
                </div>
                <div className="container relative mx-auto">
                    <div className="items-center flex flex-wrap">
                        <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                            <div className="pr-12">
                                <h1 className="text-white font-semibold text-5xl">
                                    Your story starts with us.
                                </h1>
                                <p className="mt-4 text-lg text-gray-300">
                                    This is a simple example of a Landing Page you can build
                                    using Tailwind Starter Kit. It features multiple CSS
                                    components based on the Tailwindcss design system.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
                </div>
            </div>
            );
};

            export default MainBanner;