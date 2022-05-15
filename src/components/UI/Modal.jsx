import React, { Fragment } from 'react'
import { createPortal } from 'react-dom'
import classes from './Modal.module.css'
const Backdrop = (props) => {
	return <div className={classes.backdrop} onClick={props.openChange}></div>
}
const Modal = (props) => {
	return (
		<div className={classes.modal}>
			<div className={classes.content}>{props.children}</div>
		</div>
	)
}
const portalElement = document.getElementById('overlays')
const Modalka = (props) => {
	return (
		<Fragment>
			{createPortal(<Backdrop openChange={props.openChange} />, portalElement)}
			{createPortal(<Modal>{props.children}</Modal>, portalElement)}
		</Fragment>
	)
}

export default Modalka
