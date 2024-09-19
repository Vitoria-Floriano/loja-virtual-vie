import "./header.css"
import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"

export const Menu = () => {
    return (
        <>
            <header className="menu">
                <div>
                    <Link to="/"><img src="src/images/logotipo-removebg-preview.png" className="logo" alt="logo da loja" /></Link>
                </div>
                <div>
                    <Link className="button" to="/about">Sobre</Link>
                    <Link className="button" to="/contact">Contato</Link>
                </div>
            </header>
            <Outlet />
        </>
    )
}