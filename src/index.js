import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './components/store/store';
import App from '../src/components/app/App';
import './fonts.css';
import { HashRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>,
    rootElement
);
