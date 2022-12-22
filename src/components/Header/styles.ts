import styled from 'styled-components';

export const Container = styled.header`
	background: #D73035;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 12.35rem;
`;

export const Content = styled.div`
	width: 100%;
	max-width: 76rem;
	display: flex;
	align-items: center;
	justify-content: space-between;

	.page-details {
		h1 {
			color: #fff;
			line-height: 1.2;
			font-size: 2rem;
		}

		h2 {
			color: #fff;
			font-weight: 400;
			font-size: 1rem;
			line-height: 1.5;
			opacity: 0.9;
		}
	}
`;
