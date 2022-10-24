import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Catagory from "../../layouts/Pages/Ctagory/Catagory/Catagory";
import Home from "../../layouts/Pages/Home/Home/Home";
import Login from "../../layouts/Pages/Login/Login/Login";
import Register from "../../layouts/Pages/Login/Register/Register";
import News from "../../layouts/Pages/News/News/News";
import TermsAndCondition from "../../layouts/Pages/Othrs/TermsAndContidion/TermsAndCondition";
import PrivateRouter from "../PrivateRouter/PrivateRouter";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/news')
            },
            {
                path: '/catagory/:id',
                element: <Catagory></Catagory>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/news/:id',
                element: <PrivateRouter><News></News></PrivateRouter>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'terms',
                element: <TermsAndCondition></TermsAndCondition>
            },
        ]
    }
]);