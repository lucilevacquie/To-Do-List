import React from "react";
import styled from "styled-components";

const Colors = [    
    {
        id: "Black",
        value: "#000000"
    },
    {
        id: "Red",
        value: "#FF0000"
    },
    {
        id: "Orange",
        value: "#FFCC00"
    },
    {
        id: "Green",
        value: "#00FF00"
    },
]

const Container = styled.div`
    width: 100px;
`;

const Options = styled.select`
    display: block;
    overflow: hidden;
`;

const Option = styled.option``;


const ColorDropdown = ({onSetColor}) => {

    const changeColor = (e) => onSetColor(e.target.value)

    return(
        <Container>
                <Options name="colors" id="colors" onChange={changeColor}>
                    {Colors.map((item) => (
                        <Option key={item.id} value={item.value}>{item.id}</Option>
                    ))}
                </Options>
        </Container>
    )
}

export default ColorDropdown;