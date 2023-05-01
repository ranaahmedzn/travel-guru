import React from 'react';
import './MainLayout.css'
import Header from '../../pages/Share/Header/Header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='main-container'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;