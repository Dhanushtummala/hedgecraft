import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { registerLicense } from '@syncfusion/ej2-base';
import { Provider } from 'react-redux';
import store from './redux/store'


registerLicense('ORg4AjUWIQA/Gnt2VVhiQlFadVlJVHxPYVF2R2FJd1R1dV9GY0wxOX1dQl9hSXZTfkRnW3hdcXdSRWA=');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'))




