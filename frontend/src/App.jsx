import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { motion } from 'framer-motion'

import { Container } from 'react-bootstrap'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

import Homepage from './pages/Homepage'
import ProductDetails from './pages/ProductDetails'
import CartPage from './pages/CartPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Profile from './pages/Profile'
const App = () => {
	return (
		<motion.div>
			<Router>
				<Header />
				<motion.main
					className="py-3">
					<Container>
						<Route exact path="/" component={Homepage} />
						<Route exact path="/product/:id" component={ProductDetails} />
						<Route exact path="/cart/:id?" component={CartPage} />
						<Route exact path="/login" component={LoginPage} />
						<Route exact path="/register" component={RegisterPage} />
						<Route exact path="/profile" component={Profile} />
					</Container>
				</motion.main>
				<Footer />
			</Router>
		</motion.div>
	)
}

export default App
