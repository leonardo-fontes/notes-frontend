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
            if (!pathname.includes("/register")) {
                navigate("/login");
            }
        } else {
            if (!pathname.includes("/note")) {
                navigate("/home");
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
