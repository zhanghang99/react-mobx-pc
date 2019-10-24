/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-25 16:38:52
 * @LastEditTime: 2019-09-25 16:43:20
 * @LastEditors: Please set LastEditors
 */
import IndexStore from './IndexStore';
import AppStore from './AppStore';

const store = {
    appStore: new AppStore({}),
    indexStore: new IndexStore({}),
}
export default store;