import {FETCH_USERS, FETCH_USERS_ERROR, FETCH_USERS_SUCCESS, UserActionType} from "../../types/user";
import {Dispatch} from "redux";
import axios from "axios";

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserActionType>) => {
        try {
            dispatch({type: FETCH_USERS})
            const result = await axios.get('https://jsonplaceholder.typicode.com/users')
            dispatch({type: FETCH_USERS_SUCCESS, payload: result.data})
        } catch (e) {
            dispatch({
                type: FETCH_USERS_ERROR,
                payload: 'Произошла ошибка при загрузке пользователя'
            })
        }
    }
}
