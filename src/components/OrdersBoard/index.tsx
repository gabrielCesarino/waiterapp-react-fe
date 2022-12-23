import { Order } from '../../types/Order';
import { Orders } from '../Orders';
import { Board, OrdersContainer } from './styles';

interface OrdersBoardProps {
	icon: string,
	title: string,
	orders: Order[];
}

export function OrdersBoard(props: OrdersBoardProps) {
	return <Board>
		<header>
			<span>{props.icon}</span>
			<strong>{props.title}</strong>
			<span>({props.orders.length})</span>
		</header>

		{props.orders.length > 0 &&
			<OrdersContainer>
				{props.orders.map((order) => (
					<button type='button' key={order._id}>
						<strong>Mesa {order.table}</strong>
						<span>{order.products.length} itens</span>
					</button>
				))}
			</OrdersContainer>
		}
	</Board>;
}
