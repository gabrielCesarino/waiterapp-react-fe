import styled from 'styled-components';

export const Overlay = styled.div`
	left: 0;
	top: 0;
	background: rgba(0, 0, 0, 0.8);
	backdrop-filter: blur(4.5px);
	width: 100%;
	height: 100%;
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ModalBody = styled.div`
	background: #fff;
	width: 30rem;
	border-radius: 8px;
	padding: 2rem;

	header {
		display: flex;
		align-items: center;
		justify-content: space-between;

		strong {
			font-size: 1.5rem;
		}

		button {
			border: 0;
			background: transparent;
			display: flex;
		}
	}
`;
