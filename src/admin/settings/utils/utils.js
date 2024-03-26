
export const storeSettings = async (settings, action, props) => {
    let body, headers, error;

    try {
        const response = await fetch(vivviSettings.ajaxUrl, {
            method: "post",
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
                'settings': JSON.stringify(settings),
                'action': action ?? vivviSettings?.actions.settings,
                '_wpnonce': vivviSettings.nonce,
                ...props
            }).toString(),
        })
        const headerData = await response.headers;
        body = await response.json();


        console.log(body);


        headers = []
        for (const [key, value] of headerData) {
            headers[key] = value
        }

    } catch (err) {
        error = await err?.json ? err.json() : 'Something went wrong';
    }

    return [body, headers, error];
}
