import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap'
import { Rating } from '../components/Rating'
import axios from 'axios'

const ProductDetails = ({ match: { params: { id } } }) => {

	const [singleProduct, setSingleProduct] = useState({});

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get(`/api/products/${id}`)
			setSingleProduct(data);
		}
		fetchData();
	}, [id, setSingleProduct])

	return (
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
								<Button disabled={singleProduct.countInStock > 0 ? false : true} className="btn-block" type="button">
									Sepete Ekle
								</Button>
							</ListGroup.Item>
						</ListGroup>
					</Card>
				</Col>
			</Row>
		</>
	)
}

export default ProductDetails
