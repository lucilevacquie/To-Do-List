import React from "react";
import styled from "styled-components";

import Title from "../components/list/list_title";
import List from "../components/list/list_container";


const Container = styled.div``;


const ShoppingList = () => {
    return (
        <Container>
            <Title>Shopping List</Title>
            <List/>
        </Container>
    )
}

export default ShoppingList;
