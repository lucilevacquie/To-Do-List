import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { v4 } from 'uuid';

import ListItem from "./list";
import AddIcon from "../../assets/add-icon.png";

import { putList, getList } from "../../localStorage";

const ListContainer = styled.div`
  display: grid;
  grid-template-rows: 50px 50px 1fr;
`;

const InputWrapper = styled.form`
  text-align: center;
  padding: 1rem 0;  
  display: grid;
  grid-template-columns: 80% 20%;
  input {
    border: none;
    border-bottom: solid grey 1px;
    background-color: transparent;
    margin-left: 3rem;
  }
`;

const AddButton = styled.button`
  width: 25px;
  height: 25px;
  background-color: transparent;
  border-color: transparent;
`;

const Add = styled.img`
  width: 25px;
  height: 25px;
`;

const ItemList = styled.ul`
    height: 100%;
    line-height: 2rem;
`;

const List = ({listKey}) => {

    const [newItem, setNewItem] = useState("");

    //const list = {
    // id: value,
    // 1: "Go to the gym",
    // 2: "Clean the bedroom"
    // }
    const [list, setList] = useState(getList(listKey));

    const addItem = e => {
        e.preventDefault();
        const id = v4();
        const item = {value:newItem, quantity:0, checked:false}
        setList({
            ...list, 
            [id]:item
        })
        setNewItem("");
    }

    const updateItem = (id, property, newValue) => {
        const updatedItem = list[id];
        updatedItem[property] = newValue;
        setList({...list, [id]:updatedItem});
    }

    const deleteItem = (id) => {
        const newList = list;
        delete newList[id];
        setList({...newList});
    }

    useEffect(() => {putList(listKey, list)}, [list])

    return (
        <ListContainer>
        
          <InputWrapper onSubmit={(event) => addItem(event)}>
          <input
            type="text"
            placeholder="Type item here..."
            value={newItem}
            onChange={e => setNewItem(e.target.value)}
          >
          </input>
          <AddButton type="submit"
          >
            <Add src={AddIcon} alt="Add item"/>
          </AddButton>
          </InputWrapper>
          
          <ItemList>
            {Object.keys(list).map(id => {
                const item = list[id]
                return (
                    <ListItem 
                        key={id} 
                        onDeleteItem={deleteItem} 
                        onUpdateItem={updateItem}
                        item={item} 
                        id={id}
                    />
                )
            })}
          </ItemList>
        </ListContainer>
    )
}

export default List;