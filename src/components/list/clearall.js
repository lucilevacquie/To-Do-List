import React from "react";
import styled from "styled-components";

import DeleteImg from "../../assets/delete-icon.png";

const Container = styled.div`
    display: flex;
    justify-content: end;
`;

const Text = styled.div``;

const Delete = styled.div`
    margin-left: 5px;
    width: 15px;
    height: 15px;
`;

const DeleteIcon = styled.img`
    width: 100%;
    height: 100%;
`;

const Clear = ({onDeleteList}) => {
    return(
        <Container>
            <Text>Clear all</Text>
            <Delete
            onClick={() => onDeleteList()}>
                <DeleteIcon src={DeleteImg} alt="Delete list"/>
            </Delete>
        </Container>
    )
}

export default Clear;