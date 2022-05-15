import React, { Fragment } from 'react';
import classes from './Header.module.css'
import meals from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton';
const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>React Meals </h1>
                <HeaderCartButton ontoggle={props.ontoggle}/>

            </header>
            <div className={classes['main-image']}>
                <img src={meals} alt="food" />
            </div>
        </Fragment>
    );
};

export default Header;