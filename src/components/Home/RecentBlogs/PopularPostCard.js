import React from 'react';
import { useNavigate } from 'react-router-dom';

const PopularPostCard = ({blog}) => {
    const navigate = useNavigate();
    const handleBlogDetails = (id) => {
        navigate(`/blogs/${id}`)
    }
    return (
        <div onClick={() => handleBlogDetails(blog._id)} v-for="card in cards" class="grid grid-cols-3 gap-4 overflow-hidden bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2 hover:cursor-pointer">
            
            <div class="h-auto">
                <img src={blog.img} className="inset-0 h-full w-full object-cover object-center" alt='' />
            </div>
            
            <div class="col-span-2 py-4 px-2 text-gray-800 flex flex-col">
                <h3 class="font-semibold text-lg leading-tight truncate">{ blog.title }</h3>
                <p class= "mt-2">
                    <span className='text-[#FFA902]'>Post</span> By <span className='capitalize font-semibold text-[#141414]'>{blog.author}</span> 
                </p>
                
            </div>
        </div>
    );
};

export default PopularPostCard;