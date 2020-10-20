import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { Message } from '../components/Message'
import { Loading } from '../components/Loading'
import { register } from '../actions/userActions'
import { FormContainer } from '../components/FormContainer'

const RegisterPage = ({ location, history }) => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [message, setMessage] = useState(null)

	const redirect = location.search ? location.search.split('=')[1] : '/'

	const dispatch = useDispatch();

	const userRegister = useSelector(state => state.userRegister);
	const { loading, error, userInfo } = userRegister;

	useEffect(() => {
		if (userInfo) {
			history.push(redirect);
		}
	}, [history, userInfo, redirect])

	const submitHandler = (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			setMessage("Şifreler uyuşmuyor, tekrar dene.")
		} else {
			dispatch(register(name, email, password))
		}
	}

	return (
		<FormContainer>
			<h1>Kayıt Ol</h1>
			{error && <Message variant="danger">{error}</Message>}
			{message && <Message variant="alert">{message}</Message>}
			{loading ? <Loading /> :
				<Form onSubmit={submitHandler}>
					<Form.Group>
						<Form.Label>Adınız:</Form.Label>
						<Form.Control
							type="text"
							placeholder="Adınızı Girin:"
							value={name}
							onChange={e => setName(e.target.value)}
						/>
					</Form.Group>

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

					<Form.Group>
						<Form.Label>Tekrar Şifreniz:</Form.Label>
						<Form.Control
							type="password"
							placeholder="Şifrenizi Tekrar Girin:"
							value={confirmPassword}
							onChange={e => setConfirmPassword(e.target.value)}
						/>
					</Form.Group>

					<Button type="submit" variant="primary">
						Kayıt Ol
				</Button>
				</Form>
			}

			<Row className="py-3">
				<Col>
					Zaten üye misin? <Link to={redirect ? `/login?redirect=${redirect}` : `/login`}>Giriş Yap</Link>
				</Col>
			</Row>
		</FormContainer>
	)
}

export default RegisterPage
