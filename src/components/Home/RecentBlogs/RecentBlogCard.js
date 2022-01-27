import React from 'react';
import { useNavigate } from 'react-router-dom';

const RecentBlogCard = ({blog}) => {
    const navigate = useNavigate();
    const handleBlogDetails = (id) => {
        navigate(`/blogs/${id}`)
    }
    return (
        <div onClick={() => handleBlogDetails(blog._id)} v-for="card in cards" class="flex flex-col md:flex-row overflow-hidden bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2 hover:cursor-pointer">
            
            <div class="h-64 w-auto md:w-1/2">
                <img src={blog.img} className="inset-0 h-full w-full object-cover object-center" alt='' />
            </div>
            <div class="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                <h3 class="font-semibold text-lg leading-tight truncate">{ blog.title }</h3>
                <p class= "mt-2">
                    <span className='text-[#FFA902]'>Post</span> By <span className='capitalize font-semibold text-[#141414]'>{blog.author}</span> 
                </p>
                <p class= "mt-2">
                <span className='capitalize font-semibold text-[#141414]'>{blog.publishDate}</span> ------   <span className='text-[#FFA902]'>50 Comments</span>
                </p>
                <p class="mt-2">
                    {blog.about }
                </p>
                
            </div>
        </div>
    );
};

export default RecentBlogCard;