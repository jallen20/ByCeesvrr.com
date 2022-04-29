import React from 'react';
import {HeaderItem, HeaderWrapper, HomeLink, IGLogo} from "./Header.styles";
import Nav from "../Nav";
import {PUBLIC_ASSETS_URL} from "../../constants";

const Header = () => {
    const pathname = 'https://www.instagram.com/ceesvrr';
    return (
        <HeaderWrapper>
            <HeaderItem>
                <Nav/>
            </HeaderItem>
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
