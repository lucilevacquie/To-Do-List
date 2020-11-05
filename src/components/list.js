import React, {useState} from "react";
import styled from "styled-components";
import Dropdown from "./dropdown";
import Edit from "./edit";
import CrossIcon from "../assets/delete-icon.png";



const Item = styled.li`
    display: grid;
    grid-template-columns: 200px 10% 10% 10%;
    width: 100%;
    align-items: center;
`;

const Value = styled.div`
    font-size: 18px;
    color: ${(props) => props.color}; 
`;

const Delete = styled.div`
    width: 20px;
    height: 20px;
`;

const DeleteIcon = styled.img`
    width: 100%;
    height: 100%;
`;

const ListItem = ({onDeleteItem, item, onChangeText}) => {

    const [color, setColor] = useState("#000000");

    const [edit, setEdit] = useState(false);


    return (
        <Item>
            {edit ? 
                <form onSubmit={() => setEdit(!edit)}>
                    <input value={item.value} onChange={(event) => onChangeText(event, item.id)}/>
                </form> :
                <Value color={color}>{item.value}</Value>
            }
            <Dropdown onSetColor={setColor}/>
            <Edit editText={setEdit}/>
            <Delete
            onClick={() => onDeleteItem(item.id)}
            >
                <DeleteIcon src={CrossIcon} alt="Delete item"/>
            </Delete>
        </Item>
    )
}

export default ListItem;