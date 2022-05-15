import classes from './HeaderCartButton.module.css'
import React, { useContext } from 'react'
import CartIcon from '../Cart/CartIcon'
import AuthContext from '../../store/AuthContext'

const HeaderCartButton = (props) => {
	const cart = useContext(AuthContext)
const numberOfCartItems = cart.items.reduce((currNumber,item)=>{
	return currNumber + item.amount
}, 0)
	return (
		<button onClick={props.ontoggle} className={classes.button}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={classes.badge}>{numberOfCartItems }</span>
		</button>
	)
}

export default HeaderCartButton
