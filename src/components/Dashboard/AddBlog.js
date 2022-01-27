import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import swal from 'sweetalert';

const AddBlog = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async data => {
        console.log('img', data);
        if (!data.img[0]) {
            return toast.error('Please upload an image!');
        }
        const loading = toast.loading('Uploading...Please wait!')
        let imageURL = "";
        console.log(data)
        if(data.img[0]){
            const imageData = new FormData();
            imageData.set('key', 'acb2d4c7a68ef1bf06d396d73adb600a')
            imageData.append('image', data.img[0]);
            try {
                const res = await axios.post("https://api.imgbb.com/1/upload", imageData);
                console.log(res)
                imageURL = res.data.data.display_url;
                toast.dismiss(loading);
            } catch (error) {
                toast.dismiss(loading);
                return toast.error('Failed to upload the image!');
            }
        }
        const blogInfo = {
            title: data.title,
            about: data.about,
            category: data.category,
            img: imageURL,
            author: data.author,
            publishDate: new Date().toLocaleDateString(),
            status: "Pending"
        }
        console.log("Blogdata", blogInfo)
        // dispatch(addNewRide(serviceInfo))
        await axios.post("http://localhost:5000/blogs", blogInfo)
        .then(res => {
            if (res.data.insertedId) {
                toast.success('Successfully Added', {
                    id: loading,
                });
                return swal("Successfully Added!", "Your Blog has been successfully added.", "success");
            }
        })
        reset();
    }
    return (
        <div>
            <div class="md:grid md:grid-cols-6 gap-4 bg-gray-400">

                <div class="mt-5 md:mt-0 md:col-start-2 col-span-4 py-8">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="shadow sm:rounded-md sm:overflow-hidden">
                            <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                                <div class="grid grid-cols-3 gap-6">
                                    <div class="col-span-3 sm:col-span-2">
                                        <label for="company_website" class="block text-sm font-medium text-gray-700">
                                            Add New Blog
                                        </label>
                                        <div class="mt-1 flex rounded-md shadow-sm">
                                            <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                                Title:
                                            </span>
                                            <input type="text" name="company_website" id="company_website" class="py-2 pl-4 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md md:text-base sm:text-sm border-gray-300" placeholder="Type your Blog heading" {...register("title")}/>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label for="about" class="block text-sm font-medium text-gray-700">
                                        About
                                    </label>
                                    <div class="mt-1">
                                        <textarea id="about" name="about" rows="3" class="md:text-base p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Enter about your blog"  {...register("about", { required: true })}></textarea>
                                    </div>
                                    <p class="mt-2 text-sm text-gray-500">
                                        Brief description for your blog. URLs are hyperlinked.
                                    </p>
                                </div>

                                <div class="grid grid-cols-2 gap-4">
                                    <div class="mt-1 flex rounded-md shadow-sm">
                                        <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                            Category:
                                        </span>
                                        <input type="text" name="company_website" id="company_website" class="py-2 pl-4 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md md:text-base sm:text-sm border-gray-300" placeholder="Type your Category here" {...register("category")} />
                                    </div>
                                    <div class="mt-1 flex rounded-md shadow-sm">
                                        <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                            Author: 
                                        </span>
                                        <input type="text" name="company_website" id="company_website" class="py-2 pl-4 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md md:text-base sm:text-sm border-gray-300" placeholder="Type Author name" {...register("author")}/>
                                    </div>
                                </div>

                                <div>
                                    <label class="block text-sm font-medium text-gray-700">
                                        Photo
                                    </label>
                                    <div class="mt-1 flex items-center">
                                        <span class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                                            <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                            </svg>
                                        </span>
                                        <button type="button" class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            Change
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <label class="block text-sm font-medium text-gray-700">
                                        Cover photo
                                    </label>
                                    <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                        <div class="space-y-1 text-center">
                                            <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="True">
                                                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            <div class="flex text-sm text-gray-600">
                                                <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                    <span>Upload a file</span>
                                                    <input id="file-upload" name="file-upload" type="file" class="sr-only" {...register("img")} />
                                                </label>
                                                <p class="pl-1">or drag and drop</p>
                                            </div>
                                            <p class="text-xs text-gray-500">
                                                PNG, JPG, GIF up to 10MB
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Save
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBlog;