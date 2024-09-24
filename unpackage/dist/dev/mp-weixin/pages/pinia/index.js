"use strict";
const common_vendor = require("../../common/vendor.js");
const stores_counter = require("../../stores/counter.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const store = stores_counter.useCounterStore();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => common_vendor.unref(store).count--),
        b: common_vendor.unref(store).count,
        c: common_vendor.o(($event) => common_vendor.unref(store).count = $event.detail.value),
        d: common_vendor.o(($event) => common_vendor.unref(store).count++)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-3ada07ff"]]);
wx.createPage(MiniProgramPage);
