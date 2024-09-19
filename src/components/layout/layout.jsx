import { Outlet } from "react-router-dom";
import { Menu } from "../header/header";
import { Footer } from "../footer/footer";

export const Layout = () => {
    return (
        <>
            <Menu />
            <Outlet/>
            <Footer/>
        </>
    )
}