/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-17 09:12:48
 * @LastEditTime: 2019-09-24 14:21:47
 * @LastEditors: Please set LastEditors
 */
import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import { Menu } from 'antd';

import App from './component/Apps/index';
import Item from './component/Item/index';
import OtherItem from './component/OtherItem/index';

import './style.less';

export default class AAA extends React.Component{
    render(){
        return (
            <BrowserRouter>
                <div className="root-wrap">

                {/* 菜单栏 */}
                <nav className="aside">
                    <Menu
                    mode="inline"
                    >
                    <Menu.Item key="/">
                        <Link to="/">首页</Link>
                    </Menu.Item>
                    <Menu.Item key="/id">
                        <Link to="/id">子页面</Link>
                    </Menu.Item>
                    <Menu.Item key="/otherid">
                        <Link to="/otherid">另一个子页面</Link>
                    </Menu.Item>
                    </Menu>
                </nav>
                <div className="main-content">

                    {/* 公共部分 */}
                    <App />

                    {/* 路由 */}
                    <Switch>
                        <Route path="/"  component={App} />
                        <Route path="/id" component={Item} />
                        <Route path="/otherid" component={OtherItem} />
                        <Route path="*" render={() => (<div>这里会显示各个路由的内容</div>)} />
                    </Switch>
                </div>
                </div>
            </BrowserRouter>
        )
    }
}