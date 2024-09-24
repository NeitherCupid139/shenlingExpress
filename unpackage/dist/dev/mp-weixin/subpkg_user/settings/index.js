"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  (_easycom_uni_list_item2 + _easycom_uni_list2)();
}
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
if (!Math) {
  (_easycom_uni_list_item + _easycom_uni_list)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    function onClearCache() {
      console.log("清理缓存");
      common_vendor.index.clearStorage();
      common_vendor.index.utils.toast("清理缓存成功", "success");
    }
    function logOut() {
      console.log("退出登录");
      common_vendor.index.clearStorage();
      common_vendor.index.utils.toast("退出登录成功", "success");
      common_vendor.index.redirectTo({
        url: "/pages/login/index"
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "换绑手机",
          to: "/subpkg_user/mobile/index",
          ["show-arrow"]: true
        }),
        b: common_vendor.p({
          title: "修改密码",
          to: "/subpkg_user/password/index",
          ["show-arrow"]: true
        }),
        c: common_vendor.p({
          title: "消息通知设置",
          to: "/subpkg_user/notify/index",
          ["show-arrow"]: true
        }),
        d: common_vendor.o(($event) => onClearCache()),
        e: common_vendor.p({
          title: "清理缓存",
          ["show-arrow"]: true,
          link: true
        }),
        f: common_vendor.p({
          border: false
        }),
        g: common_vendor.o(($event) => logOut())
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4c02aaed"]]);
wx.createPage(MiniProgramPage);
