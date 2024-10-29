import "./header.css"
import { Link } from "react-router-dom"
import { useState } from "react"
import Logotipo from "../../images/logotipo-removebg-preview.png"

export const Menu = () => {
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);

    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header className="menu">
            <div>
                <Link to="/"><img src={Logotipo} className="logo" alt="logo da loja" /></Link>
            </div>

            <div className="menu-hamb" onClick={toggleMenu}>
                {isMenuOpen ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i> }
            </div>

            <nav className={`links ${isMenuOpen ? 'open' : ''}`}>
                <Link className="button" to="/about">Sobre</Link>
                <Link className="button" to="/contact">Contato</Link>
            </nav>
        </header>
    )
}