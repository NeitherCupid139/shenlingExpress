"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const latitude = common_vendor.ref(39.909);
    const longitude = common_vendor.ref(116.39742);
    return (_ctx, _cache) => {
      return {
        a: latitude.value,
        b: longitude.value
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0b26e407"]]);
wx.createPage(MiniProgramPage);
