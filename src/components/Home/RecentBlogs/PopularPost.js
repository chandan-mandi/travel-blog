import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PopularPostCard from './PopularPostCard';
import RecentBlogCard from './RecentBlogCard';

const PopularPost = () => {
    const [blogs, setBlogs] = useState([])
    const [page, setPage] = useState(0)
    const [pageCount, setPageCount] = useState(0)
    const size = 3;
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
        <div class=" flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
            <div class="bg-gray-200 text-gray-700 text-lg px-6 py-4">Top Rated Spots</div>

            <div class="flex justify-between items-center px-6 py-4">
                <div class="bg-orange-600 text-xs uppercase px-2 py-1 rounded-full border border-gray-200 text-gray-200 font-bold">Most Popular</div>
                <div class="text-sm">January 28, 2022</div>
            </div>

            <div class="px-6 py-4 border-t border-gray-200">
                <div class="border rounded-lg p-4 bg-gray-200">
                    {
                        blogs?.slice(0).reverse().map((blog, index) => (
                            blog.status !== "Pending" &&
                            <PopularPostCard
                                key={index}
                                blog={blog}
                            ></PopularPostCard>
                        ))
                    }
                </div>
            </div>

            <div class="bg-gray-200 px-6 py-4">
                <div class="uppercase text-xs text-gray-600 font-bold">Top Author</div>

                <div class="flex items-center pt-3">
                    <div class="bg-blue-700 w-12 h-12 flex justify-center items-center rounded-full uppercase font-bold text-white">CM</div>
                    <div class="ml-4">
                        <p class="font-bold">Chandan Mandi</p>
                        <p class="text-sm text-gray-700 mt-1">Author</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularPost;