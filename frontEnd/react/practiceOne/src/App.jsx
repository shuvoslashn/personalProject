import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";

// Creating router
const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
    },
]);

const App = () => {
    return (
        <>
            <RouterProvider router={router} />;
        </>
    );
};

export default App;
