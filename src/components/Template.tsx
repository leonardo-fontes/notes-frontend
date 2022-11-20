import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { NotesProvider } from "../context/notes";
import { UserProvider } from "../context/user";
import Navbar from "./Navbar";

const Template: React.FC = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("refresh_token")) {
            if (!window.location.pathname.includes('/register')) {
                navigate("/login");
            }
        } else {
            navigate("/home");
        }
    }, [pathname]);
    return (
        <>
            <UserProvider>
                <NotesProvider>
                    <Navbar />
                    <Outlet />
                </NotesProvider>
            </UserProvider>
        </>
    );
};

export default Template;
