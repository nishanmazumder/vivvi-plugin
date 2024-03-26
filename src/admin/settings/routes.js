/**
 * SCSS
 */
import './style.scss';

/*WordPress*/
import {
    render,
    useContext,
} from '@wordpress/element';

import {
    Spinner,
} from "@wordpress/components";

/*Inbuilt Context Provider*/
import SettingsContextProvider, { SettingsContext } from '../../context/SettingsContext.js';

/*Router*/
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';

/*Inbuilt Components*/
import General from "./pages/general";
import Advanced from "./pages/advanced";
import Header from "./organisms/header";
import Footer from "./organisms/footer";

const SettingRouters = () => {
    const { useSettings } = useContext(SettingsContext);

    if (!Object.keys(useSettings).length) {
        return (
            <Spinner className="vivvi_page_spinner" />
        )
    }
    return (
        <div className='vivvi_wrapper'>
            <Header />
            <main className='vivvi_wrapper_main'>
                <Routes>
                    <Route exact path='/general' element={<General />} />
                    <Route exact path={'/advanced'} element={<Advanced />} />

                    <Route path="/" element={<Navigate replace to={'/general'} />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}

const InitSettings = () => {
    return (
        <HashRouter basename="/">
            <SettingsContextProvider>
                <SettingRouters />
            </SettingsContextProvider>
        </HashRouter>
    )
}

document.addEventListener('DOMContentLoaded', () => {
    if ('undefined' !== typeof document.getElementById(vivviBuild.root_id) && null !== document.getElementById(vivviBuild.root_id)) {
        render(<InitSettings />, document.getElementById(vivviBuild.root_id));
    }
});
