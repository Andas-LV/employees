import {createBrowserRouter} from "react-router-dom";

import App from '../App.jsx'
import Employees from "../pages/Employees.jsx";
import Works from "../pages/Works.jsx";
import Calendar from "../pages/Calendar.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/Employees",
        element: <Employees />,
    },
    {
        path: "/Works",
        element: <Works />,
    },
    {
        path: "/Calendar",
        element: <Calendar />,
    },
]);

export default router