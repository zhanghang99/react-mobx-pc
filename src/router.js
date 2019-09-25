/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-17 09:12:48
 * @LastEditTime: 2019-09-25 16:44:24
 * @LastEditors: Please set LastEditors
 */
import React from 'react';
import {  Route } from 'react-router-dom';

import Apps from './component/Apps/index';
import Item from './component/Item/index';
import OtherItem from './component/OtherItem/index';

import './style.less';

export default class RouterList extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Route path="/"  component={Apps} />
                <Route path="/id" component={Item} />
                <Route path="/otherid" component={OtherItem} />
            </React.Fragment>
        )
    }
}
// @inject('appStore')
// @observer
// class AAA extends React.Component{
//     componentDidMount(){

//         console.log(this.props,666);
//         // setTimeout(()=>{
//         //     this.props.appStore.changeAaa(456)
//         //     console.log(this.props,777);
//         // },1000)
//     }
//     render(){
//         return (
//             <Router>
//                 <div className="root-wrap">

//                 {/* 菜单栏 */}
//                 <nav className="aside">
//                     <Menu
//                     mode="inline"
//                     >
//                     <Menu.Item key="/">
//                         <Link to="/">首页</Link>
//                     </Menu.Item>
//                     <Menu.Item key="/id">
//                         <Link to="/id">子页面</Link>
//                     </Menu.Item>
//                     <Menu.Item key="/otherid">
//                         <Link to="/otherid">另一个子页面</Link>
//                     </Menu.Item>
//                     </Menu>
//                 </nav>
//                 <div className="main-content">

//                     {/* 公共部分 */}
//                     {/* <MenuTop/>
//                     <MenuLeft /> */}
//                     {/* 路由 */}
//                     <Route path="/"  component={Apps} />
//                     <Route path="/id" component={Item} />
//                     <Route path="/otherid" component={OtherItem} />
//                     {/* <Route path="*" render={() => (<div>这里会显示各个路由的内容</div>)} /> */}
//                 </div>
//                 </div>
//             </Router>
//         )
//     }
// }
// export default AAA