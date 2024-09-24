"use strict";
const common_vendor = require("../../../common/vendor.js");
const apis_task = require("../../../apis/task.js");
const _sfc_main = {
  __name: "pickup",
  setup(__props) {
    const list = common_vendor.ref([]);
    common_vendor.onMounted(async () => {
      let res = await apis_task.taskApi.list();
      list.value = res.data.data.items;
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(list.value, (item, k0, i0) => {
          return common_vendor.e({
            a: common_vendor.t(item.transportTaskId),
            b: common_vendor.t(item.startAddress),
            c: common_vendor.t(item.endAddress),
            d: "/subpkg_task/detail/index?id=" + item.id,
            e: common_vendor.t(item.planDepartureTime),
            f: item.enablePickUp
          }, item.enablePickUp ? {
            g: "/subpkg_task/pickup/index?id=" + item.id
          } : {}, {
            h: !item.enablePickUp
          }, !item.enablePickUp ? {
            i: !item.enablePickUp
          } : {}, {
            j: item.id
          });
        })
      }, {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1c7341c3"]]);
wx.createComponent(Component);
