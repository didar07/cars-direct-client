import { createBrowserRouter } from "react-router-dom"
import DashBoardLayout from "../../Layout/DashBoardLayout"
import Main from "../../Layout/Main"
import Blogs from "../../Pages/Blogs/Blogs"
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct"
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers"
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers"
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard"
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders"
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts"
import Payment from "../../Pages/Dashboard/Payment/Payment"
import Error from "../../Pages/Error/Error"
import SingleCategory from "../../Pages/Home/Category/SingleCategory"
import Home from "../../Pages/Home/Home/Home"
import Login from "../../Pages/Login/Login"
import Signup from "../../Pages/Signup/Signup"
import AdminRoute from "../AdminRoute/AdminRoute"
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
                path: '/categories/:id',
                element: <PrivateRoute><SingleCategory></SingleCategory></PrivateRoute>,
                loader: ({ params }) => fetch(`https://cars-direct-server.vercel.app/categories/${params.id}`)
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

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/myproducts',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/allsellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://cars-direct-server.vercel.app/bookings/${params.id}`)
            }
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
])