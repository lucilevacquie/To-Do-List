import React, {Component} from "react";
import styled from "styled-components";

const ListContainer = styled.div`
    display: grid;
    grid-template-rows: 50px 50px 1fr;
`;

const ListTitle = styled.div`
    text-align: center;
    margin-top: 1rem;
    font-size: 24px;
`;

const InputWrapper = styled.div`
    text-align: center;
    padding: 1rem 0;
    input {
        border: none;
        border-bottom: solid grey 1px;
        background-color: transparent;
    }
`;

const AddButton = styled.button`
    border-radius: 10px;
    margin-left: 1rem;
    width: 50px;
    text-align: center;
    border: none;
    background-color: #c53334;
    color: white;
    padding: 2px 0;
`;

const ItemList = styled.ul`
    margin: 1.5rem;
    padding-left: 3.5rem;
    padding-top: 1rem;
    background-color: white;
    height: 100%;
`;

const Item = styled.li`
    font-size: 18px;
`;

const DeleteButton = styled.button`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    background-color: #c53334;
    color: white;
`;

class List extends Component {
    constructor(props){
      super(props);
  
      this.state = {
        newItem:"",
        list:[]
      }
    }
  
    updateInput(key, value){
      this.setState({
        [key]: value
      });
    }
  
    addItem(){
      const newItem ={
        id: 1 + Math.random(),
        value: this.state.newItem.slice()
      };
  
      const list = [...this.state.list];
  
      list.push(newItem);
  
      this.setState({
        list,
        newItem:""
      });
    }
  
    deleteItem(id){
      const list = [...this.state.list];
  
      const updatedList = list.filter(item => item.id !== id);
  
      this.setState({list: updatedList});
    }
  
    render(){
      return (
        <ListContainer>
            <ListTitle>To Do List</ListTitle>
          <InputWrapper>
          <input
            type="text"
            placeholder="Type item here..."
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
          >
          </input>
          <AddButton
            onClick={() => this.addItem()}
          >Add</AddButton>
          </InputWrapper>
          
          <ItemList>
            {this.state.list.map(item => {
              return (
                <Item key={item.id}>
                  {item.value}
                  <DeleteButton
                    onClick={() => this.deleteItem(item.id)}
                  >X</DeleteButton>
                </Item>
              )
            })}
          </ItemList>
        </ListContainer>
      );
    }
}

export default List;