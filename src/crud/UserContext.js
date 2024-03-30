// UserContext.js
import React, { createContext, useContext, useReducer } from 'react';

// Initial state for users
const initialState = {
    users: [],
};

// Reducer function
const userReducer = (state, action) => {
    switch (action.type) {
        case 'GET_USERS_SUCCESS':
            return { ...state, users: action.payload };

        case 'ADD_USER_SUCCESS':
            return { ...state, users: [...state.users, action.payload] };

        case 'EDIT_USER_SUCCESS':
            const updatedUsers = state.users.map(user =>
                user.id === action.payload.id ? action.payload : user
            );
            return { ...state, users: updatedUsers };

        case 'DELETE_USER_SUCCESS':
            const filteredUsers = state.users.filter(user => user.id !== action.payload.id);
            return { ...state, users: filteredUsers };

        default:
            return state;
    }
};

// Create the context
const UserContext = createContext();

// Custom hook to access the context
export const useUserContext = () => useContext(UserContext);

// Context provider component
export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, initialState);

    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {children}
        </UserContext.Provider>
    );
};
