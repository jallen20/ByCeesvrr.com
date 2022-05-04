import styled from 'styled-components';

const ContactWrapper = styled.div`
	width: 100%;
	height: 1000px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ContactForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	-webkit-box-shadow: 1px 1px 9px 6px rgba(0,0,0,0.06); 
	box-shadow: 1px 1px 9px 6px rgba(0,0,0,0.06);
	padding: 5px 40px;
	border-radius: 10px;
	
	textarea {
		width: 100%;
	}
`;

const FormItem = styled.div`
	margin: 10px 0px;
	width: 100%;
`;

const ButtonText = styled.div`
	transition: all .25s ease;
`;

const SubmitButton = styled.button`
	display: flex;
	margin: 10px 0;
	text-align: left;
	width: 100%;
	border: none;
	outline: none;
	background: transparent;
	font-family: futura-pt,sans-serif;
	font-weight: 400;
	font-style: normal;
	font-size: 18px;
	position: relative;
	box-sizing: border-box;
	overflow: hidden;
	border-bottom: 2px solid;
	border-bottom-radius: 3px;
	transition: all .25s ease;
	
	:hover:enabled {
		cursor: pointer;
		border-color: transparent;
		color: #1ac0a2;
	}
	
	:hover:enabled div {
		transform: translate(250%, 0);
	}
	
	:hover:enabled i {
		transform: translateX(0);
	}
`;

const ForwardArrow = styled.i`
	transition: transform .25s ease;
	transform: translateX(-200%);
`;

const ButtonBorder = styled.hr`
	width: 100%;
	height: 1px;
`;

export {
	ContactWrapper,
	ContactForm,
	FormItem,
	SubmitButton,
	ButtonBorder,
	ButtonText,
	ForwardArrow
}
