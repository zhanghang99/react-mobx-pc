/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-25 16:38:52
 * @LastEditTime: 2019-09-25 16:43:20
 * @LastEditors: Please set LastEditors
 */
import Store from './Store';
import AppStore from './AppStore';

const store = {
    appStore: new AppStore({}),
    indexStore: new Store({}),
}
export default store;