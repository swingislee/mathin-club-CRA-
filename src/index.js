import React from 'react';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';

const root = document.getElementById('root');
const appRoot = createRoot(root);

appRoot.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
