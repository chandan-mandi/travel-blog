import React from 'react';
import "./TopBanner.css";
import Fade from 'react-reveal/Fade';

const MainBanner = () => {
    return (
        <div className='banner-main text-white'>
            <div className="banner-overlay">
                <div className="container">
                    <div className="flex justify-center">
                        <Fade left>
                            <div className="col-lg-6">
                                <div className="banner-content text-center text-md-start">
                                    <h1>HEARD OF TH SPYERLIN A WORK TOP IN THINGS OT SEE IN AND DO <span>IN NORTHERN GO TO CALIFORNIA HILL.</span></h1>
                                    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed et donec purus viverra. Sit justo velit, eu sed sollicitudin tempus, risus. Sed sit elit mauris adipiscing. Lobortis pellentesque nulla accumsan id urna, ullamcorper gravida varius. Massa mauris, cursus orci magna non enim fames et sed. </h6>
                                    
                                    <button variant="info" className='rounded-pill mt-2' >
                                        <h5 className='mb-0 px-3 py-2'><i className="far fa-play-circle text-danger"></i> Let's Go</h5>
                                    </button>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainBanner;