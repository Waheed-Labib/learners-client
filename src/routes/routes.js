import { createBrowserRouter } from "react-router-dom";
import Blog from "../Pages/Blog/Blog";
import Courses from "../Pages/Courses/Courses";
import FAQ from "../Pages/FAQ/FAQ";
import Home from "../Pages/Home/Home";
import Main from "../layout/Main";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import UserInfo from "../Pages/UserInfo/UserInfo";
import PrivateRoute from "./PrivateRoute";
import VerifyReq from "../Pages/VerifyReq/VerifyReq";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://learners-server-side.vercel.app/courses')

            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/user-info/:id',
                element: <PrivateRoute><UserInfo></UserInfo></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/verify-request',
                element: <VerifyReq></VerifyReq>
            }
        ]
    }
])