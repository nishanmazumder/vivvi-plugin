// UserContext.js
import { createContext, useEffect, useReducer } from '@wordpress/element';
import { isEqual } from "lodash";
import { fetchSettings, updateSettings } from '../api/settings';
import CrudReducer from '../reducer/crud-reducer';

export const CrudContext = createContext();

const CrudContextProvider = (props) => {

    const initialState = {
        fetchedSettings: {},
        stateSettings: {},
        isPending: true,
        notice: '',
        hasError: '',
        canSave: false,
    }


    const [state, dispatch] = useReducer(CrudReducer, initialState);

    // const useDispatch = (args) => {
    //     /*Reducer state on args*/
    //     dispatch(args);
    // };

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


    // console.log(state);

    // const useAddSettings = () => {
    //     // Dispatch ADD_USER_SUCCESS action
    //     dispatch({
    //         type: 'ADD_USER_SUCCESS',
    //         payload: { id: Date.now(), name }
    //     });
    //     setName('');
    // };

    useEffect(() => {
        useFetchSettings();
    }, []);



    let ContextValues = {
        // useDispatch,
        useFetchSettings,
        useSettings: state.stateSettings,
        // useIsPending: state.isPending,
        // useCanSave: state.canSave,
    }

    return (
        <CrudContext.Provider value={ContextValues}>
            {props.children}
        </CrudContext.Provider>
    );
}

export default CrudContextProvider;
