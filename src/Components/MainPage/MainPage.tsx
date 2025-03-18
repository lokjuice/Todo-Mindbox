import React from 'react';
import classes from './MainPage.module.css'
import { Header } from '../Header';
import { Todo } from '../Todo';

const MainPage = () => {
	return (
		<div className={classes.container}>
			<div className={classes.content}>
				<Header />
				<Todo />
			</div>
		</div>
	);
}

export default MainPage;
