import React, {Fragment, useState} from "react";
import styled from "styled-components";

import programation from '../data/programation';


const Container = styled.section `
    font-family: 'Led Bus';
    color: #363530;
    margin-top: 4rem;
    padding: 180px;

    @media (max-width: 480px) {
        padding: 0;
    }
    
`

const Title = styled.h2 `
    font-family: 'Led Bus';
    font-size: 5rem;
    font-weight: 400;
    text-shadow: 2px 2px 2px #f2e983;
    margin-bottom: 2rem;
    text-align: center;

    @media (max-width: 768px) {
        font-size:2.5rem;
    }
`;

const ContentBox = styled.div `
   
`;

const Content = styled.div `
    width: 85%;
    height: 50px;
    display: flex;
    align-items: center;
    margin: 0 auto;
    border: solid black 1px;
    border-radius: 4px;
    margin-bottom: 1rem;
  
`;

const HidenContent = styled.div `
    width: 85%;
    height: fit-content;
    display: ${props => props.clicked? 'block' : 'none'};
    align-items: center;
    margin: 0 auto;
  
    border-radius: 4px;
    margin-bottom: 1rem;
    font-family: 'Public Sans', sans-serif;
`

const DateBox = styled.div `
    width: 65px;
    padding: 5px;
    border-right: solid black 1px;
`;

const Date = styled.h3 `

`;

const Day = styled.p `
    color: black;

    @media (max-width: 480px) {
        font-size: .875rem;
    }
`;

const EventTitleBox = styled.div `
    background: #141414;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 1.1vw;

    :hover h2{
        color: #e6edf7;
    }

    @media (max-width: 480px) {
        font-size: 2.2vw;
    }
`

const EventTitle = styled.h2 `
    font-family: 'Led Bus';
    margin-left: 2rem;
    color: ${props => props.clicked? '#e6edf7' : '#615f54'};
`;

const Particpants = styled.p `
    text-align: center;
    margin: 1rem 0;
    color: ${props => props.clicked? '#e6edf7' : '#615f54'};
    font-family: 'Public Sans', sans-serif;
    font-size: .875rem;
`;

const Resume = styled.div `
    display: flex;
`

const ResumeTitle = styled.h3 `
    margin-right: 1rem;
`;

const TextContent = styled.p `
    line-height: 1.7rem;
`;

const BioBox = styled.div `
    display: flex;
    margin-top: 2rem;
`;

const BioBoxContender = styled.div `

`

const BioTitle = styled.h3 `
    margin-right: 1rem;
`;

const Bio = styled.p `
    line-height: 1.7rem;
`;

const Bio2 = styled.p `
    margin-top: 1rem;
    line-height: 1.7rem;
`;

const Programation = () => {

    const [isClicked, setClicked] = useState();

    const handleClick = (item) => {
        if(item.texts.content !==  '' || item.members !== '') {
            setClicked(item.id)
        }

        if(isClicked === item.id) {
            setClicked(999)
        }
    }

    return(
        <Container name='programation' >
            <Title>Programação</Title>
            <ContentBox>
                {programation.map(item => (
                    <Fragment>
                        <Content>
                            <DateBox>
                                <Date>{item.date}</Date>
                                <Day>{item.day}</Day>
                            </DateBox>
                            <EventTitleBox onClick={() => handleClick(item)} >
                                <EventTitle clicked={isClicked === item.id} >{item.title}</EventTitle>
                            </EventTitleBox>
                        </Content>
                        <HidenContent clicked={isClicked === item.id} >
                            <Particpants>{item.members}</Particpants>
                            {item.texts.content !== '' && (
                                <Fragment>
                                    <Resume>
                                        <ResumeTitle>Resumo:</ResumeTitle>
                                        <TextContent>{item.texts.content}</TextContent>
                                    </Resume>
                                    <BioBox>
                                        <BioTitle>Biografia:</BioTitle>
                                        <BioBoxContender>
                                            <Bio>{item.id === 5 && (<b> Carolina Spork: </b>)}{item.texts.authorBio}</Bio>
                                            {item.texts.authorBio2 && (
                                                <Bio2>{item.id === 5 && (<b> Marina S. Alves: </b>)}{item.texts.authorBio2}</Bio2>
                                            )}
                                        </BioBoxContender>
                                    </BioBox>
                                </Fragment>
                            )}
                            
                        </HidenContent>
                    </Fragment>
                ))}
            </ContentBox>
        </Container>
    )
}

export default Programation
