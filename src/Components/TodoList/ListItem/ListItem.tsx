import React from 'react';
import classes from './ListItem.module.css'
import { ITodo } from '../../../interfaces';

interface IProps {
	item: ITodo;
	onClick: (id: number) => void;
}

const ListItem = ({ item, onClick }: IProps) => {
	return (
		<div
			className={classes.listItem}
			onClick={() => onClick(item.id)}
		>
			<div className={classes.finished} style={item.isCompleted ? {} : {backgroundColor: 'white'}}></div>
			<div style={item.isCompleted ? {color: 'gray', textDecoration: 'line-through'} : {}}>{item.text}</div>
		</div>
	);
}

export default ListItem;
