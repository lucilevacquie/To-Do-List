import React from "react";
import styled from "styled-components";

import Box from "./box";

const Container = styled.div`    
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    justify-content: center;
    margin: 1.5rem 1rem;
    font-family: "Roboto", sans-serif;
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