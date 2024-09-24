"use strict";
const common_vendor = require("../common/vendor.js");
const utils = {
  // title：表示提示用户的信息是什么。默认提示语：
  // icon：表示提示面板中显示的图标名称是什么，none(没有图标),success（成功）,error,fail（失败）,exception（警告）等
  toast(title = "数据加载失败！", icon = "none") {
    common_vendor.index.showToast({
      title,
      icon,
      mask: true
      //开启遮罩层
    });
  }
};
common_vendor.index.utils = utils;
