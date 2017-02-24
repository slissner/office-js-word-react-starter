import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.html';
import './index.scss';

(() => {
    // The initialize function must be run each time a new page is loaded
    Office.initialize = (reason) => {
        ReactDOM.render(
            <App />,
            document.getElementById('root') as HTMLElement
        );
    };
})();
