import styled from 'styled-components';
import {Link} from "react-router-dom";

const NavWrapper = styled.div`
	width: auto;
	padding: 10px;
`;

const NavLink = styled(Link)`
	margin: 0px 2px;
	display: inline-block;
	font-family: futura-pt,sans-serif;
	font-weight: 400;
	font-style: normal;
	text-decoration: none;
	color: black;
`;

export {
	NavWrapper,
	NavLink
}
