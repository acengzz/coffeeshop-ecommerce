import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Product } from '../components/Product'
import axios from 'axios'

const Homepage = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get("/api/products");
			setProducts(data);
		}
		fetchData(setProducts);
	}, [])

	return (
		<>
			<Row>
				{products.map(product => {
					return (
						<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
							<Product product={product} />
						</Col>
					)
				})}
			</Row>
		</>
	)
}

export default Homepage
