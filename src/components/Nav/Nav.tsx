import React from 'react';
import {NavLink, NavWrapper} from "./Nav.styles";
import {useDispatch} from "react-redux";
import {toggleNav} from "../../ducks/actions";
import {useWindowDimensions} from "../../hooks";
import {MOBILE_WIDTH} from "../../constants";

const Nav = () => {
    const dispatch = useDispatch();
    const { width } = useWindowDimensions();
    const onNavClick = () => +width < MOBILE_WIDTH ? dispatch(toggleNav(false)) : true;
    
    return (
        <NavWrapper>
            <NavLink to="/" onClick={onNavClick}>Home</NavLink>
            <NavLink to="/work" onClick={onNavClick}>Work</NavLink>
            <NavLink to="/contact" onClick={onNavClick}>Contact</NavLink>
        </NavWrapper>
    );
};
export default Nav;
