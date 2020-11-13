import React from "react"
import styled from "styled-components";

import { useListContext } from "../listProvider";

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 50%);
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
    background-color: ${(props) => props.color}
`;

const Title = styled.div`
    font-size: 20px;
    padding-bottom: 0.5rem;
`;

const NbTasks = styled.div``;

const Dashboard = () => {

    const {routes} = useListContext()

    return (
        <Container>
            {routes.map(item => (
                <>
                {item.noOfItems > 0 &&
                    <Box key={item.id} href={item.link} color={item.color}>
                        <Title>{item.id}</Title>
                        <NbTasks>Tasks: {item.noOfItems}</NbTasks>
                    </Box>
                }
                </>
            ))}
        </Container>
    )
}

export default Dashboard;