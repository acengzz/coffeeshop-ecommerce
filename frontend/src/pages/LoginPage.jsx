import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { Message } from '../components/Message'
import { Loading } from '../components/Loading'
import { login } from '../actions/userActions'
import { FormContainer } from '../components/FormContainer'

const LoginPage = ({ location, history }) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const redirect = location.search ? location.search.split('=')[1] : '/'

	const dispatch = useDispatch();

	const userLogin = useSelector(state => state.userLogin);
	const { loading, error, userInfo } = userLogin;

	useEffect(() => {
		if (userInfo) {
			history.push(redirect);
		}
	}, [history, userInfo, redirect])

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(login(email, password))
	}
	return (
		<FormContainer>
			<h1>Giriş Yap</h1>
			{error && <Message variant="danger">{error}</Message>}
			{loading ? <Loading /> :
				<Form onSubmit={submitHandler}>
					<Form.Group>
						<Form.Label>E-mail Adresiniz:</Form.Label>
						<Form.Control
							type="text"
							placeholder="E-mail'inizi Girin:"
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
					</Form.Group>

					<Form.Group>
						<Form.Label>Şifreniz:</Form.Label>
						<Form.Control
							type="password"
							placeholder="Şifrenizi Girin:"
							value={password}
							onChange={e => setPassword(e.target.value)}
						/>
					</Form.Group>
					<Button type="submit" variant="primary">
						Giriş Yap
				</Button>
				</Form>
			}

			<Row className="py-3">
				<Col>
					Yeni misin? <Link to={redirect ? `/register?redirect=${redirect}` : `/register`}>Kayıt Ol</Link>
				</Col>
			</Row>
		</FormContainer>
	)
}

export default LoginPage
