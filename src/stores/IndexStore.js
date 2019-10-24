/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-16 17:08:25
 * @LastEditTime: 2019-09-25 16:39:36
 * @LastEditors: Please set LastEditors
 */
// app全局性状态管理
import { observable, action } from 'mobx';

export default class Store {
  @observable show = true;
  @observable list = [];
  @observable aaa = 123;

//   constructor({ list = [] }) {
//     this.list = list;
//   }
  @action changeAaa = (value) => {
    this.aaa = value;
  }
  @action changeShow = () => { this.show = !this.show; }
  @action getData = () => {
      this.list = [];
  }
}