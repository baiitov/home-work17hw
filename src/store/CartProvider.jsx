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

		if (currentIndex === -1) {
			let newItem = { ...action.item, amount: 1 }

			const newItems = prevState.items.concat(newItem)
			const newPrice = prevState.totalAmount + action.item.price
			return {
				...prevState,
				items: newItems,
				totalAmount: newPrice,
			}
		} else {
			const newPrice = prevState.totalAmount + action.item.price
			let newItems = prevState.items.map((el, idx) => {
				return idx === currentIndex
					? {
							...el,
							amount: el.amount + 1,
							price: el.price + action.item.price,
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
