import { useContext } from "@wordpress/element";
import { Spinner } from "@wordpress/components";

// import CrudContextProvider, { CrudContext } from "../context/CrudContext";

import { CrudContext } from "../context/CrudContext.js";

import Brand from "../admin/brand";




const App = () => {

    // const { useSettings } = useContext(CrudContext);
    const useSettings = useContext(CrudContext);

    console.log(useSettings);

    //     // if (!Object.keys(useSettings).length) {
    //     //     return (
    //     //         <Spinner className="vivvi_page_spinner" />
    //     //     )
    //     // }

    //     return (
    //         <CrudContextProvider>
    //             <Brand />
    //         </CrudContextProvider>
    //     )
}

export default App;
