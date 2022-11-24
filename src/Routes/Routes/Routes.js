import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main"
import Blogs from "../../Pages/Blogs/Blogs"
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard"
import Error from "../../Pages/Error/Error"
import SingleCategory from "../../Pages/Home/Category/SingleCategory"
import Home from "../../Pages/Home/Home/Home"
import Login from "../../Pages/Login/Login"
import Signup from "../../Pages/Signup/Signup"
import PrivateRoute from "./PrivateRoute/PrivateRoute"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/categories/:id',
                element: <SingleCategory></SingleCategory>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
    },
    {
        path: '*',
        element: <Error></Error>
    }
])