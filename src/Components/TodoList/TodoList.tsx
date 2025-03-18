import React from 'react';
import classes from './TodoList.module.css'
import { ITodo } from '../../interfaces';
import { ListItem } from './ListItem';

interface IProps {
	items: ITodo[];
	onClick: (id: number) => void;
}

const TodoList = ({ items, onClick }: IProps) => {
	return (
		<div className={classes.list}>
			{items.map((todo) => <ListItem item={todo} onClick={onClick} key={`${todo.id}`} />)}
		</div>
	);
}

export default TodoList;
