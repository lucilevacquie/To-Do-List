import React from "react";
import styled from "styled-components";

import Title from "../components/list/list_title";
import ChoiceBoard from "../components/choice_board";

import { colors } from "../colors";

const data= [
    {
        id: "Travel list",
        link: "/travel",
        color: colors.sand
    },
    {
        id: "Shopping list",
        link: "/shopping",
        color: colors.red
    },
]

const Container = styled.div``;

const TypeOfList = () => {

    return (
        <Container>
            <Title>Special occasions</Title>
            <ChoiceBoard data={data}/>
        </Container>
    )
}

export default TypeOfList;
