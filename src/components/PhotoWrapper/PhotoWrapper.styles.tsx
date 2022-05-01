import styled from 'styled-components';

const PhotoWrapperWrapper = styled.div`
	margin: 1px;
	padding: 0;
	display: flex;
	overflow: auto;
	
	@media (max-width: 500px) {
		flex-direction: column;
  	}
	
	img {
		margin: 1px;
		height: 920px;
		
		@media (max-width: 500px) {
    		width: auto;
    		height: auto;
  		}
	}
`;

export {
	PhotoWrapperWrapper
}
