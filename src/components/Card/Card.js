import React from 'react';

const Card = () => {
    return (
        <div className="h-screen flex items-center justify-center bg-gray-100 dark">
            <div className="max-w-sm mx-auto p-8 bg-white rounded-xl shadow-md space-y-2 sm:flex sm:items-center sm:py-4 sm:space-y-0 sm:space-x-6 sm:dark:hover:bg-gray-300 duration-300">
                <img className='h-24 mx-auto rounded-full ring-4 ring-green-400 sm:mx-0 sm:flex-shrink-0 hover:scale-105 duration-300' src="https://i.ibb.co/MBLj77x/image-1169.png" alt="" />
                <div className='text-center space-y-2 sm:text-left'>
                    <div className='space-y-0.5'>
                        <h1 className='text-lg text-black font-semibold '>Learn with Sumit</h1>
                        <p className='text-gray-500 font-medium'>Youtube channel</p>
                        <button className='btn btn-purple rounded-sm'>Visit Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Card;