import { Overlay } from './styles';

interface OrderModalProps {
	visible: boolean;
}

export function OrderModal(props: OrderModalProps) {
	if(!props.visible){
		return null;
	}

	return (
		<Overlay>
			<h1>Order modal</h1>
		</Overlay>
	);
}
