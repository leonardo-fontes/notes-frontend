import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { NotesProvider } from "../context/notes";
import { UserProvider } from "../context/user";
import Navbar from "./Navbar";

const Template: React.FC = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("refresh_token")) {
            if (!window.location.pathname.includes("/register")) {
                return navigate("/login");
            }
        } else {
            if (!window.location.pathname.includes("/note")) {
                return navigate("/home");
            }
        }
    }, [pathname]);
    return (
        <>
            <UserProvider>
                <NotesProvider>
                    <ToastContainer />
                    <Navbar />
                    <Outlet />
                </NotesProvider>
            </UserProvider>
        </>
    );
};

export default Template;
