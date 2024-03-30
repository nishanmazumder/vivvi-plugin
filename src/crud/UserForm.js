// UserForm.js
import React, { useState } from 'react';
import { useUserContext } from './UserContext';

const UserForm = () => {
    const { dispatch } = useUserContext();
    const [name, setName] = useState('');

    const addUser = () => {
        // Dispatch ADD_USER_SUCCESS action
        dispatch({ type: 'ADD_USER_SUCCESS', payload: { id: Date.now(), name } });
        setName('');
    };

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={addUser}>Add User</button>
        </div>
    );
};

export default UserForm;
