import React from "react"
import styled from "styled-components";

import { useListContext } from "../listProvider";
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

const Title = styled.div`
    font-size: 20px;
    padding-bottom: 0.5rem;
`;

const NbTasks = styled.div`
    font-size: 16px;
`;

const NbCheck = styled.div`
    font-size: 16px;
`;

const Dashboard = () => {

    const {routes} = useListContext()

    return (
        <Container>
            {routes.map(item => (
                <>
                {item.noOfItems > 0 &&
                    <Box key={item.id} href={item.link}>
                        <Title>{item.id}</Title>
                        <NbTasks>Tasks: {item.noOfItems}</NbTasks>
                        <NbCheck>Done: {item.noOfDone}</NbCheck>
                    </Box>
                }
                </>
            ))}
            <Box href="/newlist">
                <Title>Add a new list</Title>
            </Box>
        </Container>
    )
}

export default Dashboard;