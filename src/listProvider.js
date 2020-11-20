import React, {createContext, useContext, useState, useEffect} from "react";
import {getList, putList} from "./localStorage";

const listContext = createContext()

export const useListContext = () => useContext(listContext)

export const Lists = {
    Daily : "dailylist",
    Easy : "easylist",
    Shopping : "shoppinglist",
    Travel : "travellist",
    Raclette : "raclettelist",
}

export const colors = {
    grey: "#262626",
}

const ListProvider = ({ children }) => {

    const [dailyTaskList, setDailyTaskList] = useState(getList(Lists.Daily))
    useEffect(() => {putList(Lists.Daily, dailyTaskList)}, [dailyTaskList]) 

    const [easyList, setEasyList] = useState(getList(Lists.Easy))
    useEffect(() => {putList(Lists.Easy, easyList)}, [easyList])

    const [shoppingList, setShoppingList] = useState(getList(Lists.Shopping))
    useEffect(() => {putList(Lists.Shopping, shoppingList)}, [shoppingList])

    const [travelList, setTravelList] = useState({
        "Passport":{
            value: "Passport",
            checked:false
        },
        "Charger":{
            value: "Phone charger",
            checked:false
        },
        ...getList(Lists.Travel),
    })
    useEffect(() => {putList(Lists.Travel, travelList)}, [travelList])

    const [racletteList, setRacletteList] = useState(getList(Lists.Raclette))
    useEffect(() => {putList(Lists.Raclette, racletteList)}, [racletteList])


    const isListCreated = () => {
        return Object.keys(easyList).length > 0
        || Object.keys(dailyTaskList).length > 0
        || Object.keys(shoppingList).length > 0
        || Object.keys(travelList).length > 2
        || Object.keys(racletteList).length > 0
    }

    const noOfDone = (list) => Object.keys(list).filter((id) => list[id].checked).length

    const routes = [
        {
            id: "Easy list",
            link: "/easylist",
            noOfItems: Object.keys(easyList).length,
            noOfDone: noOfDone(easyList)
        },
        {
            id: "Daily task",
            link: "/dailytask",
            noOfItems: Object.keys(dailyTaskList).length,
            noOfDone: noOfDone(dailyTaskList)
        },
        {
            id: "Shopping list",
            link: "/shopping",
            noOfItems: Object.keys(shoppingList).length,
            noOfDone: noOfDone(shoppingList)
        },
        {
            id: "Travel list",
            link: "/travel",
            noOfItems: Object.keys(travelList).length,
            noOfDone: noOfDone(travelList)
        },
        {
            id: "Raclette list",
            link: "/raclette",
            noOfItems: Object.keys(racletteList).length,
            noOfDone: noOfDone(racletteList)
        }
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
        racletteList,
        setRacletteList,
        routes,
        isListCreated
    }
    
    return(
    <listContext.Provider value = { state }>{ children }</listContext.Provider>
    )
}

export default ListProvider;