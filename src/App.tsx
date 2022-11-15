import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Template from "./components/Template";
import Home from "./page";
import CreateNote from "./page/createNote";
import Login from "./page/login";
import Register from "./page/register";
import { api } from "./service/api";
import refreshToken from "./service/refreshToken";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Template />,
        children: [
            {
                path: "/home",
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/note",
                element: <CreateNote />
            }
        ],
    },
]);
function App() {
    useEffect(() => {
        if (!localStorage.getItem("refresh_token")) {
            refreshToken(null).then((res: any) => {
                api.defaults.headers.common["authorization"] = res.data.token;
            });
        }
    }, []);

    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
