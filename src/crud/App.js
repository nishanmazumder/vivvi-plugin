import { useContext } from "@wordpress/element";
import { Spinner } from "@wordpress/components";

import CrudContextProvider, { CrudContext } from "../context/CrudContext";

import Brand from "../admin/brand";

const App = () => {

    const { useSettings } = useContext(CrudContext);

    if (!Object.keys(useSettings).length) {
        return (
            <Spinner className="vivvi_page_spinner" />
        )
    }

    return (
        <CrudContextProvider>
            <Brand />
        </CrudContextProvider>
    )
}

export default App;
