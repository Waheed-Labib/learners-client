import { createBrowserRouter } from "react-router-dom";
import Courses from "../Pages/Courses/Courses";
import FAQ from "../Pages/FAQ/FAQ";
import Home from "../Pages/Home/Home";
import Main from "../layout/Main";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import UserInfo from "../Pages/UserInfo/UserInfo";
import PrivateRoute from "./PrivateRoute";
import VerifyReq from "../Pages/VerifyReq/VerifyReq";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import Instructor from "../Pages/Instructor/Instructor";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import ErrorBoundary from "../Pages/ErrorBoundary/ErrorBoundary";
import GetPremium from "../Pages/GetPremium/GetPremium";
import Blogs from "../Pages/Blogs/Blogs";
import BlogPost from "../Pages/BlogPost/BlogPost";
import Author from "../Pages/Author/Author";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                errorElement: <ErrorBoundary></ErrorBoundary>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://learners-server-side.vercel.app/courses'),
                errorElement: <ErrorBoundary></ErrorBoundary>

            },
            {
                path: '/faq',
                element: <FAQ></FAQ>,
                errorElement: <ErrorBoundary></ErrorBoundary>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>,
                loader: () => fetch('https://learners-server-side.vercel.app/blogs'),
                errorElement: <ErrorBoundary></ErrorBoundary>
            },
            {
                path: '/blog-post/:id',
                element: <BlogPost></BlogPost>,
                loader: ({ params }) => fetch(`https://learners-server-side.vercel.app/blogs/${params.id}`),
                errorElement: <ErrorBoundary></ErrorBoundary>
            },
            {
                path: '/user-info/:id',
                element: <PrivateRoute><UserInfo></UserInfo></PrivateRoute>,
                errorElement: <ErrorBoundary></ErrorBoundary>
            },
            {
                path: '/login',
                element: <Login></Login>,
                errorElement: <ErrorBoundary></ErrorBoundary>
            },
            {
                path: '/register',
                element: <Register></Register>,
                errorElement: <ErrorBoundary></ErrorBoundary>
            },
            {
                path: '/verify-request',
                element: <VerifyReq></VerifyReq>,
                errorElement: <ErrorBoundary></ErrorBoundary>
            },
            {
                path: '/course-details/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`https://learners-server-side.vercel.app/courses/${params.id}`),
                errorElement: <ErrorBoundary></ErrorBoundary>
            },
            {
                path: '/get-premium/:id',
                element: <PrivateRoute><GetPremium></GetPremium></PrivateRoute>,
                loader: ({ params }) => fetch(`https://learners-server-side.vercel.app/courses/${params.id}`),
                errorElement: <ErrorBoundary></ErrorBoundary>
            },
            {
                path: '/instructor/:id',
                element: <Instructor></Instructor>,
                loader: ({ params }) => fetch(`https://learners-server-side.vercel.app/instructors/${params.id}`),
                errorElement: <ErrorBoundary></ErrorBoundary>
            },
            {
                path: '/authors/:id',
                element: <Author></Author>,
                loader: ({ params }) => fetch(`https://learners-server-side.vercel.app/authors/${params.id}`),
                errorElement: <ErrorBoundary></ErrorBoundary>
            },
            {
                path: '*',
                element: <PageNotFound></PageNotFound>
            }
        ]
    }
])