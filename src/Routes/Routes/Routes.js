import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Catagory from "../../layouts/Pages/Ctagory/Catagory/Catagory";
import Home from "../../layouts/Pages/Home/Home/Home";
import News from "../../layouts/Pages/News/News/News";

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
                path: '/catagory/:id',
                element: <Catagory></Catagory>
            },
            {
                path: '/news/:id',
                element: <News></News>
            }
        ]
    }
]);