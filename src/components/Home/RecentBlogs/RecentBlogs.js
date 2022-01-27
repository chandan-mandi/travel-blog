import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PopularPost from './PopularPost';
import RecentBlogCard from './RecentBlogCard';

const RecentBlogs = () => {
    /* const blogs = [
        {
            "title": "The Golden Sands of Florida and clifornia",
            "about": "Lorem ipsum dolor sit amet, con turad iscingelit. In sed et donec purus viverra. Sit  justo velit, eu sed",
            "category": "solo",
            "img": "https://images.pexels.com/photos/667236/pexels-photo-667236.jpeg",
            "author": "chandan",
            "publishDate": "10 Nov, 2020"
        },
        {
            "title": "Chandan The Golden Sands of Florida and clifornia",
            "about": "Lorem ipsum dolor sit amet, con turad iscingelit. In sed et donec purus viverra. Sit  justo velit, eu sed Lorem ipsum dolor sit amet, con turad iscingelit. In sed et donec purus viverra. Sit  justo velit, eu sed Lorem ipsum dolor sit amet, con turad iscingelit. In sed et donec purus viverra. Sit  justo velit, eu sed ",
            "category": "solo",
            "img": "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg",
            "author": "chandan",
            "publishDate": "10 Nov, 2020"
        },
        {
            "title": "Chandan The Golden Sands of Florida and clifornia",
            "about": "Lorem ipsum dolor sit amet, con turad iscingelit. In sed et donec purus viverra. Sit  justo velit, eu sed Lorem ipsum dolor sit amet, con turad iscingelit. In sed et donec purus viverra. Sit  justo velit, eu sed Lorem ipsum dolor sit amet, con turad iscingelit. In sed et donec purus viverra. Sit  justo velit, eu sed ",
            "category": "solo",
            "img": "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg",
            "author": "chandan",
            "publishDate": "10 Nov, 2020"
        },
        {
            "title": "Chandan The Golden Sands of Florida and clifornia",
            "about": "Lorem ipsum dolor sit amet, con turad iscingelit. In sed et donec purus viverra. Sit  justo velit, eu sed Lorem ipsum dolor sit amet, con turad iscingelit. In sed et donec purus viverra. Sit  justo velit, eu sed Lorem ipsum dolor sit amet, con turad iscingelit. In sed et donec purus viverra. Sit  justo velit, eu sed ",
            "category": "solo",
            "img": "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg",
            "author": "chandan",
            "publishDate": "10 Nov, 2020"
        },
        {
            "title": "The Golden Sands of Florida and clifornia",
            "about": "Lorem ipsum dolor sit amet, con turad iscingelit. In sed et donec purus viverra. Sit  justo velit, eu sed",
            "category": "solo",
            "img": "https://images.pexels.com/photos/667236/pexels-photo-667236.jpeg",
            "author": "chandan",
            "publishDate": "10 Nov, 2020"
        }
    ] */
    const [blogs, setBlogs] = useState([])
    const [page, setPage] = useState(0)
    const [pageCount, setPageCount] = useState(0)
    const size = 3;
    useEffect(() => {
        axios.get(`http://localhost:5000/blogs?page=${page}&&size=${size}`)
        .then((res) => {
            setBlogs(res.data.blogs)
            const count = res.data.pageCount;
            const pageNumber = Math.ceil(count/ size)
            setPageCount(pageNumber)
        })
        .catch((err) => {
            console.log(err.message);
        })
    },[page])
    console.log(pageCount);
    return (
        <div class="pt-6 pb-12 bg-gray-300">
            <div id="card" class="">
                <h2 class="text-center font-serif  uppercase text-4xl xl:text-5xl">Recent Articles</h2>
                <div class="md:container md:mx-auto py-8 grid grid-cols-3 gap-4">
                    {/* <!-- container for all cards --> */}
                    <div class="container w-100 mx-auto flex flex-col col-span-2">
                        {
                            blogs.map((blog, index) => 
                            <RecentBlogCard 
                                key={index}
                                blog={blog}
                            ></RecentBlogCard>
                            )
                        }
                        <div className="pagination m-8">
                            {[...Array(pageCount).keys()]
                            .map(number => <button 
                            key={number}
                            onClick={() => setPage(number)}
                            className={number === page ? "mr-4 bg-black hover:bg-gray-900 text-white text-center py-2 px-4 rounded" : 'mr-4 bg-white hover:bg-gray-200 text-black text-center py-2 px-4 rounded'}>{number +1 }</button>)}
                        </div>
                    </div>
                    <div class="container w-100 mx-auto mt-4">
                        <PopularPost />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentBlogs;