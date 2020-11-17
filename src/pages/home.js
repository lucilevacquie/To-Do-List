import React from "react";
import styled from "styled-components";

import Title from "../components/list/list_title";
import ChoiceBoard from "../components/choice_board";
import Dashboard from "../components/dashboard";

import {useLoginContext} from "../loginProvider";
import {useListContext} from "../listProvider";

const data = [
    {
        id: "Easy list",
        link: "/easylist",
    },
    {
        id: "Daily task",
        link: "/dailytask",
    },
    {
        id: "Special occasions",
        link: "/specialoccasion",
    }

]

const Container = styled.div`
    font-family: "Roboto", sans-serif;
`;

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