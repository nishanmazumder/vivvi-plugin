// index.js
import React from 'react';
import domReady from '@wordpress/dom-ready'
import { createRoot } from '@wordpress/element'
import App from './App';
// import UserForm from './UserForm';
import { UserProvider } from './UserContext';

const app = document.getElementById(vivviBuild.root_id);
const footer = document.getElementById('wpfooter');
const root = createRoot(app);


domReady(() => {
    if ('undefined' !== typeof app && null !== app) {
        root.render(
            <UserProvider>
                <App />
            </UserProvider>
        );
    }
    footer.remove();
})
