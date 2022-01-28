import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import Rating from 'react-rating';
import { useParams } from 'react-router-dom';
import useAuth from '../components/hooks/useAuth';
import Navbar from './Shared/Navbar/Navbar';

const BlogDetails = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const [specificDetail, setSpecificDetail] = useState({});
    const [addComment, setAddComment] = useState(false);
    const [loading, setLoading] = useState(true);
    const { register, handleSubmit, reset } = useForm();
    const [rate, setRate] = useState(3);
    const [average, setAverage] = useState(0)

    useEffect(() => {
        axios.get(`https://tours-story-server.herokuapp.com/blog/${id}`)
            .then((data) => {
                setSpecificDetail(data.data)
                setLoading(false)
                setAddComment(false)
                setAverage(calcAverageRating(data.data.comments))
            })
    }, [id, addComment])
    console.log(specificDetail.comments);
    function calcAverageRating(ratings) {
        let totalRatings = 0;

        ratings.forEach((rating, index) => {
            totalRatings += rating.rating;
        });
        const averageRating = totalRatings / ratings.length;

        return averageRating.toFixed(1);
    }
    console.log("average rating", average);
    // const avg = specificDetail.comments.reduce((sum, curr) => sum + Number(curr), 0) / specificDetail.comments.length;
    // const { title, about, img } = specificDetail;

    const onSubmit = async data => {
        const loading = toast.loading('Uploading...Please wait!')
        console.log(data);
        const newComment = {
            comment: data.comment,
            userEmail: user.email,
            rating: rate,
            product_id: id,
        }
        await axios.put(`https://tours-story-server.herokuapp.com/addBlogComment/${id}`, newComment)
            .then(res => {
                console.log(res);
                if (res.data.modifiedCount === 1) {
                    toast.success('Successfully Added', {
                        id: loading,
                    });
                    setAddComment(true)
                    setRate(0)
                    // return swal("Successfully Added!", "Your Blog has been successfully added.", "success");
                }
            })
    }
    return (
        <>
            <Navbar />
            {
                loading ?
                    <div className='mx-auto '>
                        < div style={{ borderTopColor: "transparent" }
                        } className="mx-auto mt-24 w-16 h-16 border-4 border-blue-400 border-dashed rounded-full animate-spin" ></div>
                    </div >
                    :
                    <>
                        <div class="relative h-96">
                            <img src={specificDetail.img} className="w-full h-full object-cover" alt='' />
                        </div>

                        <div class="rounded-t-lg max-w-4xl mx-auto bg-white py-12 px-12 lg:px-24 -mt-24 relative z-10">
                            <h2 className="mt-4 uppercase tracking-widest text-xs text-gray-600">{specificDetail.publishDate}</h2>
                            <Rating
                                initialRating={average}
                                emptySymbol="far fa-star icon-color"
                                fullSymbol="fas fa-star icon-color"
                                readonly>
                            </Rating>
                            <h1 class="font-display text-2xl md:text-3xl text-gray-900 mt-4">{specificDetail.title}</h1>

                            <div class="prose prose-sm sm:prose lg:prose-lg mt-6">
                                {specificDetail.about}
                            </div>
                            <div class="bg-white p-10 rounded-lg shadow md:w-3/4 mt-4 lg:w-1/2">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div class="block mb-2 font-bold text-gray-600">Rating this post</div>
                                    <Rating
                                        initialRating={3}
                                        emptySymbol="far fa-star icon-color"
                                        fullSymbol="fas fa-star icon-color"
                                        onChange={(rate) => setRate(rate)}>
                                    </Rating>
                                    <div class="my-3">
                                        {/* <label for="comment" class="block mb-2 font-bold text-gray-600">Comment</label> */}
                                        <textarea type="text" id="comment" name="comment" placeholder="Put in your comment." class="border border-gray-300 shadow p-3 w-full rounded mb-" {...register("comment")} />
                                    </div>
                                    <button type='submit' href="#" class="bg-green-500 hover:bg-green-700 text-white text-center py-1 px-4 rounded-full">
                                        Submit
                                    </button>
                                </form>
                            </div>
                            <div className="user-comments mt-8">
                                <h1 className=''>Reviews: </h1>
                                {
                                    specificDetail.comments?.length < 0 &&
                                        <div className="text-base font-semibold capitalize w-full my-2 py-1 px-2 rounded text-teal-600 bg-teal-200 last:mr-0 mr-1">
                                            No Reviews
                                        </div>
                                        
                                        
                                }
                                {
                                    specificDetail.comments?.slice(0).reverse().map((comment, index) => (
                                        <div key={index} className="text-base font-semibold capitalize w-full my-2 py-1 px-2 rounded text-teal-600 bg-teal-200 last:mr-0 mr-1">
                                            {comment.comment}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </>




            }
        </>
    );
};

export default BlogDetails;


{/* <div class="container mt-32 mx-auto p-4 md:p-0">
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
                    </div> */}