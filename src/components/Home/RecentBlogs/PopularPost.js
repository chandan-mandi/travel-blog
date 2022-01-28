import React from 'react';

const PopularPost = () => {
    return (
        <div class=" flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
            <div class="bg-gray-200 text-gray-700 text-lg px-6 py-4">Top Rated Spot</div>

            <div class="flex justify-between items-center px-6 py-4">
                <div class="bg-orange-600 text-xs uppercase px-2 py-1 rounded-full border border-gray-200 text-gray-200 font-bold">Under Review</div>
                <div class="text-sm">May 14, 1988</div>
            </div>

            <div class="px-6 py-4 border-t border-gray-200">
                <div class="border rounded-lg p-4 bg-gray-200">
                    Here is a short comment about this employee.
                </div>
            </div>

            <div class="bg-gray-200 px-6 py-4">
                <div class="uppercase text-xs text-gray-600 font-bold">Employee</div>

                <div class="flex items-center pt-3">
                    <div class="bg-blue-700 w-12 h-12 flex justify-center items-center rounded-full uppercase font-bold text-white">TN</div>
                    <div class="ml-4">
                        <p class="font-bold">Tony Nguyen</p>
                        <p class="text-sm text-gray-700 mt-1">Instructor</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularPost;