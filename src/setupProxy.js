/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-27 17:45:03
 * @LastEditTime: 2019-10-08 14:43:08
 * @LastEditors: Please set LastEditors
 */
const proxy = require("http-proxy-middleware");
module.exports = function(app) {
    app.use(
        proxy("/api", {
            target: "http://127.0.0.1:7077",
            changeOrigin: true,
            pathRewrite: {'^/api' : ''}
        })
    );
};