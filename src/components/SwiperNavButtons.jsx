import React from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useSwiper } from 'swiper/react';

const SwiperNavButtons = () => {
    const swiper = useSwiper()

    return (
        <div className='mt-6 flex gap-3'>
            <button onClick={() => swiper.slidePrev()} className='btn-nav-control'><FaAngleLeft /></button>
            <button onClick={() => swiper.slideNext()} className='btn-nav-control'><FaAngleRight /></button>
        </div>
    );
};

export default SwiperNavButtons;