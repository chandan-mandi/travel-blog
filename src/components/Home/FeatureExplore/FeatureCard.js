import React from 'react';
import { useNavigate } from 'react-router-dom';

const FeatureCard = ({blog}) => {
    const navigate = useNavigate();
    const handleBlogDetails = (id) => {
        navigate(`/blogs/${id}`)
    }
    return (
        <div onClick={() => handleBlogDetails(blog._id)} class="rounded overflow-hidden shadow-lg hover:cursor-pointer">
            <img class="w-full" src={blog.img} alt="Mountain" />
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{blog.title?.slice(0,60)}</div>
                <p class="text-gray-700 text-base">
                    {blog.about?.slice(0,120)}...
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{blog.category} Travel</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
        </div>
    );
};

export default FeatureCard;