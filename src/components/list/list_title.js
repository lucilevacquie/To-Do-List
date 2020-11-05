import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const ListTitle = styled.div`
  text-align: center;
  margin-top: 1rem;
  font-size: 24px;
`;

const Title = (props) => {
    return (
        <Container>
            <ListTitle>{props.children}</ListTitle>
        </Container>
    )
}

export default Title;