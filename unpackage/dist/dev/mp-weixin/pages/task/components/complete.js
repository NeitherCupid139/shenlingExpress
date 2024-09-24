"use strict";
const common_vendor = require("../../../common/vendor.js");
const apis_task = require("../../../apis/task.js");
const _sfc_main = {
  __name: "complete",
  setup(__props) {
    const list = common_vendor.ref([]);
    const startTime = common_vendor.ref("");
    const endTime = common_vendor.ref("");
    common_vendor.onMounted(async () => {
      let res = await apis_task.taskApi.list(6);
      list.value = res.data.data.items;
    });
    async function search() {
      if (!startTime.value || !endTime.value) {
        return common_vendor.index.utils.toast("开始和结束时间非空", "error");
      }
      let res = await apis_task.taskApi.list(6, 1, 50, startTime.value, endTime.value);
      list.value = res.data.data.items;
    }
    function getStartTime(e) {
      startTime.value = e.detail.value;
    }
    function getEndTime(e) {
      endTime.value = e.detail.value;
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.t(startTime.value),
        b: common_vendor.o(getStartTime),
        c: common_vendor.t(endTime.value),
        d: common_vendor.o(getEndTime),
        e: common_vendor.o(search),
        f: list.value.length > 0
      }, list.value.length > 0 ? {
        g: common_vendor.f(list.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.transportTaskId),
            b: common_vendor.t(item.startAddress),
            c: common_vendor.t(item.endAddress),
            d: "/subpkg_task/detail/index?id=" + item.id,
            e: common_vendor.t(item.actualDepartureTime),
            f: item.id
          };
        })
      } : {}, {
        h: list.value.length == 0
      }, list.value.length == 0 ? {} : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-ae9d174d"]]);
wx.createComponent(Component);
