import "./header.css"
import { Link } from "react-router-dom"
import Logotipo from "../../images/logotipo-removebg-preview.png"

export const Menu = () => {
    return (
        <header className="menu">
            <div>
                <Link to="/"><img src={Logotipo} className="logo" alt="logo da loja" /></Link>
            </div>
            <div>
                <Link className="button" to="/about">Sobre</Link>
                <Link className="button" to="/contact">Contato</Link>
            </div>
        </header>
    )
}