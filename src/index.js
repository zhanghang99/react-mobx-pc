/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-16 16:37:22
 * @LastEditTime: 2019-09-25 16:42:47
 * @LastEditors: Please set LastEditors
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'mobx';
import { Provider } from 'mobx-react';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './stores/index';
// import AppStore from './stores/AppStore';
// import AAA from './router';
configure({ enforceActions: 'always' });
// const stores = {
//     appStore: new AppStore({})
// }
// console.log(stores,'111');
ReactDOM.render(<Provider {...store}><App/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
