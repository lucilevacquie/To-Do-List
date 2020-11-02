import React, {Component} from "react";
import styled from "styled-components";
import ListItem from "./list";

const ListContainer = styled.div`
    display: grid;
    grid-template-rows: 50px 50px 1fr;
`;

const ListTitle = styled.div`
    text-align: center;
    margin-top: 1rem;
    font-size: 24px;
`;

const InputWrapper = styled.form`
    text-align: center;
    padding: 1rem 0;
    input {
        border: none;
        border-bottom: solid grey 1px;
        background-color: transparent;
    }
`;

const AddButton = styled.button`
    border-radius: 50%;
    margin-left: 1rem;
    width: 28px;
    height: 28px;
    text-align: center;
    border: none;
    background-color: #c53334;
    color: white;
    font-size: 18px;
    font-style: bold;
`;

const ItemList = styled.ul`
    margin: 1.5rem;
    padding-left: 1.5rem;
    height: 100%;
    line-height: 2rem;
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
  
    addItem(event){
      event.preventDefault();
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

    updateText(event, id){
      const list = this.state.list;

      list.forEach((item) => {
        if (item.id === id){
          item.value = event.target.value;
        }
      })

      this.setState({list});
    }
  
    render(){
      return (
        <ListContainer>
            <ListTitle>To Do List</ListTitle>
          <InputWrapper onSubmit={(event) => this.addItem(event)}>
          <input
            type="text"
            placeholder="Type item here..."
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
          >
          </input>
          <AddButton type="submit"
          >+</AddButton>
          </InputWrapper>
          
          <ItemList>
            {this.state.list.map(item => {
              return <ListItem key={item.id} onDeleteItem={this.deleteItem.bind(this)} onChangeText={this.updateText.bind(this)} item={item}/>
            })}
          </ItemList>
        </ListContainer>
      );
    }
}

export default List;