import styled from 'styled-components';

const TextboxWrapper = styled.div`
	position: relative;
	overflow: hidden;
	display: flex;
	height: 4rem;
	width: 16rem;
	.main {
		left: 0;
		transform: translate(0, -50%);
	}
	
	.sm {
		right: 0;
		transform: translate(3rem, -50%);
		width: 6rem;
		font-size: 0.75rem;
		text-align: right;
		opacity: 0;
		transition: all 0.35s;
	}
`;

const TextBoxLabel = styled.span`
	position: absolute;
	top: 50%;
	pointer-events: none;
	transition: all 0.35s;
`;

const TextBoxInput = styled.input`
	height: inherit;
	width: 100%;
	border: 0;
	border-bottom: 2px solid black;
	outline: none;
	background: transparent;
	font-size: 1rem;
	transition: all 0.35s;
	
	&:focus {
		border-bottom-color: #1ac0a2;
	}
	&:focus ~ .main {
		opacity: 0;
		transform: translate(-3rem, -50%);
	}
	&:focus ~ .sm {
		opacity: 1;
		transform: translate(0, -50%);
	}
`;

export {
	TextboxWrapper,
	TextBoxLabel,
	TextBoxInput
}
