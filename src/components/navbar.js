import React, {useState} from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

import Home from "../pages/home";
import EasyList from "../pages/easylist";
import DailyTask from "../pages/dailytask";
import TravelList from "../pages/travel";
import ShoppingList from "../pages/shopping";

import {useLoginContext} from "../loginProvider";
import {colors} from "../listProvider";

import Menu from "../assets/menu-icon.png";

const data = [
    {
        id: "Home",
        path: Home,
        link: "/"
    },
    {
        id: "Daily tasks",
        path: DailyTask,
        link: "/dailytask"
    },
    {
        id: "Easy list",
        path: EasyList,
        link: "/easylist"
    },

    {
        id: "Travel list",
        path: TravelList,
        link: "/travel"
    },
    {
        id: "Shopping list",
        path: ShoppingList,
        link: "/shopping"
    }
]

const NavbarContainer = styled.div`
    display: grid;
    grid-template-rows: 20% 80%;
    font-family: "Roboto", sans-serif;
    position: absolute;
`;

const Button = styled.button`
    background: none;
    margin-left: 15px;
    box-sizing: border-box;
    border: none;
        :focus{
            outline: none;
        }
`;

const Icon = styled.img `
    width: 35px;
    height: auto;
    cursor: pointer;
`;

const SidebarContainer = styled.div`
    width: ${(props) => (props.showPanel ? "100%" : "0")};
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    transition: 0.5s;
    z-index: 1;
`;

const Sidebar = styled.div`
    width: ${(props) => (props.showPanel ? "250px" : "0")};
    height: 100%;
    position: fixed;
    top: 0;
    left : 0;
    background-color: ${colors.grey};
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
    color: white;
`;

const Links = styled.ul`
    text-align: center;
    padding-left: 0;
    white-space: nowrap;
    a {
        text-decoration: none;
        color: white;
        display: block;
        margin: 1.5rem 0;
        font-size: 20px;
        transition: 0.3s;
    }
`;

const Navbar = () => {

    const [show, setShow] = useState(false);

    const {logout} = useLoginContext()



    return (
        <NavbarContainer>
            <Button onClick={() => setShow(!show)}>
                <Icon src={Menu} alt=""/>
            </Button>

            <SidebarContainer showPanel={show} onClick={() => setShow(false)}>
                <Sidebar showPanel={show} onClick={(e) => e.stopPropagation()}>
                    <CloseButton onClick={() => setShow(!show)}>&times;</CloseButton>
                    <div>
                        <Links>
                            {data.map(item => (
                                <NavLink key={item.id} to={item.link} onClick={() => setShow(!show)}>
                                    {item.id}
                                </NavLink>
                            ))}
                            <NavLink to="/" onClick={() => logout()}>Logout</NavLink>
                        </Links>
                    </div>
                </Sidebar>
            </SidebarContainer>
            
        </NavbarContainer>
    )
}

export default Navbar;