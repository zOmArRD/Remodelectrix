import {createBrowserRouter, Navigate} from "react-router-dom";
import Home from "./pages/Home.tsx";
import NotFound from "./pages/NotFound.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/index",
        element: <Navigate to={"/"}/>
    },
    {
        path: "*",
        element: <NotFound/>
    }
]);

export default router;
