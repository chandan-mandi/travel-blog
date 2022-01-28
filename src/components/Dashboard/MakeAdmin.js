import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import swal from 'sweetalert';
import useAuth from '../hooks/useAuth';

const MakeAdmin = () => {
    const { user } = useAuth();
    console.log(user.email);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const loading = toast.loading('Adding...Please wait!');
        axios.put('https://tours-story-server.herokuapp.com/addAdmin', data, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('idToken')}`
            },
        })
            .then(res => {
                console.log(res);
                toast.dismiss(loading);
                if (res.data) {
                    return swal("Successfully Added", `${data.email} has been successfully added as an admin.`, "success");
                }
                swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true });
            })
            .catch(error => {
                toast.dismiss(loading);
                swal("Failed Not hit api!", "Something went wrong! Please try again.", "error", { dangerMode: true })
            });
    }
    return (
        <div className="grid grid-cols-3 gap-4 my-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3 pt-0 col-span-2">
                    <input type="text" placeholder="Enter Email Address" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bgWhite bgWhite rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" {...register("email", { required: true })}/>
                </div>
                <div className="">
                    <button type='submit' class="bg-yellow-500 hover:bg-yellow-700 text-white text-center py-2 px-4 rounded">
                        Make Admin
                    </button>
                </div>
            </form>
        </div>
    );
};

export default MakeAdmin;