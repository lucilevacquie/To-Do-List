import React, {useState} from "react";
import styled from "styled-components";

import Dropdown from "./dropdown";
import Edit from "./edit";
import Counter from "./counter";


const Item = styled.li`
  width: inherit;
  display: grid;
  grid-template-columns: ${(props) => props.showCounter ? "5% auto 22% 10% 5%": "5% auto 10% 5%"};
  width: 100%;
  align-items: center;
`;

const Checkbox = styled.input`
  margin: 0;
  position: relative;
  width: 1.5em;
  height: 1.5em;
  color: black;
  border: 1px solid gray;
  border-radius: 4px;
  appearance: none;
  outline: 0;
  cursor: pointer;
  transition: background 175ms cubic-bezier(0.1, 0.1, 0.25, 1);
  &::before {
    position: absolute;
    content: '';
    display: block;
    top: -3px;
    left: 3px;
    width: 8px;
    height: 14px;
    border-style: solid;
    border-color: white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    opacity: 0;
  }
  &:checked {
    color: white;
    border-color: #C93738;
    background: #C93738;
    &::before {
      opacity: 1;
    }
    ~ label::before {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
  }
`;

const Text = styled.form``;

const Value = styled.div`
    padding-left: 10px;
    font-size: 20px;
    color: ${(props) => props.color}; 
    text-decoration: ${(props) => props.checked ? "line-through" : "none"};
`;


const ListItem = ({item, onUpdateItem, id, showCounter}) => {

    const [color, setColor] = useState("#000000");

    const [edit, setEdit] = useState(false);

    return (
        <Item showCounter={showCounter}>
            <Checkbox type="checkbox" checked={item.checked} onChange={e => onUpdateItem(id, "checked", e.target.checked)}/>
            {edit ? 
                <Text onSubmit={() => setEdit(!edit)}>
                    <input value={item.value} onChange={(e) => onUpdateItem(id, "value", e.target.value)}/>
                </Text> :
                <Value color={color} checked={item.checked}>{item.value}</Value>
            }
            {showCounter && 
              <Counter showCounter={showCounter}/>
            }
            <Dropdown onSetColor={setColor}/>
            <Edit editText={() => setEdit(!edit)}/>
        </Item>
    )
}

export default ListItem;