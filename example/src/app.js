import 'react-rayr-icon/src/RayrIcon.scss';

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {RayrIcon} from 'react-rayr-icon';

function App() {
    return (
        <div>
            <h1>组件初始化</h1>
            <RayrIcon/>
        </div>
    )
}

const run = () => {
    ReactDOM.render(<App/>, document.getElementById('app'));
};

window.addEventListener('DOMContentLoaded', run);
