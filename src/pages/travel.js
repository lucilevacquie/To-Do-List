import React from "react";
import styled from "styled-components";

import Title from "../components/list/list_title";
import List from "../components/list/list_container";

import {useListContext} from "../listProvider";

const Container = styled.div``;


const TravelList = () => {

    const {travelList, setTravelList} = useListContext()

    return (
        <Container>
            <Title>Travel List</Title>
            <List list={travelList} updateList={setTravelList}/>
        </Container>
    )
}

export default TravelList;
