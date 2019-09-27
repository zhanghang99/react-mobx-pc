/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-17 09:12:48
 * @LastEditTime: 2019-09-27 15:42:59
 * @LastEditors: Please set LastEditors
 */
import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import 'antd/dist/antd.css';

import MenuLeft from './component/MenuLeft/MenuLeft';
import MenuTop from './component/MenuTop/MenuTop';
import RouterList from './router';

import './App.scss';

class App extends React.Component{
    render(){
        console.log(this.props,'props');
        return (
            <Router>
                <div className="root-wrap">
                <div className="main-content">
                    {/* 左侧导航 */}
                    <MenuLeft />
                    <div className="main">
                        {/* 顶部导航 */}
                        <MenuTop/>
                        <div className="router-list">
                            {/* 路由 */}
                            <RouterList/>
                        </div>
                    </div>
                </div>
                </div>
            </Router>
        )
    }
}
export default App;