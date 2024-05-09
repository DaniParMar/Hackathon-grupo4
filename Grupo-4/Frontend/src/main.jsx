import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

import './index.css';
import {
    DataContextProviderComponent,
    UserContextProviderComponent,
} from './context/Context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <UserContextProviderComponent>
            <DataContextProviderComponent>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </DataContextProviderComponent>
        </UserContextProviderComponent>
    </React.StrictMode>
);
