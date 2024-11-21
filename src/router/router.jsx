import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../pages/MainLayout";
import StartLearning from "../pages/StartLearning";
import Tutorials from "../pages/Tutorials";
import About from "../pages/About";
import Profile from "../pages/Profile";
import Lessons from "../pages/Lessons";

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
                element: <Tutorials></Tutorials>,
            },
            {
                path: "/about",
                element: <About></About>,
            },
            {
                path: "/profile",
                element: <Profile></Profile>,
            },
            {
                path: "/lessons/:lesson_no",
                element: <Lessons></Lessons>,
                loader: ()=> fetch("../vocabularies.json")
            },

        ]
    },

    {
        path: "/auth",
        element: <h1>login</h1>,
    },
    {
        path: "*",
        element: <h1>error</h1>,
    },
])
export default router;