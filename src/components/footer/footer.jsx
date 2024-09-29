import { Link } from "react-router-dom"
import "./footer.css"

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="info">
                <p>Feito com 🤍 por Vie Floriano.</p>
            </div>

            <nav className="social">
                <ul className="icons">
                    <li>
                        <Link to="mailto:lojavirtualvie@gmail.com" target="_blank">
                            <i className="far fa-envelope"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="https://www.instagram.com/lojavirtual_vie/" target="_blank">
                            <i className="fab fa-instagram"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="https://chat.whatsapp.com/DoBXC84X8t0LusPOIje3wp" target="_blank">
                            <i className="fab fa-whatsapp"></i>
                        </Link>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}
