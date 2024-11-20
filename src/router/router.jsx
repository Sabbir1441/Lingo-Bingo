import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../pages/MainLayout";

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
                element: <h1>this is learning</h1>,
            },
            {
                path: "/tutorials",
                element: <h1>this is tutorials </h1>,
            },
            {
                path: "/about",
                element: <h1>this is about</h1>,
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