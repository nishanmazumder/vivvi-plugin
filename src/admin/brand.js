import { useContext } from "@wordpress/element";

import { CrudContext } from "../context/CrudContext";

export default function Brand() {

    const { useSettings, useUpdateStateSettings } = useContext(CrudContext);


    return (
        <div>Brand</div>
    )
}
