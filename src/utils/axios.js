/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-16 17:13:17
 * @LastEditTime: 2019-09-16 17:48:08
 * @LastEditors: Please set LastEditors
 */
import axios from 'axios';
// import { message } from 'antd';

import { requestBaseUrl } from '../config';

axios.defaults.baseURL = requestBaseUrl;
axios.defaults.withCredentials = true;
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.interceptors.response.use((res) => {
  // if (res.data.errcode) {
  //   if (res.data.errcode !== 401) {
  //     message.error(res.data.message || '获取数据失败', 3);
  //   }
  //   console.error(res.data);
  // }
  // if (typeof res.data !== 'object') {
  //   console.error(res.data);
  //   return { errcode: 'response error' };
  // }
  return res.data;
}, (err) => {
  console.error(err);
  return { errcode: 'response error' };
});

export default axios;