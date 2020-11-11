import React from "react";
import styled from "styled-components";

import List from "../components/list/list_container";
import Title from "../components/list/list_title";

import {useListContext} from "../listProvider";

const Container = styled.div``;

const DailyTask = () => {

    const {dailyTaskList, setDailyTaskList} = useListContext() 

    return (
        <Container>
            <Title>Daily Tasks</Title>
            <List list={dailyTaskList} updateList={setDailyTaskList}/>
        </Container>
    )
}

export default DailyTask;
