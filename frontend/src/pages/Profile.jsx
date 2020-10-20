import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { Message } from '../components/Message'
import { Loading } from '../components/Loading'
import { getUserDetails, updateUserProfile } from '../actions/userActions'

const Profile = ({ location, history }) => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [message, setMessage] = useState(null)

	const redirect = location.search ? location.search.split('=')[1] : '/'

	const dispatch = useDispatch();

	const userDetails = useSelector(state => state.userDetails);
	const { loading, error, user } = userDetails;

	const userLogin = useSelector(state => state.userLogin);
	const { userInfo } = userLogin;

	const userUpdate = useSelector(state => state.userUpdate);
	const { success } = userUpdate;

	useEffect(() => {
		if (!userInfo) {
			history.push('/login');
		} else {
			if (!user.name) {
				dispatch(getUserDetails('profile'))
			} else {
				setName(user.name)
				setEmail(user.email)
			}
		}
	}, [history, userInfo, redirect, dispatch, user])

	const submitHandler = (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			setMessage("Şifreler uyuşmuyor, tekrar dene.")
		} else {
			dispatch(updateUserProfile({ id: user._id, name, email, password }))
			setTimeout(() => {
				window.location.reload();
			}, 1500)
		}
	}

	return (
		<Row>
			<Col md={3}>
				<h2>Profil</h2>
				{error && <Message variant="danger">{error}</Message>}
				{success && <Message variant="success">Profil Güncellendi.</Message>}
				{message && <Message variant="alert">{message}</Message>}
				{loading ? <Loading /> :
					<Form onSubmit={submitHandler}>
						<Form.Group>
							<Form.Label>Adınız:</Form.Label>
							<Form.Control
								type="text"
								placeholder="Yeni Adınızı Girin:"
								value={name}
								onChange={e => setName(e.target.value)}
							/>
						</Form.Group>

						<Form.Group>
							<Form.Label>E-mail Adresiniz:</Form.Label>
							<Form.Control
								type="text"
								placeholder="Yeni E-mail'inizi Girin:"
								value={email}
								onChange={e => setEmail(e.target.value)}
							/>
						</Form.Group>

						<Form.Group>
							<Form.Label>Şifreniz:</Form.Label>
							<Form.Control
								type="password"
								placeholder="Yeni Şifrenizi Girin:"
								value={password}
								onChange={e => setPassword(e.target.value)}
							/>
						</Form.Group>

						<Form.Group>
							<Form.Label>Tekrar Şifreniz:</Form.Label>
							<Form.Control
								type="password"
								placeholder="Yeni Şifrenizi Tekrar Girin:"
								value={confirmPassword}
								onChange={e => setConfirmPassword(e.target.value)}
							/>
						</Form.Group>

						<Button type="submit" variant="primary">
							Profili Güncelle
						</Button>
					</Form>
				}
			</Col>
			<Col md={9}>
				<h2>My Orders</h2>
			</Col>
		</Row>
	)
}

export default Profile
