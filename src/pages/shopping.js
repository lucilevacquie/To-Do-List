import React from "react";
import styled from "styled-components";

import Title from "../components/list/list_title";
import List from "../components/list/list_container";

import {useListContext} from "../listProvider";


const Container = styled.div``;


const ShoppingList = () => {

    const {shoppingList, setShoppingList} = useListContext()

    return (
        <Container>
            <Title>Shopping List</Title>
            <List showCounter list={shoppingList} updateList={setShoppingList}/>
        </Container>
    )
}

export default ShoppingList;
