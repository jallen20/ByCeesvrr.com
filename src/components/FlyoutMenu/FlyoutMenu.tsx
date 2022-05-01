import React from 'react';
import {FlyoutContent, FlyoutMenuWrapper, Line, CloseButton} from "./FlyoutMenu.styles";
import Nav from "../Nav";
import {useDispatch, useSelector} from "react-redux";
import {getIsNavOpen} from "../../ducks/selectors";
import {toggleNav} from "../../ducks/actions";

const FlyoutMenu = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector(getIsNavOpen);
    
    const onOpenNav = () => dispatch(toggleNav(true));
    const onCloseNav = () => dispatch(toggleNav(false));
    
    return (
        <>
            <FlyoutMenuWrapper onClick={onOpenNav}>
                <Line/>
                <Line/>
                <Line/>
            </FlyoutMenuWrapper>
            <FlyoutContent style={{ transform: `translateX(${isOpen ? '0' : '-250px'})` }}>
                <Nav />
                <CloseButton onClick={onCloseNav}>Close</CloseButton>
            </FlyoutContent>
        </>
    )
};
export default FlyoutMenu;
