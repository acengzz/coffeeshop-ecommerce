import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card, Form } from 'react-bootstrap'
import { Rating } from '../components/Rating'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleProduct } from '../actions/productActions'
import { Loading } from '../components/Loading'
import { Message } from '../components/Message'
import { useHistory } from 'react-router-dom'

const ProductDetails = ({ match: { params: { id } } }) => {

	const [qty, setQty] = useState(1);

	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(() => {
		dispatch(getSingleProduct(id))
	}, [dispatch, id])

	const addToCartHandler = () => {
		history.push(`/cart/${id}?qty=${qty}`)
	}

	const singleProduct = useSelector(state => state.singleProduct.product)
	const error = useSelector(state => state.singleProduct.error)
	const loading = useSelector(state => state.singleProduct.loading)

	return (
		<>
			{
				loading ? <Loading /> : error ? <Message variant="danger">{error}</Message> :
					<>
						<Link to="/" className="btn btn-dark my-3 ">
							Go Back
						</Link>
						<Row>
							<Col md={6} xs={12}>
								<Image fluid src={singleProduct.image} alt={singleProduct.name} />
							</Col>
							<Col md={3}>
								<ListGroup variant="flush">
									<ListGroup.Item>
										<h2>{singleProduct.name}</h2>
									</ListGroup.Item>
									<ListGroup.Item>
										<Rating value={singleProduct.rating} text={`${singleProduct.numReviews} Müşteriden`} />
									</ListGroup.Item>
									<ListGroup.Item>
										{singleProduct.description}
									</ListGroup.Item>
								</ListGroup>
							</Col>
							<Col md={3}>
								<Card>
									<ListGroup variant="flush">
										<ListGroup.Item>
											<Row>
												<Col>
													Fiyat:
												</Col>
												<Col>
													<strong>{singleProduct.price} ₺</strong>
												</Col>
											</Row>
										</ListGroup.Item>
										{singleProduct.countInStock > 0 &&
											<ListGroup.Item>
												<Row>
													<Col>Kaç Adet İstersiniz?</Col>
													<Col >
														<Form.Control as="select" value={qty} onChange={e => setQty(e.target.value)}>
															{[...Array(singleProduct.countInStock).keys()].map(x => <option value={x + 1} key={x + 1}>{x + 1}</option>)}
														</Form.Control>
													</Col>
												</Row>
											</ListGroup.Item>
										}
										<ListGroup.Item>
											<Row>
												<Col>
													Durum:
												</Col>
												<Col>
													<strong>{singleProduct.countInStock > 0 ? '15 dakikada kapıda.Hazır olarak mevcut.' : 'Hazır olarak mevcut değil.'}</strong>
												</Col>
											</Row>
										</ListGroup.Item>
										<ListGroup.Item>
											<Button onClick={addToCartHandler} disabled={singleProduct.countInStock > 0 ? false : true} className="btn-block" type="button">
												Sepete Ekle
											</Button>
										</ListGroup.Item>
									</ListGroup>
								</Card>
							</Col>
						</Row>
					</>
			}
		</>
	)
}

export default ProductDetails
