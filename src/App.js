import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem.js";
import { Row } from "react-bootstrap";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
	item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
	const [cart, setCart] = useState({});
	const [cartTotal, setCartTotal] = useState(0);

	return (
		<div className="App p-4">
			<h1 className="my-3">Trevor's Bakery</h1>

			<div className="d-flex justify-content-between gap-4 w-100">
				<Row xs={1} sm={2} md={3} xlg={4} className="w-75 g-3">
					{bakeryData.map((item, index) => (
						<BakeryItem
							key={index}
							item={item}
							cart={cart}
							setCart={setCart}
							cartTotal={cartTotal}
							setCartTotal={setCartTotal}
						/>
					))}
				</Row>

				<div className="d-flex flex-column w-25 px-4 gap-2">
					<h2>Cart</h2>
					<div
						className="flex-column gap-2 p-3 cart"
						style={
							Object.keys(cart).length > 0
								? { display: "flex" }
								: { display: "none" }
						}
					>
						{Object.entries(cart).map(([id, item]) => (
							<div
								key={id}
								className="w-100"
							>{`${item.count}x ${item.name} ($${item.price})`}</div>
						))}
					</div>
					{cartTotal ? (
						<span className="fw-bold fs-5 ms-1">
							{`Total: $${cartTotal}`}
						</span>
					) : (
						<span>Add something to your cart!</span>
					)}
				</div>
			</div>
		</div>
	);
}

export default App;
