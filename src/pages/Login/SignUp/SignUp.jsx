import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import fb from '../../../assets/logos/fb.png'
import google from '../../../assets/logos/google.png'
import { AuthContext } from '../../../providers/AuthProvider';
import { toast } from 'react-toastify';

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {createUser, googleSignIn} = useContext(AuthContext)

    const handleSignUp = (event) => {
        event.preventDefault()

        const form = event.target;
        const firstName = form.first_name.value;
        const lastName = form.last_name.value;
        const confirmPassword = form.confirm_password.value;

        // console.log(firstName, lastName, confirmPassword, email, password)

        createUser(email, password)
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser)
            form.reset()
            toast.success("Successfully created account!", {position: toast.POSITION.TOP_CENTER})
        })
        .catch(err => {
            console.log(err)
            toast.error(err.message, {position: toast.POSITION.TOP_CENTER})
        })
    }

    // handle email
    const handleEmail = (e) => {
        const emailInput = e.target.value;
        setEmail(emailInput)
    }
    // handle password
    const handlePassword = (e) => {
        const passwordInput = e.target.value;
        setPassword(passwordInput)
    }

    const handleGoogleLogin = () => {
        googleSignIn()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            toast.success("Successfully login with Google!", {position: toast.POSITION.TOP_CENTER})
        })
        .catch(err => {
            console.log(err)
            toast.error(err.message, {position: toast.POSITION.TOP_CENTER})
        })
    }

    return (
        <div className='w-1/2 py-10 mx-auto'>
            <div className='w-4/5 mx-auto border-2 border-gray-300 py-6 px-8 rounded-lg'>
                <h2 className='font-bold text-2xl mb-8'>Create an Account</h2>
                <form onSubmit={handleSignUp}>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="first_name" id="floating_fname" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First Name</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="last_name" id="floating_lname" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last Name</label>
                    </div>

                    <div className="relative z-0 w-full mb-6 group">
                        <input onChange={handleEmail} type="email" name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input onChange={handlePassword} type="password" name="password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="password" name="confirm_password" id="floating_cpassword" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm Password</label>
                    </div>
                    <button type="submit" className="btn-main w-full">Create an Account</button>
                    <p className='text-base text-center mt-4'>Already have an account?<Link to='/user/login' className='ml-2 font-medium text-[#F9A51A] hover:underline'>Login</Link></p>
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
                    <button onClick={handleGoogleLogin} className='btn-continue'>
                        <img className='w-[32px]' src={google} alt="" />
                        <span className='mx-auto'>Continue with Google</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;