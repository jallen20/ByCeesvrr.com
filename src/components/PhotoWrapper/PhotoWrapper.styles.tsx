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
		height: 928px;
		object-fit: cover;
		
		@media (max-width: 500px) {
    		width: auto;
    		height: auto;
  		}
  		
  		@media (max-width: 1000px) {
    		width: auto;
    		height: 1000px;
  		}
	}
`;

export {
	PhotoWrapperWrapper
}
