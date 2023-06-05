import React from "react";
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Outlet,
    Link,
} from "react-router-dom";
import Home from "./pages/Home"
import Cart from "./pages/cart"
import Navbar from "./components/Navbar"
import "./index.css"
import Footer from "./components/footer"
import ContextProp from "./context/context";
import Success from "./success";
import Fail from "./fail";


const App = () => {
    return (
        <React.Fragment>
            <ContextProp >
                <Navbar />
                <Outlet />
                <Footer />
            </ContextProp>

        </React.Fragment>
    )
}

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "cart",
                element: <Cart />
            },
            {
                path: "/success",
                element: <Success />
            },
            {
                path: "/fail",
                element: <Fail />
            },
        ]
    }

]);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);