import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FeatureCard from '../components/Home/FeatureExplore/FeatureCard';
import Navbar from './Shared/Navbar/Navbar';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    const [page, setPage] = useState(0)
    const [pageCount, setPageCount] = useState(0)
    const size = 15;
    useEffect(() => {
        axios.get(`http://localhost:5000/approveBlog?page=${page}&&size=${size}`)
            .then((res) => {
                setBlogs(res.data.blogs)
                const count = res.data.pageCount;
                const pageNumber = Math.ceil(count / size)
                setPageCount(pageNumber)
            })
            .catch((err) => {
                console.log(err.message);
            })
    }, [page])
    return (
        <>
            <Navbar />
            <div className='md:container md:mx-auto py-8'>
                <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                    {
                        blogs.map((blog, index) =>
                            <FeatureCard
                                key={index}
                                blog={blog}
                            ></FeatureCard>
                        )
                    }
                </div>
                <div className="pagination md:container md:mx-auto py-8 flex justify-center items-center justify-items-center">
                    {[...Array(pageCount).keys()]
                        .map(number => <button
                            key={number}
                            onClick={() => setPage(number)}
                            className={number === page ? "mr-4 bg-black hover:bg-gray-900 text-white text-center py-2 px-4 rounded" : 'mr-4 bg-white hover:bg-gray-200 text-black text-center py-2 px-4 rounded'}>{number + 1}</button>)}
                </div>
            </div>
        </>
    );
};

export default Blogs;