import React from "react";
import styled from "styled-components";

import Title from "../components/list/list_title";
import ChoiceBoard from "../components/choice_board";

const data= [
    {
        id: "Travel list",
        link: "/travel"
    },
    {
        id: "Shopping list",
        link: "/shopping"
    },
    {
        id: "Raclette shopping list",
        link: "/raclette"
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
