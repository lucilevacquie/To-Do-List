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
    grid-row-gap: 1rem;
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

    const max = colors.length;
    let existingNumbers = [];
    const randomColor = () => {
        if (existingNumbers.length === colors.length){
            existingNumbers = [];
        }
        const index = Math.floor(Math.random() * max)
        if(existingNumbers.includes(index)){
            return randomColor()
        }
        existingNumbers.push(index);
        return colors[index];
    };

    // for each iteration 
    // pick a random color
    // save the index of the picked color
    // ensure the next randomColor is not one of the saved indexes
    
    return(
        <Container>
            {data.map(item => (
                <Box color={randomColor()} key={item.id} href={item.link}>{item.id}</Box>
            ))}
        </Container>
    )
}

export default ChoiceBoard;