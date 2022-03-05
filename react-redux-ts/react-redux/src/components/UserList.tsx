import React from 'react';
import {useTypesSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

export const UserList: React.FC = () => {
    const {users, error, loading} = useTypesSelector(state => state.user)
    const {fetchUsers} = useActions()

    React.useEffect(() => {
        fetchUsers()
    }, [])

    if (loading) return (<h1>Идет загрузка...</h1>)
    if (error) return (<h1>Произошла ошибка</h1>)

    return (
        <div>
            {users.map(user => <div>{user.name}</div>)}
        </div>
    );
};


