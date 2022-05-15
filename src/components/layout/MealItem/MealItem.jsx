import React from 'react'
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'
import AuthContext from '../../../store/AuthContext'
import { useContext } from 'react'
const MealItem = (props) => {
	const cartCtx = useContext(AuthContext)
	const addToCartHandler = (amount) => {
		cartCtx.addItem({
			id: props.id,
			name: props.name,
			amount: amount,
			price: props.price,
		})
	}
	const price = `$${props.price.toFixed(2)}`
	return (
		<li className={classes.meal}>
			<div>
				<h3>{props.name}</h3>
				<div className={classes.description}>{props.description}</div>
				<div className={classes.price}>{price}</div>
			</div>
			<div>
				<MealItemForm onAmountAdd={addToCartHandler} id={props.id} />
			</div>
		</li>
	)
}

export default MealItem