import React, { createContext } from 'react'

const AuthContext = React.createContext({
	items: [],
	
	totalAmount: 0,
	addItem: (item) => {},
	removeItem: (id) => {},
})

export default AuthContext
