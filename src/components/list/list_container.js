import React, {Component} from "react";
import styled from "styled-components";
import ListItem from "./list";
import AddIcon from "../../assets/add-icon.png";

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
    margin-left: 0.5rem;
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
        
          <InputWrapper onSubmit={(event) => this.addItem(event)}>
          <input
            type="text"
            placeholder="Type item here..."
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
          >
          </input>
          <AddButton type="submit"
          >
            <Add src={AddIcon} alt="Add item"/>
          </AddButton>
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