import React from "react";
import styled from "styled-components";
import artists from "../data/artists";

const Container = styled.div `
    font-family: 'Public Sans', sans-serif;
    color:#363530;
    width: 100%;
    /* height: calc(100vh - 180px); */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 180px;
`;
const Title = styled.h2 `
    font-family: 'Led Bus';
    font-size: 5rem;
    font-weight: 400;
    text-shadow: 2px 2px 2px #f2e983;
    margin-bottom: 2rem;
`;

const CardBox = styled.div `
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

const BackCard = styled.div `
    position: relative;
    width: 250px;
    height: 300px;
    background: #f2e983;
    border-radius: 2px;
    margin: 0 2rem 2rem 1rem;
    cursor: pointer;
    transition: .7s;
    
    :hover div{
        right: 0;
        top: 0;
        transition: .7s;
        background-color: #f2e983;
    }

    `;

const Card = styled.div `
    position: absolute;
    right: 30px;
    top: 15px;
    width: 250px;
    height: 300px;
    padding: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    border: black 1px solid;
    /* background: #1c1b1b; */
    border-radius: 2px;
    font-family: 'Led Bus';
    transition: .7s;

    :hover{
        right: 0;
        top: 0;
        transition: .7s;
        background-color: #f2e983;
    }
`

const CardTitle = styled.h2 ``;

const CardAvatar = styled.img `
    width: 140px;
    border-radius: 4px;
    margin-top: 1rem;
`

const Artists = () => {

    return (
        <Container id='artists' >
            <Title>Artistas</Title>
            <CardBox>
               {artists.map(item => (
                    <BackCard key={item.id} >
                        <Card>
                        <CardTitle>{item.nome}</CardTitle>
                        <CardAvatar src={item.avatar} />
                        </Card>
                    </BackCard>
               ))}
            </CardBox>
        </Container>
    )
}

export default Artists;