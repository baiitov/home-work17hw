import React, { useContext } from 'react'
import AuthContext from '../../store/AuthContext'
import Modalka from '../UI/Modal'
import classes from './Cart.module.css'
const Cart = (props) => {
	const ctxAuth = useContext(AuthContext)
	const cartItem = (
		
		<ul className={classes['cart-items']}>
			{ctxAuth.items.map((el) => {
				
			
				return (
					<div key={el.id} className={classes.cartItem}>
						<h3>{el.name}</h3>
						<h4>{el.amount}</h4>
						<h4>{el.price.toFixed(2)}</h4>
					</div>
				)
			})}
			
			{/* {[{ id: 'c1', name: 'samsa', amount: 3, price: 12.99 }].map(
				(item) => (
					<li key={item.id}>{item.name}</li>
				),
			)} */}
		</ul>
	)
	return (
		<Modalka openChange={props.openChange}>
			{cartItem}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>{ctxAuth.totalAmount.toFixed(2)}</span>
			</div>
			<div className={classes.actions}>
				<button
					onClick={props.openChange}
					className={classes['buttono--ilt']}
				>
					Close
				</button>

				<button className={classes.button}>Open</button>
			</div>
		</Modalka>
	)
}

export default Cart
