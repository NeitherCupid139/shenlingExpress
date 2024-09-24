"use strict";
const common_vendor = require("../common/vendor.js");
const stores_users = require("../stores/users.js");
const uniFetch = common_vendor.createUniFetch_1({
  loading: { title: "正在加载中..." },
  baseURL: "https://slwl-api.itheima.net",
  //同常配置的是接口地址的域名
  intercept: {
    // 请求拦截器
    request(options) {
      const store = stores_users.useUserStore();
      const token = store.token;
      const defaultHeaders = {
        Authorization: token
      };
      options.header = Object.assign({}, defaultHeaders, options.header);
      return options;
    },
    // 响应拦截器
    response(result) {
      if (result.statusCode === 401) {
        common_vendor.index.utils.toast("登录失效，请重新登录");
        common_vendor.index.redirectTo({
          url: "/pages/login/index"
        });
      }
      return result;
    }
  }
});
exports.uniFetch = uniFetch;
