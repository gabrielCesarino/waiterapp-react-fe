import { Container } from './styles';
import { OrdersBoard } from '../OrdersBoard';
import { Order } from '../../types/Order';

const orders: Order[] = [
	{
		'table': '123',
		'status': 'WAITING',
		'products': [
			{
				'product': {
					'name': 'Pizza',
					'description': 'a',
					'price': 40,
					'imagePath': '1671636796870-quatro-queijos.png'
				},
				'quantity': 2,
				'_id': '63a35b3cc39a5135057b94e4'
			}
		],
		'_id': '63a35b3cc39a5135057b94e3',
	}
];

export function Orders() {
	return(
		<Container>
			<OrdersBoard
				icon="🕑"
				title= "Fila de espera"
				orders={orders}
			/>
			<OrdersBoard
				icon="👨‍🍳"
				title= "Em preparação"
				orders={[]}
			/>
			<OrdersBoard
				icon="✔️"
				title= "Pronto!"
				orders={[]}
			/>
		</Container>
	);
}
