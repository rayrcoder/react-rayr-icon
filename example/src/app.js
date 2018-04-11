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
                <span>车架：cjh</span><RayrIcon type="cjh" model="disabled"/>
            </div>
            <div className="item">
                <span>车灯：lamp</span><RayrIcon type="lamp"/>
            </div>
            <div className="item">
                <span>动力锁：lock</span><RayrIcon type="lock"/>
            </div>
            <div className="item">
                <span>车窗：window</span><RayrIcon type="window"/>
            </div>
            <div className="item">
                <span>充电：charge</span><RayrIcon type="charge"/>
            </div>
            <div className="item">
                <span>里程：course</span><RayrIcon type="course"/>
            </div>
            <div className="item">
                <span>天窗：scuttle</span><RayrIcon type="scuttle"/>
            </div>
            <div className="item">
                <span>续航：endurance</span><RayrIcon type="endurance"/>
            </div>
            <div className="item">
                <span>手刹：handbrake</span><RayrIcon type="handbrake"/>
            </div>
            <div className="item">
                <span>链接状态：link</span><RayrIcon type="link"/>
            </div>
            <div className="item">
                <span>信号：wifi</span><RayrIcon type="wifi"/>
            </div>
            <div className="item">
                <span>档位：gear</span><RayrIcon type="gear"/>
            </div>
            <div className="item">
                <span>工作模式：worktype</span><RayrIcon type="worktype"/>
            </div>
            <div className="item">
                <span>点火器：igniter</span><RayrIcon type="igniter"/>
            </div>
            <div className="item">
                <span>车门：cardoor</span><RayrIcon type="cardoor"/>
            </div>
            <div className="item">
                <span>钥匙：key</span><RayrIcon type="key"/>
            </div>
            <div className="item">
                <span>启动状态：fire</span><RayrIcon type="fire"/>
            </div>
            <div className="item">
                <span>电瓶电压：voltage</span><RayrIcon type="voltage"/>
            </div>
            <div className="item">
                <span>车辆电压：carvoltage</span><RayrIcon type="carvoltage"/>
            </div>
            <div className="item">
                <span>电流：electric</span><RayrIcon type="electric"/>
            </div>
            <div className="item">
                <span>座位：seat</span><RayrIcon type="seat"/>
            </div>
            <div className="item">
                <span>动力类型：powertype</span><RayrIcon type="powertype"/>
            </div>
            <div className="item">
                <span>发动机号：engineno</span><RayrIcon type="engineno"/>
            </div>
            <div className="item">
                <span>后备箱：trunk</span><RayrIcon type="trunk"/>
            </div>
            <div className="item">
                <span>注册：register</span><RayrIcon type="register"/>
            </div>
            <div className="item">
                <span>充电：charging</span><RayrIcon type="charging"/>
            </div>
            <div className="item">
                <span>维修：fix</span><RayrIcon type="fix"/>
            </div>
            <div className="item">
                <span>调度：dispatch</span><RayrIcon type="dispatch"/>
            </div>
            <div className="item">
                <span>清洁：clean</span><RayrIcon type="clean"/>
            </div>
            <div className="item">
                <span>救援：rescue</span><RayrIcon type="rescue"/>
            </div>
            <div className="item">
                <span>加油：oil</span><RayrIcon type="oil"/>
            </div>
            <div className="item">
                <span>模式：model</span><RayrIcon type="model"/>
            </div>
            <div className="item">
                <span>编号：number</span><RayrIcon type="number"/>
            </div>
        </div>
    )
}

const run = () => {
    ReactDOM.render(<App/>, document.getElementById('app'));
};

window.addEventListener('DOMContentLoaded', run);
