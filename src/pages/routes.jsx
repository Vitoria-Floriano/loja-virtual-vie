import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Contact } from "./contact";
import { Home } from "./home";
import { About } from "./about";
import { Layout } from "../components/layout/layout";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Layout/>} >
                    <Route path="/" index element={<Home/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/contact" element={<Contact/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}