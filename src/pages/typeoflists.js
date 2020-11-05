import React from "react";
import styled from "styled-components";

import Title from "../components/list/list_title";
import ChoiceBoard from "../components/choice_board";

const data= [
    {
        id: "Travel List",
        link: "/travel"
    },
    {
        id: "Shopping List",
        link: "/shopping"
    },
]

const Container = styled.div``;

const TypeOfList = () => {

    return (
        <Container>
            <Title>Special Occasions</Title>
            <ChoiceBoard data={data}/>
        </Container>
    )
}

export default TypeOfList;
