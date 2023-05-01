import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Booking = () => {
    const place = useLoaderData()
    console.log(place)

    return (
        <div className='max-w-screen-xl px-12 mx-auto flex mt-20 gap-20'>
            <div className='w-3/6'>
                <h2 className='font-bold text-7xl text-white'>{place?.name}</h2>
                <p className='text-white my-5'>{place?.description}</p>
            </div>
            <div className='w-3/6 bg-white p-6 rounded-lg'>
                <form>
                    <div className='mb-4'>
                        <label htmlFor="origin" className="block mb-2 text-base font-medium text-gray-400 dark:text-white">Origin</label>
                        <input type="text" name="origin" id="origin" className="bg-gray-50 border border-gray-300 text-gray-900 text-base font-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter origin" required />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="destination" className="block mb-2 text-base font-medium text-gray-400 dark:text-white">Destination</label>
                        <input type="text" name="destination" id="destination" className="bg-gray-50 border border-gray-300 text-gray-900 font-bold text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter destination" required />
                    </div>
                    <button className='btn-main w-full'>Start Booking</button>
                </form>
            </div>
        </div>
    );
};

export default Booking;