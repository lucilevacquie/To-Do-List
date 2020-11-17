import React from "react";
import styled from "styled-components";

import Title from "../components/list/list_title";
import List from "../components/list/list_container";

import {useListContext} from "../listProvider";


const Container = styled.div``;


const RacletteList = () => {

    const {racletteList, setRacletteList} = useListContext()

    return (
        <Container>
            <Title>Raclette shopping list</Title>
            <List list={racletteList} updateList={setRacletteList}/>
        </Container>
    )
}

export default RacletteList;
