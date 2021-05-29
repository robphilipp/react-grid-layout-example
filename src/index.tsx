import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { WindowDimensionsProvider } from 'react-resizeble-grid-layout/dist/src/WindowDimensionsProvider';

ReactDOM.render(
    <React.StrictMode>
        <WindowDimensionsProvider>
            <App />
        </WindowDimensionsProvider>
    </React.StrictMode>,
    document.getElementById('root')
)
