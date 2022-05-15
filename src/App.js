import { Fragment, useState } from 'react'
import './App.css'
import Cart from './components/Cart/Cart'
import Header from './components/layout/Header'
import Meals from './components/Meals/Meals'
import AuthContext from './store/AuthContext'
import CartProvider from './store/CartProvider'
function App() {
	const [cart, setCart] = useState(false)
	const toggle = () => {
		setCart(true)
	}

	const openChange = () => {
		setCart(false)
	}

	return (
		<CartProvider>
			<Header ontoggle={toggle} />
			{cart && <Cart openChange={openChange} />}
			<main>
				<Meals />
			</main>
		</CartProvider>
	)
}

export default App
