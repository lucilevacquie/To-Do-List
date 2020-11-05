import React from "react";
import styled from "styled-components";

import Title from "../components/list/list_title";
import List from "../components/list/list_container";


const Container = styled.div``;


const TravelList = () => {
    return (
        <Container>
            <Title>Travel List</Title>
            <List/>
        </Container>
    )
}

export default TravelList;
