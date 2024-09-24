"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  (slPickup + slDelivery + slComplete)();
}
const slPickup = () => "./components/pickup.js";
const slDelivery = () => "./components/delivery.js";
const slComplete = () => "./components/complete.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const tabIndex = common_vendor.ref(0);
    const tabMetas = common_vendor.reactive([
      {
        title: "待提货",
        rendered: true
      },
      {
        title: "在途",
        rendered: false
      },
      {
        title: "已完成",
        rendered: false
      }
    ]);
    const onTabChange = (index) => {
      tabMetas[index].rendered = true;
      tabIndex.value = index;
    };
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
      } : {}, {
        f: tabMetas[2].rendered
      }, tabMetas[2].rendered ? {
        g: tabIndex.value === 2
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-3dabfb60"]]);
wx.createPage(MiniProgramPage);
