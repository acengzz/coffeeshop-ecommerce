import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../actions/userActions'
export const Header = () => {

	const dispatch = useDispatch();

	const userLogin = useSelector(state => state.userLogin);
	const { userInfo } = userLogin;

	const logoutHandler = () => {
		dispatch(logout())
	}
	return (
		<header>
			<Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
				<Container>
					<LinkContainer exact to="/">
						<Navbar.Brand>C . O . S .</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse className="ml-auto" id="basic-navbar-nav">
						<Nav className="ml-auto">
							<LinkContainer to="/cart">
								<Nav.Link>
									<i className="fas fa-shopping-cart"></i> Sepet
								</Nav.Link>
							</LinkContainer>
							{userInfo ?
								<NavDropdown title={userInfo.name} id="username">
									<LinkContainer to="/profile">
										<NavDropdown.Item>Profil</NavDropdown.Item>
									</LinkContainer>
									<NavDropdown.Item onClick={logoutHandler}>Çıkış Yap</NavDropdown.Item>
								</NavDropdown>
								: <LinkContainer to="/login">
									<Nav.Link>
										<i className="fas fa-user"></i> Giriş Yap
								</Nav.Link>
								</LinkContainer>}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	)
}
