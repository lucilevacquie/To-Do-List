import React, {useState} from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

import Home from "../pages/home";
import EasyList from "../pages/easylist";
import DailyTask from "../pages/dailytask";
import TypeOfList from "../pages/typeoflists";
import {useLoginContext} from "../loginProvider";

import Menu from "../assets/menu-icon.png";

const data = [
    {
        id: "Home",
        path: Home,
        link: "/"
    },
    {
        id: "Easy list",
        path: EasyList,
        link: "/easylist"
    },
    {
        id: "Daily tasks",
        path: DailyTask,
        link: "/dailytask"
    },
    {
        id: "Special occasions",
        path: TypeOfList,
        link: "/specialoccasion"
    }
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
    height: auto;
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

    const {logout} = useLoginContext()

    return (
        <NavbarContainer>
            <Button onClick={() => setShow(!show)}>
                <Icon src={Menu} alt=""/>
            </Button>
            <Sidebar showPanel={show}>
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
        </NavbarContainer>
    )
}

export default Navbar;