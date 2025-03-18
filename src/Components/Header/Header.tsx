import React from 'react';
import classes from './Header.module.css'

const Header = () => {
	return (
		<div className={classes.container}>
			<h1 className={classes.firstHeader}>тудушка</h1>
			<h2 className={classes.secondHeader}>для майндбокса</h2>
		</div>
	);
}

export default Header;
