import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
	const { loginUser, authError, signInWithGoogle } = useAuth();
	const location = useLocation();
	const navigate = useNavigate();
	const { register, handleSubmit, reset } = useForm();
	
	const onSubmit = data => {
		loginUser(data.email, data.password, location, navigate)
		console.log(data);
		reset();
		navigate("/")
	};
	const handleGoogleSignIn = () => {
		signInWithGoogle(location, navigate);
	}
	return (
		<div className="flex flex-col">
			<div className="bg-blue-50 w-full lg:w-1/3 md:w-2/3 mx-auto rounded-lg my-20 px-4 py-4 shadow-lg">
				<h2 className="text-4xl title-font text-center my-5 font-bold text-purple-900">Login</h2>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input
						type='email'
						placeholder="Email"
						{...register("email")}
						className="w-full mb-3 px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-300 focus:bg-white focus:ring-2 focus:ring-indigo-300"
					/>
					<input
						type='password'
						placeholder="Password"
						{...register("password")}
						className="w-full mb-3 px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-300 focus:bg-white focus:ring-2 focus:ring-indigo-300"
					/>
					<div className="w-full text-center mt-2">
						<button
							type='submit'
							className="md:w-4/12 justify-self-center items-center py-1.5 px-7 border-2 border-purple-700 rounded-md text-xl font-bold text-purple-900 bg-pink-200 hover:bg-purple-700 hover:text-white"
						>Login</button>
					</div>
				</form>
				<div className="flex justify-center my-4">
					<p>Or Login With <button onClick={handleGoogleSignIn} className="border-b border-blue text-purple-700 font-semibold hover:border-purple-700">Google</button></p>
				</div>
				<hr />
				<div className="text-center my-6">
					<p>Don't have account? <Link to="/signup" className="text-purple-900 font-bold">Sign up</Link></p>
				</div>
			</div>
		</div>
	);
};

export default Login;