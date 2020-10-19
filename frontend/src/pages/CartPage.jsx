import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Message } from '../components/Message';
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap';
import { addToCart, removeFromCart } from '../actions/cartActions'
const CartPage = ({ location, history, match: { params: { id } } }) => {
	const productId = id;
	const qty = location.search ? location.search.split("=")[1] * 1 : 1;

	const dispatch = useDispatch();

	const cart = useSelector(state => state.cart.cartItems)
	console.log(cart)

	useEffect(() => {
		if (productId) {
			dispatch(addToCart(id, qty))
		}
	}, [productId, qty, dispatch, id])

	const removeFromCartHandler = (_id) => {
		dispatch(removeFromCart(_id))
	}

	const checkoutHandler = () => {
		history.push('/login?redirect=shipping');
	}

	return (
		<Row>
			<Col md={8}>
				<h1>TEPSİNİZ</h1>
				{cart.length === 0 ? <Message variant="info">Sepet boş. Doldurmaya ne dersin? <Link to="/">Geri dön.</Link></Message> :
					<ListGroup variant="flush">
						{cart.map(item => {
							return (
								<ListGroup.Item key={item.product}>
									<Row>
										<Col md={2}>
											<Image fluid rounded src={item.image} alt={item.name} />
										</Col>
										<Col md={3}>
											<Link to={`/product/${productId}`}>{item.name}</Link>
										</Col>
										<Col md={2}>
											{item.price}
										</Col>
										<Col md={2}>
											<Form.Control as="select" value={item.qty} onChange={e => dispatch(addToCart(item.product, Number(e.target.value)))}>
												{[...Array(item.countInStock).keys()].map(x => <option value={x + 1} key={x + 1}>{x + 1}</option>)}
											</Form.Control>
										</Col>
										<Col md={2}>
											<Button type="button" variant="light" onClick={() => { removeFromCartHandler(item.product) }}><i className="fas fa-trash"></i></Button>
										</Col>
									</Row>
								</ListGroup.Item>
							)
						})}
					</ListGroup>
				}
			</Col>
			<Col md={4}>
				<Card>
					<ListGroup variant="flush">
						<ListGroup.Item>
							<h2>Toplam: ({cart.reduce((acc, item) => acc + item.qty, 0)})</h2>
							{cart.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}₺
						</ListGroup.Item>
						<ListGroup.Item>
							<Button type="button" className="btn-block" disabled={cart.length === 0} onClick={checkoutHandler}>Sipariş Ver</Button>
						</ListGroup.Item>
					</ListGroup>
				</Card>
			</Col>
		</Row>
	)
}

export default CartPage
