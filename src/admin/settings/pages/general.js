/*WordPress*/
import {
    useContext,
} from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import {
    TextControl
} from "@wordpress/components";

/*Inbuilt Context*/
import { SettingsContext } from '../../../context/SettingsContext.js';

const General = () => {
    const { useSettings, useUpdateStateSettings } = useContext(SettingsContext);

    return (
        <>
            <div className="wp-react-plugin-boilerplate-field-wrap">
                <TextControl
                    label={__('Setting 1', 'vivvi_text_domain')}
                    placeholder={__('Enter Text', 'vivvi_text_domain')}
                    value={useSettings && useSettings['setting_1']}
                    onChange={newVal =>
                        useUpdateStateSettings('setting_1', newVal)
                    }
                />
            </div>

            <div className="wp-react-plugin-boilerplate-field-wrap">
                <TextControl
                    label={__('Setting 2', 'vivvi_text_domain')}
                    placeholder={__('Enter Another Text', 'vivvi_text_domain')}
                    value={useSettings && useSettings['setting_2']}
                    onChange={newVal =>
                        useUpdateStateSettings('setting_2', newVal)
                    }
                />
            </div>
        </>
    )
}

export default General;
