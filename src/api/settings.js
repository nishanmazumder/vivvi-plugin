/*WordPress*/
import apiFetch from "@wordpress/api-fetch";
import { addQueryArgs } from "@wordpress/url";

export const fetchSettings = async () => {
    let path = 'wp/v2/settings',
        options = {};

    try {
        options = await apiFetch({
            path: path,
            method: 'GET'
        });
    } catch (error) {
        console.log('fetchSettings Errors:', error);
        return {
            vivvi_options_fetch_settings_errors: true
        }
    }

    if (options.vivvi_options) {
        return options.vivvi_options;
    }
    return options;
};

export const updateSettings = async (data) => {
    let path = 'wp/v2/settings',
        options = {};

    let queryArgs = {
        vivvi_options: data
    }

    path = addQueryArgs(path, queryArgs);

    try {
        options = await apiFetch({
            path: path,
            method: 'POST'
        });
    } catch (error) {
        console.log('updateSettings Errors:', error);
        return {
            vivvi_options_update_settings_errors: true
        }
    }
    if (options.vivvi_options) {
        return options.vivvi_options;
    }
    return options;
};
