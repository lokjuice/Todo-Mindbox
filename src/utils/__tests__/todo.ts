import { Filters } from "../../interfaces";
import { filterTodos, switchTodoById } from "../todo"

const ORIGIN_TODOS_1 = [
	{id: 1, text: 'test_1', isCompleted: false},
	{id: 2, text: 'test_2', isCompleted: true},
	{id: 3, text: 'test_3', isCompleted: false},
];

const EXPECT_TODOS_1 = [
	{id: 1, text: 'test_1', isCompleted: true},
	{id: 2, text: 'test_2', isCompleted: true},
	{id: 3, text: 'test_3', isCompleted: false},
]

const FILTERED_ALL_TODOS = [
	{id: 1, text: 'test_1', isCompleted: false},
	{id: 2, text: 'test_2', isCompleted: true},
	{id: 3, text: 'test_3', isCompleted: false},
]
const FILTERED_ACTIVE_TODOS = [
	{id: 1, text: 'test_1', isCompleted: false},
	{id: 3, text: 'test_3', isCompleted: false},
]
const FILTERED_FINISHED_TODOS = [
	{id: 2, text: 'test_2', isCompleted: true},
]

describe('switchTodoById', () => {
  it('Инвертирует значение isCompleted', () => {
    const switched = switchTodoById(ORIGIN_TODOS_1, 1)
    expect(switched).toEqual(EXPECT_TODOS_1);
  })
})

describe('filterTodosByAll', () => {
  it('Отфильтрует значения по "ALL"', () => {
		const todos = filterTodos(ORIGIN_TODOS_1, Filters.ALL);
    expect(todos).toEqual(FILTERED_ALL_TODOS);
  })
})

describe('filterTodosByActive', () => {
  it('Отфильтрует значения по "ACTIVE"', () => {
    const todos = filterTodos(ORIGIN_TODOS_1, Filters.ACTIVE);
    expect(todos).toEqual(FILTERED_ACTIVE_TODOS);
  })
})

describe('filterTodosByFinished', () => {
  it('Отфильтрует значения по "FINISHED"', () => {
    const todos = filterTodos(ORIGIN_TODOS_1, Filters.FINISHED);
    expect(todos).toEqual(FILTERED_FINISHED_TODOS);
  })
})
