import "../App.css";
import { Card, Col, Button } from "react-bootstrap";

function BakeryItem(props) {
	const { item, cart, setCart, cartTotal, setCartTotal } = props;

	const onAddToCart = () => {
		const newCart = {
			...cart,
			[item.id]:
				item.id in cart
					? { ...item, count: cart[item.id]["count"] + 1 }
					: { ...item, count: 1 },
		};
		setCart(newCart);
		setCartTotal(Math.round((cartTotal + item.price) * 100) / 100);
	};

	return (
		<Col>
			<Card>
				<Card.Img src={item.image} />
				<Card.Body className="d-flex flex-column gap-2">
					<Card.Title>{item.name}</Card.Title>
					<Card.Text>{item.description}</Card.Text>
					<div className="d-flex justify-content-between align-items-center mt-auto">
						<span>{`$${item.price}`}</span>
						<Button
							variant="light"
							className="btn-md ms-auto"
							onClick={onAddToCart}
						>
							Add to Cart
						</Button>
					</div>
				</Card.Body>
			</Card>
		</Col>
	);
}

export default BakeryItem;
