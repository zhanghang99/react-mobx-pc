/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-16 16:37:22
 * @LastEditTime: 2019-09-25 16:43:50
 * @LastEditors: Please set LastEditors
 */
import React from 'react';
import logo from './logo.svg';
import { inject, observer } from 'mobx-react';
import './style.less';

@inject('appStore','indexStore')
@observer
class Apps extends React.Component{
  render(){
    console.log(this.props,'Apps');
    return (
      <div className="Apps">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    );
  }
}
export default Apps;