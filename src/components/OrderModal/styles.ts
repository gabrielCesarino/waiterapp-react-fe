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
			line-height: 0;
		}
	}

	.status-container {
			margin-top: 2rem;

			small {
				font-size: 0.875rem;
				opacity: 0.8;
			}

			div {
				margin-top: 0.5rem;
				display: flex;
				gap: 0.5rem;
				align-items: center;
			}
		}
`;

export const OrderDetails = styled.div`
	margin-top: 2rem;

	> strong {
		font-weight: 500;
		font-size: 0.875rem;
		opacity: 0.8;
	}

	.order-items{
		margin-top: 1rem;

		.item {
			display: flex;

			& + .item {
				margin-top: 1rem;
			}

			img {
				width: 3.5rem;
				object-fit: cover;
				border-radius: 6px;
			}

			.quantity {
				font-size: 0.875rem;
				color: #665;
				display: block;
				min-width: 1.25rem;
				margin-left: 0.75rem;
			}

			.product-details {
				margin-left: 0.25rem;

				strong {
					display: block;
					margin-bottom: 0.25rem;
				}

				span {
					font-size: 0.875rem;
					color: #665;
				}
			}
		}
	}

	.total {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 1.5rem;

		span {
			font-weight: 500;
			font-size: 0.875rem;
			opacity: 0.8;
		}
	}
`;

export const Actions = styled.footer`
	display: flex;
	flex-direction: column;
	margin-top: 2rem;

	button.primary {
		background-color: #333333;
		border-radius: 48px;
		color: #fff;
		border: 0;
		padding: 0.75rem 2rem;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
	}

	button.secondary {
		background: transparent;
		border: 0;
		padding: 0.875rem 2rem;
		color: #d73035;
		font-weight: bold;
		margin-top: 0.75rem;
	}
`;
