import React, {useState} from 'react';
import {FlyoutContent, FlyoutMenuWrapper, Line, CloseButton} from "./FlyoutMenu.styles";
import Nav from "../Nav";

const FlyoutMenu = (props: { className: string }) => {
    const { className } = props;
    const [x, setX] = useState('-250px');
    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => {
        setIsOpen(!isOpen);
        if (isOpen) setX('0');
        else setX('-250px');
    }
    return (
        <>
            <FlyoutMenuWrapper className={className} onClick={toggle}>
                <Line/>
                <Line/>
                <Line/>
            </FlyoutMenuWrapper>
            <FlyoutContent style={{ transform: `translateX(${x})` }}>
                <Nav />
                <CloseButton onClick={toggle}>Close</CloseButton>
            </FlyoutContent>
        </>
    )
};
export default FlyoutMenu;
