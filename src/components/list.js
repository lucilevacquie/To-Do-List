import React, {useState} from "react";
import styled from "styled-components";
import Dropdown from "./dropdown";



const Item = styled.li`
    display: grid;
    grid-template-columns: repeat(3, auto);
    width: 100%;
    align-items: center;
`;

const Value = styled.div`
    font-size: 18px;
    color: ${(props) => props.color}; 
`;

const DeleteButton = styled.button`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: none;
    background-color: #c53334;
    color: white;
    font-size: 14px;
`;


const ListItem = ({onDeleteItem, item}) => {

    const [color, setColor] = useState("#000000");

    return (
        <Item>
            <DeleteButton
            onClick={() => onDeleteItem(item.id)}
            >X</DeleteButton>
            <Value color={color}>{item.value}</Value>
            <Dropdown onSetColor={setColor}/>
        </Item>
    )
}

export default ListItem;