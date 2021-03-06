import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useHistory, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const SignUp = () => {
    const { signInWithGoogle, isLoading,sendVerificationEmail, registerUser, authError } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm();

    const handleGoogleSignIn = () => {
		signInWithGoogle(location, navigate);
	}
    const onSubmit = async data => {
	    await registerUser(data.email, data.password, data.name, navigate)
        
	};
    return (
        <div className="lg:my-7 md:my-20 my-1 flex flex-col">
            <div className="container max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-blue-50 px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="text-4xl title-font text-center mb-5 font-bold text-purple-900">Sign up</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            type="text"
                            {...register("name")}
                            className="block w-full p-3 mb-4 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-300 focus:bg-white focus:ring-2 focus:ring-indigo-300"
                            name="fullname"
                            placeholder="Full Name" />

                        <input
                            type="text"
                            {...register("email")}
                            className="block w-full p-3 mb-4 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-300 focus:bg-white focus:ring-2 focus:ring-indigo-300"
                            name="email"
                            placeholder="Email" />

                        <input
                            type="password"
                            {...register("password")}
                            className="block w-full p-3 mb-4 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-300 focus:bg-white focus:ring-2 focus:ring-indigo-300"
                            name="password"
                            placeholder="Password" />
                        <input
                            type="password"
                            className="block w-full p-3 mb-4 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-300 focus:bg-white focus:ring-2 focus:ring-indigo-300"
                            name="confirm_password"
                            placeholder="Confirm Password" 
                            {...register("password")}
                            />
                        <div className="text-center">
                            <p className="text-red-600">{authError}</p>
                            <button type='submit' className="md:w-6/12 justify-self-center items-center py-1.5 px-7 border-2 border-purple-700 rounded-md text-xl font-bold text-purple-900 bg-pink-200 hover:bg-purple-700 hover:text-white">Create Account</button>
                        </div>
                    </form>
                    <div>
                        <p className="text-center text-sm text-grey-dark mt-4">By signing up, you agree to the <Link className="border-b hover:border-purple-700 text-purple-700 font-semibold" to="/">
                            Terms of Service
                        </Link> and <Link className="border-b hover:border-purple-700 text-purple-700 font-semibold" to="/">
                                Privacy Policy
                            </Link>
                        </p>
                    </div>
                </div>

                <div className="text-grey-dark mt-6 text-center">
                    Already have an account? <Link className="no-underline border-b border-blue text-purple-700 font-semibold hover:border-purple-700" to="/login">
                        Log in
                    </Link>
                    <p>Or signup with <button onClick={handleGoogleSignIn} className="border-b border-blue text-purple-700 font-semibold hover:border-purple-700">Google</button></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;