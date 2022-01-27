import React from 'react';
import FeatureCard from './FeatureCard';

const FeatureExplore = () => {
    const blogs = [
        {
            "title": "The Golden Sands of Florida and clifornia",
            "about": "Lorem ipsum dolor sit amet, con turad iscingelit. In sed et donec purus viverra. Sit  justo velit, eu sed",
            "category": "solo",
            "img": "https://images.pexels.com/photos/667236/pexels-photo-667236.jpeg",
            "author": "chandan"
        },
        {
            "title": "Chandan The Golden Sands of Florida and clifornia",
            "about": "Lorem ipsum dolor sit amet, con turad iscingelit. In sed et donec purus viverra. Sit  justo velit, eu sed",
            "category": "solo",
            "img": "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg",
            "author": "chandan"
        },
        {
            "title": "The Golden Sands of Florida and clifornia",
            "about": "Lorem ipsum dolor sit amet, con turad iscingelit. In sed et donec purus viverra. Sit  justo velit, eu sed",
            "category": "solo",
            "img": "https://images.pexels.com/photos/667236/pexels-photo-667236.jpeg",
            "author": "chandan"
        }
    ]
    return (
        <div className='md:container md:mx-auto py-8'>
            <div className="md:mx-auto py-8">
                <h1 class="text-center text-3xl font-semibold leading-normal mt-0 mb-2 text-black">
                    Feature Explore
                </h1>
            </div>

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
        </div>
    );
};

export default FeatureExplore;