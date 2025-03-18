import React, { memo, useCallback, useRef, useState } from 'react';
import classes from './Todo.module.css'
import { TextInput } from '../TextInput';
import { Filters, ITodo } from '../../interfaces';
import { TodoList } from '../TodoList';
import { Footer } from '../Footer';
import { filterTodos, switchTodoById } from '../../utils';

const Todo = () => {
	const uniqId = useRef<number>(0);
	const [todoItems, setTodoItems] = useState<ITodo[]>([]);
	const [filter, setFilter] = useState<Filters>(Filters.ALL);

	const switchTodo = useCallback((id: number) => {
		setTodoItems((prev) => switchTodoById(prev, id))
	}, [])

	const createTodo = useCallback((text: string) => {
		setTodoItems((prev) => ([...prev, {id: uniqId.current, text, isCompleted: false}]));
		uniqId.current += 1;
	}, [])

	const clearFinished = useCallback(() => {
		setTodoItems((prev) => prev.filter((item) => !item.isCompleted));
	}, [])

	const filteredTodos = filterTodos(todoItems, filter);

	return (
		<div className={classes.container}>
			<TextInput onEnter={createTodo}/>
			{todoItems.length > 0 && <TodoList items={filteredTodos} onClick={switchTodo} />}
			{todoItems.length > 0 && <Footer items={todoItems} filter={filter} onClick={setFilter} onDelete={clearFinished} />}
		</div>
	);
}

export default memo(Todo);
