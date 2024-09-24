"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  (common_vendor.unref(slAccount) + common_vendor.unref(slMobile))();
}
const slAccount = () => "./components/account.js";
const slMobile = () => "./components/mobile.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const tabIndex = common_vendor.ref(0);
    const tabMetas = common_vendor.reactive([
      {
        title: "账号登录",
        subTitle: "手机号登陆"
      },
      {
        title: "手机号登录",
        subTitle: "账号登录"
      }
    ]);
    const tabMeta = common_vendor.computed(() => {
      return tabMetas[tabIndex.value];
    });
    function changeLoginType() {
      tabIndex.value = Math.abs(tabIndex.value - 1);
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.t(tabMeta.value.title),
        b: common_vendor.t(tabMeta.value.subTitle),
        c: common_vendor.o(changeLoginType),
        d: tabIndex.value === 0
      }, tabIndex.value === 0 ? {} : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d08ef7d4"]]);
wx.createPage(MiniProgramPage);
