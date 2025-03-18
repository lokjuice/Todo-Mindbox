import React from 'react';
import classes from './Footer.module.css'
import { Filters, ITodo } from '../../interfaces';

interface IProps {
	items: ITodo[];
	filter: Filters;
	onClick: (val: Filters) => void;
	onDelete: () => void;
}

const Footer = ({ items, filter, onClick, onDelete }: IProps) => {
	return (
		<div className={classes.footer}>
			<div>дел осталось: {items.filter((todo) => !todo.isCompleted).length}</div>
			<div className={classes.buttons}>
				<button onClick={() => onClick(Filters.ALL)} style={filter === Filters.ALL ? {color: 'black'} : {}}>все</button>
				<button onClick={() => onClick(Filters.ACTIVE)} style={filter === Filters.ACTIVE ? {color: 'black'} : {}}>активные</button>
				<button onClick={() => onClick(Filters.FINISHED)} style={filter === Filters.FINISHED ? {color: 'black'} : {}}>готовые</button>
			</div>
			<button onClick={onDelete}>очистить лишнее</button>
		</div>
	);
}

export default Footer;
