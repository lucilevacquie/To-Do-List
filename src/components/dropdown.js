import React, {useState} from "react";
import styled from "styled-components";


const Container = styled.div`
    background-color: pink;
    width: 100px;
`;

const Title = styled.div`
    color: green;
    cursor: pointer;
`;

const Options = styled.div`
    height: ${(props) => (props.showPanel ? "auto" : "0")};
    overflow: hidden;
`;

const Option = styled.div``;


const ColorDropdown = () => {

    const [show, setShow] = useState(false);

    return(
        <Container>
            <Title onClick={() => setShow(!show)}>Choose a color</Title>
                <Options showPanel={show}>
                      <Option>Black</Option>
                      <Option>Pink</Option>
                      <Option>Green</Option>
                      <Option>Yellow</Option>
                </Options>
        </Container>
    )
}

export default ColorDropdown;