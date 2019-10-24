/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-17 09:12:48
 * @LastEditTime: 2019-09-27 15:49:50
 * @LastEditors: Please set LastEditors
 */
import React from 'react';
import {  Route } from 'react-router-dom';

import Apps from './component/Apps/index';
import Item from './component/Item/index';
import OtherItem from './component/OtherItem/index';


export default class RouterList extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Route path="/" exact   component={Apps} />
                <Route path="/id" exact  component={Item} />
                <Route path="/otherid" exact  component={OtherItem} />
            </React.Fragment>
        )
    }
}