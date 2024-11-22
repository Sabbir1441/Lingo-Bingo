import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../pages/MainLayout";
import StartLearning from "../pages/StartLearning";
import Tutorials from "../pages/Tutorials";
import About from "../pages/About";
import Profile from "../pages/Profile";
import Lessons from "../pages/Lessons";
import AuthLayout from "../pages/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgetPass from "../pages/ForgetPass";
import UpdateProfile from "../pages/UpdateProfile";
import PrivateRoutes from "./PrivateRoutes";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [

            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/start-learning",
                element: <StartLearning></StartLearning>,
                loader: ()=> fetch("../lesson.json")
            },
            {
                path: "/tutorials",
                element: <PrivateRoutes>
                    <Tutorials></Tutorials>
                </PrivateRoutes>,
            },
            {
                path: "/about",
                element: <About></About>,
            },
            {
                path: "/profile",
                element: <PrivateRoutes>
                    <Profile></Profile>
                </PrivateRoutes>,
            },
            {
                path: "/update-profile",
                element: <PrivateRoutes>
                    <UpdateProfile></UpdateProfile>
                </PrivateRoutes>,
            },
            {
                path: "/lessons/:lesson_no",
                element: <PrivateRoutes>
                    <Lessons></Lessons>
                </PrivateRoutes>,
                loader: ()=> fetch("../vocabularies.json")
            },

        ]
    },

    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>
            },
            {
                path: "/auth/register",
                element: <Register></Register>
            },
            {
                path: "/auth/forgetpass",
                element: <ForgetPass></ForgetPass>
            }
        ]
    },
    {
        path: "*",
        element: <NotFound></NotFound>,
    },
])
export default router;