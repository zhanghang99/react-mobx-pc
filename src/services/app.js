/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-16 17:09:03
 * @LastEditTime: 2019-09-17 09:07:05
 * @LastEditors: Please set LastEditors
 */
import  axios  from '../utils/axios';

export const getTopicsList = ({ page = 1, tab = 'all', limit = 10 }) => (axios.get('/topics', {
  params: {
    page,
    tab,
    limit,
  }
}));