import React, {useState} from "react";
import styled from "styled-components";
import {NavLink, BrowserRouter as Router} from "react-router-dom";

import EasyList from "../pages/easylist";
import DailyTask from "../pages/dailytask";
import TypeOfList from "../pages/typeoflists";
import Calendar from "../pages/calendar";

import MenuIcon from "../assets/menu-icon.png";

const data = [
    {
        id: "Easy list",
        path: EasyList,
        link: "/easylist"
    },
    {
        id: "Daily task",
        path: DailyTask,
        link: "/dailytask"
    },
    {
        id: "Special occasion",
        path: TypeOfList,
        link: "/specialoccasion"
    },
    {
        id: "Calendar",
        path: Calendar,
        link: "/calendar"
    },
]

const NavbarContainer = styled.div`
    display: grid;
    grid-template-rows: 20% 80%;
`;

const Button = styled.button`
    background: none;
    box-sizing: border-box;
    border: none;
        :focus{
            outline: none;
        }
`;

const Icon = styled.img `
    width: 35px;
    height: 30px;
    cursor: pointer;
`;

const Sidebar = styled.div`
    width: ${(props) => (props.showPanel ? "250px" : "0")};
    height: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    left : 0;
    background-color: #a3bed3;
    overflow-x: hidden;
    padding-top: 20px;
    transition: 0.5s;
`;

const CloseButton = styled.a`
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 40px;
    cursor: pointer;
`;

const Links = styled.ul`
    text-align: center;
    padding-left: 0;
    a {
        text-decoration: none;
        color: #835a3c;
        display: block;
        margin: 1.5rem 0;
        font-size: 20px;
        transition: 0.3s;
    }
`;

const Navbar = () => {

    const [show, setShow] = useState(false);

    return (
        <NavbarContainer>
            <Button onClick={() => setShow(!show)}>
                <Icon src={MenuIcon} alt=""/>
            </Button>
            <Sidebar showPanel={show}>
            <CloseButton onClick={() => setShow(!show)}>&times;</CloseButton>
            <div>

            <Router>
                <Links>
                    {data.map(item => (
                        <NavLink key={item.id} to={item.link}>
                            {item.id}
                        </NavLink>
                    ))}
                </Links>
            </Router>
                
            </div>
        </Sidebar>
        </NavbarContainer>
    )
}

export default Navbar;