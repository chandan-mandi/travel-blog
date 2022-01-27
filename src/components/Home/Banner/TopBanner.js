import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import SingleSlide from './SingleSlide';
import "./TopBanner.css";

const TopBanner = () => {
    const [slides, setSlides] = useState([])
    const slidess = [
        {
            "title": "HEARD OF TH SPYERLIN A WORK TOP IN THINGS OT SEE IN AND DO ",
            "subtitle": "IN NORTHERN GO TO CALIFORNIA HILL.",
            "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed et donec purus viverra. Sit justo velit, eu sed sollicitudin tempus, risus. Sed sit elit mauris adipiscing. Lobortis pellentesque nulla accumsan id urna, ullamcorper gravida varius. Massa mauris, cursus orci magna non enim fames et sed. ",
            "img": "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
        {
            "title": "kjfklajoeiojlkfjsf l  fljaskljfl affff lkfjlasjfoi lfjaljfoa ",
            "subtitle": "IN NORTHERN GO TO CALIFORNIA HILL.",
            "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed et donec purus viverra. Sit justo velit, eu sed sollicitudin tempus, risus. Sed sit elit mauris adipiscing. Lobortis pellentesque nulla accumsan id urna, ullamcorper gravida varius. Massa mauris, cursus orci magna non enim fames et sed. ",
            "img": "https://images.pexels.com/photos/667236/pexels-photo-667236.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        }
    ]
    useEffect(() =>  {
        axios.get("https://tours-story-server.herokuapp.com/slideses")
        .then((res) => {
            setSlides(res.data)
        })
    },[])

    console.log(slides);
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <img src="https://cdn-icons-png.flaticon.com/512/271/271218.png" alt="prevArrow" {...props} />
    );

    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <img src="https://cdn0.iconfinder.com/data/icons/feather/96/591276-arrow-right-512.png" alt="nextArrow" {...props} />
    );

    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        slide: 'div',
        cssEase: 'linear',
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 1008,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        // prevArrow: <SlickArrowLeft />,
        // nextArrow: <SlickArrowRight />,
    };
    return (
        <div>
            <Slider {...settings}>
                    {
                        slidess.map((item) =>
                            <SingleSlide
                                key={item._id}
                                item={item}
                            ></SingleSlide>
                        )}
                </Slider>
        </div>
    );
};

export default TopBanner;