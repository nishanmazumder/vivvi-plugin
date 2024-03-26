/*WordPress*/
import {
    useContext,
} from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import {
    BaseControl,
    ToggleControl,
    SelectControl
} from "@wordpress/components";

/*Inbuilt Context*/
import { SettingsContext } from '../../../context/SettingsContext.js';

const Advanced = () => {
    const { useSettings, useUpdateStateSettings } = useContext(SettingsContext);

    return (
        <>
            <div className="wp-react-plugin-boilerplate-field-wrap">
                <BaseControl
                    label={__('Setting 3 Toggle', 'vivvi_text_domain')}
                >
                    <ToggleControl
                        label={__('Check to enable', 'vivvi_text_domain')}
                        checked={(useSettings && useSettings['setting_3'])}
                        onChange={() => {
                            useUpdateStateSettings('setting_3', !(useSettings && useSettings['setting_3']))
                        }}
                    />
                </BaseControl>
            </div>

            <div className="wp-react-plugin-boilerplate-field-wrap">
                <BaseControl
                    label={__('Setting 4 Toggle', 'vivvi_text_domain')}
                >
                    <ToggleControl
                        label={__('Check to enable', 'vivvi_text_domain')}
                        checked={(useSettings && useSettings['setting_4'])}
                        onChange={() => {
                            useUpdateStateSettings('setting_4', !(useSettings && useSettings['setting_4']))
                        }}
                    />
                </BaseControl>
            </div>

            <div className="wp-react-plugin-boilerplate-field-wrap">
                <SelectControl
                    label={__('Setting 5 Select', 'vivvi_text_domain')}
                    value={useSettings && useSettings['setting_5']}
                    options={[
                        {
                            label: __('Option 1', 'vivvi_text_domain'),
                            value: 'option-1'
                        },
                        {
                            label: __('Option 2', 'vivvi_text_domain'),
                            value: 'option-2'
                        },
                    ]}
                    onChange={newVal =>
                        useUpdateStateSettings('setting_5', newVal)
                    }
                />
            </div>
        </>
    )
}

export default Advanced;
