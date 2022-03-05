import {Dispatch} from "redux";
import axios from "axios";
import {TodoActionTypes, TodoActionType} from "../../types/todo";


export const fetchTodos = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<TodoActionType>) => {
        try {
            dispatch({type: TodoActionTypes.FETCH_TODOS})
            const result = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: {_page: page, _limit: limit}
            })
            dispatch({type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: result.data})
        } catch (e) {
            dispatch({
                type: TodoActionTypes.FETCH_TODOS_ERROR,
                payload: 'Произошла ошибка при загрузке пользователя'
            })
        }
    }
}

export const setTodoPage = (page: number): TodoActionType => {
    console.log('page', page)
    return {
        type: TodoActionTypes.SET_TODO_PAGE, payload: page
    }
}
