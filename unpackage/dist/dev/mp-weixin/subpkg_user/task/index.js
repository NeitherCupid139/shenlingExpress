"use strict";
const common_vendor = require("../../common/vendor.js");
const apis_taskdata = require("../../apis/taskdata.js");
if (!Math) {
  common_vendor.unref(slUniCalendar)();
}
const slUniCalendar = () => "./components/sl-uni-calendar/sl-uni-calendar.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const num = common_vendor.ref(0);
    common_vendor.onMounted(() => {
      num.value = apis_taskdata.getNum;
      console.log(num.value);
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(num.value),
        b: common_vendor.p({
          ["show-month"]: false
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7c0db367"]]);
wx.createPage(MiniProgramPage);
