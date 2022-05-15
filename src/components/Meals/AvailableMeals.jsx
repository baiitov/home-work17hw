import React from 'react'
import classes from './AvailbaleMeals.module.css'
import Card from '../UI/Card'
import MealItem from '../layout/MealItem/MealItem'
const DUMMY_MEALS = [
	{
		id: 'm1',
		name: 'Sushi',
		description: 'Finest fish and veggies',
		price: 22.99,
	},
	{
		id: 'm2',
		name: 'Schnitzel',
		description: 'A german specialty!',
		price: 16.5,
	},
	{
		id: 'm3',
		name: 'Barbecue Burger',
		description: 'American, raw, meaty',
		price: 12.99,
	},
	{
		id: 'm4',
		name: 'Green Bowl',
		description: 'Healthy...and green...',
		price: 18.99111,
	},
]

const AvailableMeals = () => {
	const mealsList = DUMMY_MEALS.map((el) =>  <MealItem key={el.id} description={el.description} id={el.id} price={el.price} name={el.name}/>)
	return (
		<section className={classes.meals}>
			<Card>
				<ul>{mealsList}</ul>
			</Card>
		</section>
	)
}

export default AvailableMeals
