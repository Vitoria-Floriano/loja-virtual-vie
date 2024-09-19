import { Button } from "../../../../components/button/button"
import { Clothes } from "../../../../objects/clothes"
import "./card.css"

console.log(Clothes);

// Objetivo: percorrer os objetos e apresentar as propriedades em cada elemento do card
// apresentar só uma parcela de cards
// botão que permite mostrar mais uma parcela dos cards

export const Card = () => {
    return (
        <div className="card">
            <img scr="" alt="" />
            <h3>Nome Produto</h3>
            <p>Preço</p>
            <p>Valor anterior</p>
            <p>Desconto</p>
            <Button>Compre</Button>
        </div>
    )
}