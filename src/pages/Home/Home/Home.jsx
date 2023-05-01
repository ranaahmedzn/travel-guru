import React, { useState } from 'react';
import './Home.css'
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

import { A11y, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperNavButtons from '../../../components/SwiperNavButtons';


const Home = () => {
    const places = useLoaderData()
    const [currentPlace, setCurrentPlace] = useState(places[0])
    // console.log(places)

    return (
        <div className='max-w-screen-xl px-12 mx-auto flex mt-20 gap-5'>
            <div className='w-2/5'>
                <h2 className='font-bold text-7xl text-white'>{currentPlace?.name}</h2>
                <p className='text-white my-5'>{currentPlace?.description.slice(0, 200)}...</p>
                <Link to={`/booking/${currentPlace.id}`}>
                    <button className='btn-main flex gap-2 items-center'>
                        <span>Booking</span> <FaArrowRight /> 
                    </button>
                </Link>
            </div>
            <div className='w-3/5'>
                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={20}
                    slidesPerView="auto"
                >
                    {
                        places.map(place => <SwiperSlide
                            key={place.id}
                            className='res-slide'
                            style={{backgroundImage: `url(${place.image})`}}
                            onClick={() => setCurrentPlace(place)}
                            >
                            <h3 className='place-name font-bold text-white text-2xl'>{place.name}</h3>
                        </SwiperSlide>)
                    }
                    <SwiperNavButtons />
                </Swiper>
            </div>
        </div>
    );
};

export default Home;