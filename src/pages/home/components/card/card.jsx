import { Link } from "react-router-dom"
import { Clothes } from "../../../../objects/clothes"
import styled from "styled-components"
import "./card.css"

const Title = styled.h3`
    font-family: 'Gowun Batang', sans-serif;
`
export const Card = ({ someCards }) => {
    return (
        <>
            {
                Clothes.slice(0, someCards).map((cloth, index) => (
                    <div key={index} className="card" >
                        <img src={cloth.img} alt={cloth.nome} />
                        <Title>{cloth.nome}</Title>
                        <p>{cloth.preco}</p>
                        <p>{cloth.desconto}</p>
                        <Link to={cloth.link} className="btn">Comprar</Link>
                    </div>
                ))
            }
        </>
    )
}