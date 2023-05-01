import { createBrowserRouter } from "react-router-dom";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login/Login";
import SignUp from "../pages/Login/SignUp/SignUp";
import MainLayout from "../layouts/MainLayout/MainLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
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