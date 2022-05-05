import styled from 'styled-components';

const PhotoWrapperWrapper = styled.div`
	margin: 0;
	padding: 0;
	display: flex;
	overflow-x: auto;
	overflow-y: hidden;
	height: 100%;
	box-sizing: border-box;
	
	@media (max-width: 500px) {
		flex-direction: column;
		overflow-x: hidden;
		overflow-y: auto;
  	}
	
	img {
		margin: 1px;
		height: 100%;
		object-fit: cover;
		
		@media (max-width: 500px) {
    		width: auto;
    		height: auto;
  		}
  		
  		@media (max-width: 1000px) {
    		width: auto;
  		}
	}
`;

export {
	PhotoWrapperWrapper
}
