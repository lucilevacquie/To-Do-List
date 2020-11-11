import React from "react";
import styled from "styled-components";

import List from "../components/list/list_container";
import Title from "../components/list/list_title";

import {useListContext} from "../listProvider";

const Container = styled.div``;


const EasyList = () => {

    const {easyList, setEasyList} = useListContext()

    return (
        <Container>
            <Title>Easy List</Title>
            <List list={easyList} updateList={setEasyList}/>
        </Container>
    )
}

export default EasyList;
