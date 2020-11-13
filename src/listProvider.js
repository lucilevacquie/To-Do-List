import React, {createContext, useContext, useState, useEffect} from "react";
import {getList, putList} from "./localStorage";

const listContext = createContext()

export const useListContext = () => useContext(listContext)

export const Lists = {
    Daily : "dailylist",
    Easy : "easylist",
    Shopping : "shoppinglist",
    Travel : "travellist",
}

export const colors = {
    maroon: "#AB7657",
    red: "#C93738",
    lightBleu: "#C2D5DB",
    sand: "#DCBCA5",
}

const ListProvider = ({ children }) => {

    const [dailyTaskList, setDailyTaskList] = useState(getList(Lists.Daily))
    useEffect(() => {putList(Lists.Daily, dailyTaskList)}, [dailyTaskList]) 

    const [easyList, setEasyList] = useState(getList(Lists.Easy))
    useEffect(() => {putList(Lists.Easy, easyList)}, [easyList])

    const [shoppingList, setShoppingList] = useState(getList(Lists.Shopping))
    useEffect(() => {putList(Lists.Shopping, shoppingList)}, [shoppingList])

    const [travelList, setTravelList] = useState(getList(Lists.Travel))
    useEffect(() => {putList(Lists.Travel, travelList)}, [travelList])


    const isListCreated = () => {
        return Object.keys(easyList).length > 0
        || Object.keys(dailyTaskList).length > 0
        || Object.keys(shoppingList).length > 0
        || Object.keys(travelList).length > 0
    }

    const routes = [
        {
            id: "Easy list",
            link: "/easylist",
            noOfItems: Object.keys(easyList).length,
            color: colors.lightBleu
        },
        {
            id: "Daily task",
            link: "/dailytask",
            noOfItems: Object.keys(dailyTaskList).length,
            color: colors.maroon
        },
        {
            id: "Shopping list",
            link: "/shopping",
            noOfItems: Object.keys(shoppingList).length,
            color: colors.sand
        },
        {
            id: "Travel list",
            link: "/travel",
            noOfItems: Object.keys(travelList).length,
            color: colors.red
        },
    ]

    const state = {
        dailyTaskList,
        setDailyTaskList,
        easyList, 
        setEasyList,
        shoppingList, 
        setShoppingList,
        travelList, 
        setTravelList,
        routes,
        isListCreated
    }
    
    return(
    <listContext.Provider value = { state }>{ children }</listContext.Provider>
    )
}

export default ListProvider;