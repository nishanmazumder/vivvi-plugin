// Reducer function
const CrudReducer = (state, action) => {

    let newState = Object.assign({}, state);

    switch (action.type) {
        case 'FETCH_SETTINGS':
            newState.fetchedSettings = action.payload.fetchedSettings;
            newState.stateSettings = action.payload.stateSettings;
            newState.isPending = false;
            newState.canSave = false;

            if (typeof action.payload.fetchedSettings.vivvi_options_fetch_settings_errors !== 'undefined') {
                newState.notice = __('An error occurred.', 'vivvi_text_domain');
                newState.hasError = true;
            }
            break;
        case 'UPDATE_SETTINGS_BEFORE':
            newState.isPending = action.payload.isPending;
            break;
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

export default CrudReducer;
