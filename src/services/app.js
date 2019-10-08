/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-16 17:09:03
 * @LastEditTime: 2019-10-08 14:42:09
 * @LastEditors: Please set LastEditors
 */
import  axios  from '../utils/axios';

export const getTopicsList = () => (axios.get('/api/queryget'));