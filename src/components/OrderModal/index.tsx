import { Overlay, ModalBody, OrderDetails, Actions } from './styles';
import closeIcon from '../../assets/images/close-icon.svg';
import { Order } from '../../types/Order';

interface OrderModalProps {
	visible: boolean,
	order: Order | null,
	onClose: () => void,
}

export function OrderModal(props: OrderModalProps) {
	if(!props.visible || !props.order){
		return null;
	}

	const price = new Intl.NumberFormat('pt-br', {
		style: 'currency',
		currency: 'BRL'
	});

	const total = props.order.products.reduce((total, { product, quantity }) => {
		return total + (product.price * quantity);
	}, 0);

	return (
		<Overlay>
			<ModalBody>
				<header>
					<strong>Mesa {props.order.table}</strong>
					<button type='button' onClick={props.onClose}>
						<img src={closeIcon} alt="Ícone de fechamento" />
					</button>
				</header>

				<div className="status-container">
					<small>Status do Pedido</small>
					<div>
						<span>
							{props.order.status === 'WAITING' && '🕑'}
							{props.order.status === 'IN_PRODUCTION' && '👨‍🍳'}
							{props.order.status === 'DONE' && '✔️'}
						</span>
						<strong>
							{props.order.status === 'WAITING' && 'Fila de espera'}
							{props.order.status === 'IN_PRODUCTION' && 'Em preparação'}
							{props.order.status === 'DONE' && 'Pronto!'}
						</strong>
					</div>
				</div>

				<OrderDetails>
					<strong>Itens</strong>

					<div className="order-items">
						{props.order.products.map(({_id, product, quantity}) => (
							<div className="item" key={_id}>
								<img
									src={`http://localhost:3002/uploads/${product.imagePath}`}
									alt={product.name}
								/>

								<span className="quantity">{quantity}x</span>
								<div className="product-details">
									<strong>{product.name}</strong>
									<span>{price.format(product.price)}</span>
								</div>
							</div>
						))}
					</div>

					<div className="total">
						<span>Total</span>
						<strong>{price.format(total)}</strong>
					</div>
				</OrderDetails>

				<Actions>
					<button type='button' className="primary">
						<span>👨‍🍳</span>
						<strong>Iniciar produção</strong>
					</button>
					<button type='button' className="secondary">
						Cancelar pedido
					</button>
				</Actions>
			</ModalBody>
		</Overlay>
	);
}
