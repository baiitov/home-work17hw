import React, { useReducer } from 'react'
import { act } from 'react-dom/test-utils'
import AuthContext from './AuthContext'

const defaultCartState = {
	items: [],
	totalAmount: 0,
}
const cartReducer = (prevState, action) => {
	if (action.type === 'ADD') {
		const currentIndex = prevState.items.findIndex(
			(el) => el.id == action.item.id,
		)
		console.log(currentIndex)
		if (currentIndex === -1) {
			let newItem = { ...action.item, amount: 1 }

			const newItems = prevState.items.concat(newItem)
			const newPrice = prevState.totalAmount + action.item.price * action.item.amount
			return {
				...prevState,
				items: newItems,
				totalAmount: newPrice,
			}
		} else {
			const newPrice = prevState.totalAmount + action.item.price * action.item.amount
			let newItems = prevState.items.map((el, idx) => {
				return idx === currentIndex
					? {
							...el,
							amount: el.amount + action.item.amount,
							price: el.price + action.item.price  * action.item.amount,
					  }
					: el
			})
			return {
				...prevState,
				items: newItems,
				totalAmount: newPrice,
			}
		}
	}
	return defaultCartState
}
const CartProvider = (props) => {
	const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState)
	const addItemToCartHandler = (item) => {
		dispatchCart({ type: 'ADD', item })
	}
	const removeItemFromCartHandler = () => {}
	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCartHandler,
		reomveItem: removeItemFromCartHandler,
	}
	return (
		<AuthContext.Provider value={cartContext}>
			{props.children}
		</AuthContext.Provider>
	)
}

export default CartProvider
