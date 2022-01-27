import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Shared/Navbar/Navbar';

const BlogDetails = () => {
    const { id } = useParams();
    const [specificDetail, setSpecificDetail] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://tours-story-server.herokuapp.com/blog/${id}`)
            .then((data) => {
                setSpecificDetail(data.data)
                setLoading(false)
            })
    }, [])
    console.log(specificDetail);
    // const { title, about, img } = specificDetail;
    return (
        <>
        <Navbar />
            {
                loading ?
                    <div>
                        < div style={{ borderTopColor: "transparent" }
                        } className="w-16 h-16 border-4 border-blue-400 border-dashed rounded-full animate-spin" ></div>
                    </div >
                    :
                    <div class="container mt-32 mx-auto p-4 md:p-0">
                        <div class="shadow-lg flex flex-wrap w-full lg:w-4/5 mx-auto">
                            <div class="bg-cover bg-bottom border w-full md:w-1/3 h-64 md:h-auto relative" style={{ backgroundImage: `url(${specificDetail.img})` }}>
                                <div class="absolute text-xl">
                                    <i class="fa fa-heart text-white hover:text-red-light ml-4 mt-4 cursor-pointer"></i>
                                </div>
                            </div>
                            <div class="bg-white w-full md:w-2/3">
                                <div class="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 ">
                                    <div class="bg-white lg:h-full p-6 -mt-6 md:mt-0  mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">

                                        <div class="w-full lg:w-3/5 lg:px-3">
                                            <h2 class="text-center font-serif  uppercase text-xl xl:text-xl">{specificDetail.title}</h2>
                                            <p class="text-md mt-4 lg:mt-0 text-justify md:text-left text-sm">
                                                {specificDetail.about}
                                            </p>
                                        </div>
                                        <div class="w-full lg:w-1/5 mt-6 lg:mt-0 lg:px-4 text-center md:text-left">
                                            <button class="bg-white hover:bg-grey-darker hover:text-white border border-solid border-grey w-1/3 lg:w-full py-2">Visit now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

            }
        </>
    );
};

export default BlogDetails;