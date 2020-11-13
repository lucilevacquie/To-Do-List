import React from "react";
import styled from "styled-components";

import Title from "../components/list/list_title";
import ChoiceBoard from "../components/choice_board";
import Dashboard from "../components/dashboard";

import {useLoginContext} from "../loginProvider";
import {useListContext, colors} from "../listProvider";

const data = [
    {
        id: "Easy list",
        link: "/easylist",
        color: colors.lightBleu,
    },
    {
        id: "Daily task",
        link: "/dailytask",
        color: colors.maroon,
    },
    {
        id: "Special occasions",
        link: "/specialoccasion",
        color: colors.sand,
    }
]

const Container = styled.div``;

const CurrentDate = styled.div`
    text-align: center;
`;

const Home = () => {

    const {username} = useLoginContext()

    const {isListCreated} = useListContext()

    const date = new Date();
    const dateOptions = {weekday: "long", year: "numeric", month: "long", day : "numeric"}
    const curDate = new Intl.DateTimeFormat('en-GB', dateOptions).format(date);


    return (
        <Container>
            <Title>Hello {username}!</Title>
            <CurrentDate>{curDate}</CurrentDate>
            {!isListCreated() ?
                <ChoiceBoard data={data}/> : <Dashboard/>
            }
        </Container>
    )
}

export default Home;