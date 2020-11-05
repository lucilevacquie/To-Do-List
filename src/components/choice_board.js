import React from "react";
import styled from "styled-components";

const colors = [
    "#AB7657",
    "#C93738",
    "#C2D5DB",
    "#DCBCA5",
]

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 150px);
    grid-template-rows: repeat(2, 80px);
    justify-content: center;
    padding-top: 1.5rem;
`;

const Box = styled.a`
    margin: auto;
    background-color: ${(props) => props.color};
    text-align: center;
    padding: 1.5rem 1rem;
    cursor: pointer;
    text-decoration: none;
    color: black;
`;

const ChoiceBoard = ({ data }) => {

    // const min = 0;
    const max = colors.length;
    const randomColor = () => Math.floor(Math.random() * max);

    return(
        <Container>
            {data.map(item => (
                <Box color={colors[randomColor()]} key={item.id} href={item.link}>{item.id}</Box>
            ))}
        </Container>
    )
}

export default ChoiceBoard;