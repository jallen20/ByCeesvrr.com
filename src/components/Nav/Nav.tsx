import React from 'react';
import {NavLink, NavWrapper} from "./Nav.styles";

const Nav = () => (
    <NavWrapper>
        <NavLink to="/work">Work</NavLink>
        <NavLink to="/contact">Contact</NavLink>
    </NavWrapper>
);
export default Nav;
