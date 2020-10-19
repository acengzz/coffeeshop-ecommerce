import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export const Footer = () => {
	return (
		<footer>
			<Container>
				<Row>
					<Col className="text-center py-3">
						Copyright &copy; Coffee of Spirit & An Imaginary Coffee Company for Project
					</Col>
				</Row>
				<Row>
					<Col className="py-3 text-center">
						Ahmet Cengiz
					</Col>
				</Row>
			</Container>
		</footer>
	)
}
