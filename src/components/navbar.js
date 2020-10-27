import React, {useState} from "react";
import styled from "styled-components";
import EasyList from "../pages/easylist";
import DailyTask from "../pages/dailytask";
import TypeOfList from "../pages/typeoflists";
import Calendar from "../pages/calendar";
import MenuIcon from "../assets/menu-icon.jpg";

const data = [
    {
        id: "Easy list",
        path: EasyList
    },
    {
        id: "Daily task",
        path: DailyTask
    },
    {
        id: "Type of list",
        path: TypeOfList
    },
    {
        id: "Calendar",
        path: Calendar
    },
]

const NavbarContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 85px);
    justify-content: center;
    margin: 1.5rem 0;
`;

const Button = styled.button`
    float: left;
    background: none;
    box-sizing: border-box;
    border: none;
        :focus{
            outline: none;
        }
`;

const Icon = styled.div `
    width: 25px;
    height: 25px;
`;

const Navlink = styled.div`
    text-align: center;
    a {
        text-decoration: none;
        color: black;
    }
`;

const Navbar = () => {

    const [show, setShow] = useState(false);

    return (
        <NavbarContainer>
            <Button onClick={() => setShow(!show)}>
                <Icon src={MenuIcon} alt=""/>
            </Button>
            {data.map(item => {
                <Navlink key={item.id}>
                    <a href={item.path}>{item.id}</a>
                </Navlink>
            })}
        </NavbarContainer>
    )
}

export default Navbar;