/*WordPress*/
import { useContext } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import {
    Button,
    Spinner
} from "@wordpress/components";

/*Inbuilt Context*/
import { SettingsContext } from '../../../context/SettingsContext';

const SaveBtn = ({ name }) => {

    const { useUpdateSettings, useIsPending, useCanSave } = useContext(SettingsContext);

    return (
        <Button
            className="button"
            onClick={() =>
                useUpdateSettings()
            }
            isPrimary
            disabled={useIsPending || !useCanSave}
        >
            {useCanSave ? __('Save Settings', 'vivvi_text_domain') : __('Saved', 'vivvi_text_domain')}
            {useIsPending ? <Spinner /> : ''}
        </Button>
    );
}

export default SaveBtn;
