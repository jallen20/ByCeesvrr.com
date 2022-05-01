import React from 'react';
import {HeaderItem, HeaderWrapper, HomeLink, IGLogo} from "./Header.styles";
import Nav from "../Nav";
import {MOBILE_WIDTH, PUBLIC_ASSETS_URL} from "../../constants";
import {useWindowDimensions} from "../../hooks";
import FlyoutMenu from "../FlyoutMenu";

const Header = () => {
    const pathname = 'https://www.instagram.com/ceesvrr';
    const { width } = useWindowDimensions();
    return (
        <HeaderWrapper>
            {
                +width > MOBILE_WIDTH && 
                <HeaderItem>
                    <Nav/>
                </HeaderItem>
            }
            {
                +width < MOBILE_WIDTH &&
                <HeaderItem>
                    <FlyoutMenu className='flyout'/>
                </HeaderItem>
            }
            <HeaderItem>
                <HomeLink to="/">Justin Caesar Allen</HomeLink>
            </HeaderItem>
            <HeaderItem>
                <IGLogo href='https://www.instagram.com/ceesvrr'>
                    <img src={`${PUBLIC_ASSETS_URL}ig.png`}/>
                </IGLogo>
            </HeaderItem>
        </HeaderWrapper>
    );
}
export default Header;
