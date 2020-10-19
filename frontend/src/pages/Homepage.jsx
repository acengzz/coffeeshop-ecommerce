import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row } from 'react-bootstrap'
import { Product } from '../components/Product'
import { listProducts } from '../actions/productActions'
import { Loading } from '../components/Loading'
import { Message } from '../components/Message'

const Homepage = () => {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(listProducts());
	}, [dispatch])

	const products = useSelector(state => state.productList.products)
	const loading = useSelector(state => state.productList.loading);
	const error = useSelector(state => state.productList.error)

	return (
		<>
			{
				loading ? <Loading /> : error ? <Message variant="danger">{error}</Message> :
					<Row>
						{products.map(product => {
							return (
								<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
									<Product product={product} />
								</Col>
							)
						})}
					</Row>
			}
		</>
	)
}

export default Homepage
