import 'react-rayr-icon/src/RayrIcon.scss';

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {RayrIcon} from 'react-rayr-icon';

function App() {
    return (
        <div className="demo-icon">
            <h1>组件初始化</h1>
            <div>

            </div>
            <div className="item">
                <span>电池：battery</span><RayrIcon type="battery"/>
            </div>
            <div className="item">
                <span>cjh：cjh</span><RayrIcon type="cjh"/>
            </div>
            <div className="item">
                <span>车灯：lamp</span><RayrIcon type="lamp"/>
            </div>
        </div>
    )
}

const run = () => {
    ReactDOM.render(<App/>, document.getElementById('app'));
};

window.addEventListener('DOMContentLoaded', run);
