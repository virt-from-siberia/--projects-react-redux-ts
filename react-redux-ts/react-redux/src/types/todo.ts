export interface ITodoState {
    todos: any[],
    loading: boolean,
    error: null | string,
    page: number,
    limit: number
}

export enum TodoActionTypes {
    FETCH_TODOS = 'FETCH_TODOS',
    FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
    FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
    SET_TODO_PAGE = 'SET_TODO_PAGE',
}

export interface IFetchTodoAction {
    type: TodoActionTypes.FETCH_TODOS
}

export interface IFetchTodoSuccessAction {
    type: TodoActionTypes.FETCH_TODOS_SUCCESS,
    payload: any[]
}

export interface IFetchTodoErrorAction {
    type: TodoActionTypes.FETCH_TODOS_ERROR,
    payload: string
}

export interface ISetTodoPage {
    type: TodoActionTypes.SET_TODO_PAGE,
    payload: number
}

export type TodoActionType =
    IFetchTodoAction
    | IFetchTodoSuccessAction
    | IFetchTodoErrorAction
    | ISetTodoPage
