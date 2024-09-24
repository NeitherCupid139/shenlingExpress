"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  (common_vendor.unref(slNotify) + common_vendor.unref(slAnnounce))();
}
const slNotify = () => "./components/notify.js";
const slAnnounce = () => "./components/announce.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const tabIndex = common_vendor.ref(0);
    const tabMetas = common_vendor.reactive([
      {
        title: "任务通知",
        rendered: true
      },
      {
        title: "公告",
        rendered: false
      }
    ]);
    function onTabChange(index) {
      tabMetas[index].rendered = true;
      tabIndex.value = index;
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(tabMetas, (tabMeta, index, i0) => {
          return {
            a: common_vendor.t(tabMeta.title),
            b: tabMeta.title,
            c: common_vendor.o(($event) => onTabChange(index), tabMeta.title),
            d: tabIndex.value === index ? 1 : ""
          };
        }),
        b: tabMetas[0].rendered
      }, tabMetas[0].rendered ? {
        c: tabIndex.value === 0
      } : {}, {
        d: tabMetas[1].rendered
      }, tabMetas[1].rendered ? {
        e: tabIndex.value === 1
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-780fc0ad"]]);
wx.createPage(MiniProgramPage);
