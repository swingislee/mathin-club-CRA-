import React from 'react';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import i18n from './locales/i18n';
import { I18nextProvider } from "react-i18next";

const root = document.getElementById('root');
const appRoot = createRoot(root);

appRoot.render(
    <React.StrictMode>
        <I18nextProvider i18n={i18n}>
            <App />
        </I18nextProvider>
    </React.StrictMode>
);
