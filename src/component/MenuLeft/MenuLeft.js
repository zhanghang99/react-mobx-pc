/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-16 16:37:22
 * @LastEditTime: 2019-09-25 14:04:09
 * @LastEditors: Please set LastEditors
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

export default class MenuLeft extends React.Component{
  state = {
    collapsed: false,
  };
  render(){
    console.log(this.props);
    return (
      <div className="menu-left">
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1">
          <Link to="/">
            <Icon type="pie-chart" />
            <span>Option 1</span>
          </Link>
          </Menu.Item>
          <Menu.Item key="2">
          <Link to="/id">
            <Icon type="desktop" />
            <span>Option 2</span>
          </Link>
          </Menu.Item>
          <Menu.Item key="3">
          <Link to="/otherid">
            <Icon type="inbox" />
            <span>Option 3</span>
          </Link>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span>Navigation One</span>
              </span>
            }
          >
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="appstore" />
                <span>Navigation Two</span>
              </span>
            }
          >
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}
