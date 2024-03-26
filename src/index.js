import domReady from '@wordpress/dom-ready'
import { createRoot, useEffect, useState } from '@wordpress/element'
import { storeSettings } from './admin/settings/utils/utils';
// import { useIsMount } from './admin/settings/hooks/useIsMount';
// import './style.scss';
// import { Container } from "./containers/containers";
import Brand from './dashboard/brand';

const app = document.getElementById(vivviBuild.root_id);
const footer = document.getElementById('wpfooter');
const root = createRoot(app);

const Container = () => {

    const settingsBrand = [
        {
            id: 'vivvi_brand_data',
            value: ''
        }
    ];

    const [settings, setSettings] = useState(settingsBrand);
    const [inputValue, setInputValue] = useState('');


    const handleSavedata = (item, value) => {

        const newSettings = settingsBrand.map(setting => {
            if (setting.id === item) {
                setting.value = value
            }
            return setting;
        })

        setSettings(newSettings);
    }

    const handleInputData = (e) => {
        setInputValue(e.target.value);
    }

    // const isMount = useIsMount();

    // console.log(inputValue);

    useEffect(() => {
        // if (isMount) return;
        storeSettings(settings);
    }, [settings])


    return (<>
        {/*
        <h1>{'' === inputValue ? 'TEST Input' : inputValue}</h1>

        <input type='text' value={inputValue} onChange={handleInputData} />

        <button onClick={() => handleSavedata('vivvi_brand_data', inputValue)}>Send</button> */}

        <Brand />

    </>)
}


domReady(() => {
    if ('undefined' !== typeof app && null !== app) {
        root.render(<Container />);
    }
    footer.remove();
})
