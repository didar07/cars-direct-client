import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main"
import Blogs from "../../Pages/Blogs/Blogs"
import Error from "../../Pages/Error/Error"
import SingleCategory from "../../Pages/Home/Category/SingleCategory"
import Home from "../../Pages/Home/Home/Home"
import Login from "../../Pages/Login/Login"

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
        path: '*',
        element: <Error></Error>
    }
])