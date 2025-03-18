import { Filters, ITodo } from "../interfaces";

export const switchTodoById = (items: ITodo[], id: number) => (
	items.map((item) => (item.id === id && { ...item, isCompleted: !item.isCompleted}) || item)
)

export const filterSelect = (filter: string, todo: ITodo) => (
	(filter === Filters.ALL) ||
	(filter === Filters.ACTIVE && !todo.isCompleted) ||
	(filter === Filters.FINISHED && todo.isCompleted)
)

export const filterTodos = (items: ITodo[], filter: string) => (
	items.filter((todo) => filterSelect(filter, todo))
)
