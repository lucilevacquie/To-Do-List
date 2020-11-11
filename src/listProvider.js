import React, {createContext, useContext, useState, useEffect} from "react";
import {getList, putList} from "./localStorage";

const listContext = createContext()

export const useListContext = () => useContext(listContext)

const ListProvider = ({ children }) => {

    const [dailyTaskList, setDailyTaskList] = useState(getList("dailytask"))
    useEffect(() => {putList("dailytask", dailyTaskList)}, [dailyTaskList]) 

    const [easyList, setEasyList] = useState(getList("easylist"))
    useEffect(() => {putList("easylist", easyList)}, [easyList])

    const [shoppingList, setShoppingList] = useState(getList("shoppinglist"))
    useEffect(() => {putList("shoppinglist", shoppingList)}, [shoppingList])

    const [travelList, setTravelList] = useState(getList("travellist"))
    useEffect(() => {putList("travellist", travelList)}, [travelList])

    const isListCreated = () => {
        return Object.keys(dailyTaskList).length > 0
        || Object.keys(easyList).length > 0
        || Object.keys(shoppingList).length > 0
        || Object.keys(travelList).length > 0
    }

    const state = {
        dailyTaskList,
        setDailyTaskList,
        easyList, 
        setEasyList,
        shoppingList, 
        setShoppingList,
        travelList, 
        setTravelList,
        isListCreated,
    }
    
    return(
    <listContext.Provider value = { state }>{ children }</listContext.Provider>
    )
}

export default ListProvider;