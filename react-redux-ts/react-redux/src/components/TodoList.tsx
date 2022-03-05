import React from 'react';
import {useTypesSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

export const TodoList: React.FC = () => {
    const {page, error, loading, limit, todos} = useTypesSelector(state => state.todo)
    const {fetchTodos, setTodoPage} = useActions()
    const pages = [1, 2, 3, 4, 5]

    React.useEffect(() => {
        fetchTodos(page, limit)
    }, [page])

    if (loading) return (<h1>Идет загрузка...</h1>)
    if (error) return (<h1>Произошла ошибка</h1>)
    const handleClick = (p: number) => {
        console.log('click', p)
        setTodoPage(p)
    }

    return (
        <div>
            {todos.map(todo => (<div key={todo.id}>{todo.id} - {todo.title}</div>))}
            {pages.map(p => (
                <div key={p}
                     style={{border: '1px solid gray'}}
                     onClick={() => handleClick(p)}
                >{p}</div>))}
        </div>
    );
};

