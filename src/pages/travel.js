import React from "react";
import styled from "styled-components";

import Title from "../components/list/list_title";
import List from "../components/list/list_container";

import {useListContext} from "../listProvider";

const Container = styled.div``;

const Examples = styled.div`
  text-align: center;
  font-size: 14px;
  font-family: "Roboto";
  margin-top: 1rem;
  padding: 0 1rem;
`;

const TravelList = () => {

    const {travelList, setTravelList} = useListContext()

    return (
        <Container>
            <Title>Travel List</Title>
            <Examples>
                Essentials: Passport, wallet, keys, plane tickets, toothbrush, toothpaste, hand sanitiser...
            </Examples>
            <List list={travelList} updateList={setTravelList}/>
        </Container>
    )
}

export default TravelList;
