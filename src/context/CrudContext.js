// UserContext.js
import { createContext, useContext, useReducer } from '@wordpress/element';
import { isEqual } from "lodash";
import CrudReducer from '../reducer/crud-reducer';
import { fetchSettings, updateSettings } from '../api/settings';


export const CrudContext = createContext();

// Initial state for users
const initialState = {
    users: [],
};

const CrudContextProvider = (props) => {

    const initialState = {
        fetchedSettings: {},
        stateSettings: {},
        isPending: true,
        notice: '',
        hasError: '',
        canSave: false,
    };

    const [state, dispatch] = useReducer(CrudReducer, initialState);


    const useDispatch = (args) => {
        /*Reducer state on args*/
        dispatch(args);
    };

    const useFetchSettings = async () => {
        const gotSettings = await fetchSettings();

        dispatch({
            type: 'FETCH_SETTINGS',
            payload: {
                fetchedSettings: gotSettings,
                stateSettings: gotSettings,
            },
        });
    };


    const useAddSettings = () => {
        // Dispatch ADD_USER_SUCCESS action
        dispatch({ type: 'ADD_USER_SUCCESS', payload: { id: Date.now(), name } });
        setName('');
    };

    useEffect(() => {
        useFetchSettings();
    }, []);

    let ContextValues = {
        useFetchSettings
    }


    return (
        <SettingsContext.Provider
            value={ContextValues}
        >
            {props.children}
        </SettingsContext.Provider>
    );
}

export default CrudContextProvider;
