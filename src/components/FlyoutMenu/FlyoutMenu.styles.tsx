import styled from 'styled-components';

const FlyoutMenuWrapper = styled.div`
	display: block;
	width: 25px;
`;

const Line = styled.hr`
	width: 100%;
	height: 10px;
	margin: 3px 0px;
	color: black;
	background: black;
`;

const FlyoutContent = styled.div`
	width: 50%;
	position: absolute;
	top:0;
	bottom: 0;
	left:0;
	background: white;
	opacity: .7;
	display: none;
	flex-direction: column;
	justify-content: space-around;
	transition: transform .5s ease-in;
	
	@media (max-width: 500px) {
		display: flex;
	}
`;

const CloseButton = styled.button`
	background: none;
	margin: 0;
	padding: 0;
	border: none;
`;

export {
	FlyoutMenuWrapper,
	Line,
	FlyoutContent,
	CloseButton
}
