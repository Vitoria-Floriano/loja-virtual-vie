import { Card } from "../card/card"
import { Section } from "../section/section"
import { useState } from "react"
import { Button } from "../../../../components/button/button"
import { Clothes } from "../../../../objects/clothes"
import "./main.css"

export const Main = () => {
    const [someCards, setMoreCards] = useState(5)

    const handleShowMore = () => {
        setMoreCards(moreCards => moreCards + 5);
    }

    return (
        <main className="flex">
            <Section />

            <div className="iamflex">
                <Card someCards={someCards} />
            </div>

            {someCards < Clothes.length && (
                <Button onClick={handleShowMore} >Mostrar mais</Button>
            )}
        </main>
    )
}