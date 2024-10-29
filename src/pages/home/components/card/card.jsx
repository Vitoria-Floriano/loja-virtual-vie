import { Link } from "react-router-dom"
import { Button } from "../../../../components/button/button"
import { Clothes } from "../../../../objects/clothes"
import { useState } from "react"
import styled from "styled-components"
import "./card.css"

const Title = styled.h3`
    font-family: 'Gowun Batang', sans-serif;
`
export const Card = () => {
    const [someCards, setMoreCards] = useState(4)

    const handleShowMore = () => {
        setMoreCards(moreCards => moreCards + 4);
    }

    
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
            {someCards < Clothes.length && (
                <Button onClick={handleShowMore} >Mostrar mais</Button>
            )}
        </>
    )
}