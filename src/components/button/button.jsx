import "./button.css"
import { Link } from "react-router-dom"

export const Button = ({children}) => {
    return (
        <button className="button">{children}</button>
    )
}