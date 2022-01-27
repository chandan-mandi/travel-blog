import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const AllBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get("https://tours-story-server.herokuapp.com/blogs")
            .then(({ data }) => {
                setBlogs(data.blogs)
                setLoading(false)
            }).catch(err => console.log(err.message))
    }, [])
    console.log("allblog", blogs);
    // HANDLE STATUS CHANGE
    const handleStatusChange = (id, status) => {
        const modifiedStatus = { id, status }

        axios.patch(`https://tours-story-server.herokuapp.com/blogs/${id}`, modifiedStatus)
            .then(res => res.data && toast.success(`Set to ${status}`))
            .catch(error => alert(error.message))
    }
    return (
        <div className="container flex justify-center mx-auto">
            <div className="flex flex-col">
                <div className="w-full">
                    <div className="border-b border-gray-200 shadow">
                        <table className="divide-y divide-gray-300 ">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-2 text-xs text-gray-500">
                                        SL
                                    </th>
                                    <th className="px-6 py-2 text-xs text-gray-500">
                                        Title
                                    </th>
                                    <th className="px-6 py-2 text-xs text-gray-500">
                                        About
                                    </th>
                                    <th className="px-6 py-2 text-xs text-gray-500">
                                        Status
                                    </th>

                                    <th className="px-6 py-2 text-xs text-gray-500">
                                        Created_at
                                    </th>
                                    <th className="px-6 py-2 text-xs text-gray-500">
                                        Edit
                                    </th>
                                    <th className="px-6 py-2 text-xs text-gray-500">
                                        Delete
                                    </th>
                                </tr>
                            </thead>
                            {
                                loading ?
                                    <div>
                                        <div style={{ borderTopColor: "transparent" }} className="w-16 h-16 border-4 border-blue-400 border-dashed rounded-full animate-spin"></div>
                                    </div>
                                    :
                                    blogs.map((blog, index) => (
                                        <tbody key={blog._id} className="bg-white divide-y divide-gray-300">
                                            <tr className="whitespace-nowrap">
                                                <td className="px-6 py-4 text-sm text-gray-500">
                                                    {index + 1}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm text-gray-900">
                                                        {blog.title}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm text-gray-500">
                                                        {blog.about.slice(0, 20)}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                    <span
                                                        className="inline-flex px-2 text-xs font-semibold leading-5  rounded-full">
                                                        <select
                                                            className={`${blog.status === "Pending" ? "" : blog.status === "Approved" ? "btn-success" : blog.status === "On going" && "btn-info"} ${"w-full border bg-white rounded px-3 py-2 outline-none"}`}
                                                            defaultValue={blog.status}
                                                            onChange={e => handleStatusChange(blog._id, e.target.value)}>
                                                            <option className="">Pending</option>
                                                            <option className="bg-white text-muted">On going</option>
                                                            <option className="bg-white text-muted">Approved</option>
                                                        </select>
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-500">
                                                    {blog.publishDate}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <Link to="/">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-400" fill="none"
                                                            viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                        </svg>
                                                    </Link>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <Link to="/">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-400" fill="none"
                                                            viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                        </svg>
                                                    </Link>
                                                </td>
                                            </tr>
                                        </tbody>
                                    ))
                            }

                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllBlogs;