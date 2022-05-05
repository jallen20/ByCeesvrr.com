import styled from 'styled-components';
import {Link} from "react-router-dom";

const NavWrapper = styled.div`
	width: auto;
	padding: 10px;
	display: flex;
	position: relative;
	
	@media (max-width: 500px) {
		flex-direction: column;
	}
`;

const NavLink = styled(Link)`
	margin: 0px 5px;
	font-size: 18px;
	font-family: futura-pt,sans-serif;
	font-weight: 400;
	font-style: normal;
	text-decoration: none;
	color: black;
	position: relative;
	
	@media (max-width: 500px) {
		margin: 5px 0px;
	}
`;

export {
	NavWrapper,
	NavLink
}
