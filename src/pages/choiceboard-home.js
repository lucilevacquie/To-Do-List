import React from "react";
import styled from "styled-components";

import Title from "../components/list/list_title";
import ChoiceBoard from "../components/choice_board";

import {useLoginContext} from "../loginProvider";

const data = [
    {
        id: "Daily task",
        link: "/dailytask"
    },
    {
        id: "Easy list",
        link: "/easylist"
    },

    {
        id: "Travel list",
        link: "/travellist"
    },
    {
        id: "Shopping list",
        link: "/shoppinglist"
    }
]

const Container = styled.div`
    font-family: "Roboto", sans-serif;
`;

const CurrentDate = styled.div`
    text-align: center;
`;

const ChoiceBoardHome = () => {

    const {username} = useLoginContext()

    const date = new Date();
    const dateOptions = {weekday: "long", year: "numeric", month: "long", day : "numeric"}
    const curDate = new Intl.DateTimeFormat('en-GB', dateOptions).format(date);


    return (
        <Container>
            <Title>Hello {username}!</Title>
            <CurrentDate>{curDate}</CurrentDate>
                <ChoiceBoard data={data}/>
        </Container>
    )
}

export default ChoiceBoardHome;