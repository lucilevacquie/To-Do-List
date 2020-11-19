import React from "react";
import styled from "styled-components";

import DeleteImg from "../../assets/delete-icon.png";

const Container = styled.div``;

const Text = styled.div``;

const Delete = styled.div`
    width: 20px;
    height: 20px;
`;

const DeleteIcon = styled.img`
    width: 100%;
    height: 100%;
`;

const Clear = ({onDeleteItem}) => {
    return(
        <Container>
            <Text>Clear all</Text>
            <Delete
            onClick={() => onDeleteItem(id)}>
                <DeleteIcon src={DeleteImg} alt="Delete item"/>
            </Delete>
        </Container>
    )
}

export default Clear;