import React, {useState} from "react";
import styled from "styled-components";

import Title from "../components/list/list_title";
import ChoiceBoard from "../components/choice_board";
import Dashboard from "../components/dashboard";
import {useLoginContext} from "../loginProvider";

const data = [
    {
        id: "Easy list",
        link: "/easylist"
    },
    {
        id: "Daily task",
        link: "/dailytask"
    },
    {
        id: "Special occasion",
        link: "/specialoccasion"
    },
    {
        id: "Calendar",
        link: "/calendar"
    },
]

const Container = styled.div``;

const CurrentDate = styled.div`
    text-align: center;
`;

const Home = () => {

    const {username} = useLoginContext()

    const date = new Date();
    const dateOptions = {weekday: "long", year: "numeric", month: "long", day : "numeric"}
    const curDate = new Intl.DateTimeFormat('en-GB', dateOptions).format(date);

    const [isListCreated, setIsListCreated] = useState(false)

    return (
        <Container>
            <Title>Hello {username}!</Title>
            <CurrentDate>{curDate}</CurrentDate>
            {!isListCreated &&
                <ChoiceBoard data={data}/>
            }
            <Dashboard/>
        </Container>
    )
}

export default Home;