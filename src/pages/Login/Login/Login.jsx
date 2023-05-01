import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import fb from '../../../assets/logos/fb.png'
import google from '../../../assets/logos/google.png'
import { AuthContext } from '../../../providers/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
    const {signIn} = useContext(AuthContext)
    const [error, setError] = useState('')

    const handleLogin = (event) => {
        event.preventDefault()
        setError('')

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)

        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            form.reset()
            toast.success('Login successful!',{position: toast.POSITION.TOP_CENTER})
        })
        .catch(err => {
            console.log(err)
            toast.error(error, {position: toast.POSITION.TOP_CENTER})
        })
    }

    return (
        <div className='w-1/2 py-12 mx-auto'>
            <div className='w-4/5 mx-auto border-2 border-gray-300 py-6 px-8 rounded-lg'>
                <h2 className='font-bold text-2xl mb-8'>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="email" name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="password" name="password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    </div>
                    <div className="flex justify-between items-start mb-6">
                        <div className="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                            <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>

                        <span className='ml-2 text-sm font-medium text-[#F9A51A] hover:underline hover:cursor-pointer'>Forgot password?</span>
                    </div>
                    <button type="submit" className="btn-main w-full">Login</button>
                    <p className='text-base text-center mt-4'>Don&rsquo;t have an account?<Link to='/user/signup' className='ml-2 font-medium text-[#F9A51A] hover:underline'>Create an Account</Link></p>
                </form>
            </div>
            <div className='w-3/5 mx-auto'>
                <div className='flex justify-center items-center gap-5 my-4'>
                    <span className='h-[2px] w-[200px] bg-gray-300'></span>
                    <span>OR</span>
                    <span className='h-[2px] w-[200px] bg-gray-300'></span>
                </div>
                <div>
                    <button className='btn-continue mb-3'>
                        <img className='w-[32px]' src={fb} alt="" />
                        <span className='mx-auto'>Continue with Facebook</span>
                    </button>
                    <button className='btn-continue'>
                        <img className='w-[32px]' src={google} alt="" />
                        <span className='mx-auto'>Continue with Facebook</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;