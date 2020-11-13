import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 2rem;
`;

const Box = styled.a`
    margin: 1rem;
    text-decoration: none;
    color: black;
    box-sizing: border-box;
    border: 2px solid;
    border-radius: 15px;
    padding: 1rem;
    background-color: ${(props) => props.color};
    font-size: 20px;
`;

const ChoiceBoard = ({ data }) => {
    
    return(
        <Container>
            {data.map(item => (
                <Box color={item.color} key={item.id} href={item.link}>{item.id}</Box>
            ))}
        </Container>
    )
}

export default ChoiceBoard;