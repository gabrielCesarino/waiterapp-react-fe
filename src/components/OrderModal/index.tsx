import { Overlay, ModalBody } from './styles';
import closeIcon from '../../assets/images/close-icon.svg';

interface OrderModalProps {
	visible: boolean;
}

export function OrderModal(props: OrderModalProps) {
	if(!props.visible){
		return null;
	}

	return (
		<Overlay>
			<ModalBody>
				<header>
					<strong>Mesa 2</strong>
					<button type='button'>
						<img src={closeIcon} alt="Ícone de fechamento" />
					</button>
				</header>
			</ModalBody>
		</Overlay>
	);
}
