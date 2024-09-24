"use strict";
const common_vendor = require("../common/vendor.js");
const piniaPluginPersisitedstate = common_vendor.createPersistedState({
  key: (id) => `__persisted__${id}`,
  // 单独处理key的名字,让其有语义化
  storage: {
    // 根据key来获取到存储中的数据(获取微信小程序，H5浏览器，原生app中的数据)
    getItem: (key) => {
      return common_vendor.index.getStorageSync(key);
    },
    // 保存数据到存储空间中
    setItem: (key, value) => {
      common_vendor.index.setStorageSync(key, value);
    }
  }
});
exports.piniaPluginPersisitedstate = piniaPluginPersisitedstate;
