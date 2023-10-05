import {createBrowserRouter, Navigate} from "react-router-dom";
import Home from "./pages/Home.tsx";
import NotFound from "./pages/NotFound.tsx";
import ExternalRedirect from "./components/redirect/ExternalRedirect.tsx";
import Showcase from "./pages/Showcase.tsx";

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
        path: "/home",
        element: <Navigate to={"/"}/>
    },
    {
        path: "/contact",
        // element: <Contact/>
        element: <Navigate to={"/whatsapp"}/>
    },
    {
        path: "/showcase",
        element: <Showcase/>
    },
    {
        path: "/whatsapp",
        element: <ExternalRedirect
            to={"https://api.whatsapp.com/send?phone=+14703348648&text=Hi,%20I%20am%20interested%20in%20the%20services%20provided%20by%20Remodelectrix%20LLC."}/>
    },
    {
        path: "/facebook",
        element: <ExternalRedirect to={"https://www.facebook.com/people/RemodelectrixLLC/61550953793177/"}/>
    },
    {
        path: "*",
        element: <NotFound/>
    }
]);

export default router;
