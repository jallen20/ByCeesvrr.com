import styled from 'styled-components';
import {Link} from "react-router-dom";

const HeaderWrapper = styled.div`
	height: 100px;
	width: 100%;
	display: flex;
	justify-content: space-between;
`;

const HeaderItem = styled.div`
	margin: 10px;
	position: relative;
	width: 10rem;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const HomeLink = styled(Link)`
	text-align: center;
	font-family: futura-pt,sans-serif;
	font-weight: 400;
	font-style: normal;
	text-decoration: none;
	color: black;
	font-size: 2rem;
	white-space:nowrap;
`;

const IGLogo = styled.a`
	width: 25px;
	text-decoration: none;
	
	img {
		width: 100%;
	}
`;

export {
	HeaderWrapper,
	HeaderItem,
	HomeLink,
	IGLogo
}
