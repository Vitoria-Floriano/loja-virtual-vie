import styled from "styled-components"

const Title = styled.h1`
    font-family: 'Gowun Batang', sans-serif;
    text-align: center;
    color: #f91f5bff;
    margin: 40px 60px;
    font-size: 25px;
`

export const MyTitle = () => {
    return <Title>Bem vindo(a) à loja virtual da Vie!</Title>
}