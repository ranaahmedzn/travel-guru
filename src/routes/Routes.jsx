import { createBrowserRouter } from "react-router-dom";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login/Login";
import SignUp from "../pages/Login/SignUp/SignUp";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Booking from "../pages/Home/Booking/Booking";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('http://localhost:5000/places')
            },
            {
                path: '/booking/:id',
                element: <Booking />,
                loader: ({params}) => fetch(`http://localhost:5000/places/${params.id}`)
            }
        ]
    },
    {
        path: '/user',
        element: <LoginLayout />,
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'signup',
                element: <SignUp />
            }
        ]
    }
])

export default router;