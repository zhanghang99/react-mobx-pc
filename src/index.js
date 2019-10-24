/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-16 16:37:22
 * @LastEditTime: 2019-09-27 15:48:50
 * @LastEditors: Please set LastEditors
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'mobx';
import { Provider } from 'mobx-react';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './stores/index';

// 在严格模式下，不允许在 action 外更改任何状态。 可接收的值:
// "never" (默认): 可以在任意地方修改状态
// "observed": 在某处观察到的所有状态都需要通过动作进行更改。在正式应用中推荐此严格模式。
// "always": 状态始终需要通过动作来更新(实际上还包括创建)。
configure({ enforceActions: 'always' });

ReactDOM.render(<Provider {...store}><App/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
