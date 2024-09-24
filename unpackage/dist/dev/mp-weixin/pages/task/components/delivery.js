"use strict";
const common_vendor = require("../../../common/vendor.js");
const apis_task = require("../../../apis/task.js");
const _sfc_main = {
  __name: "delivery",
  setup(__props) {
    const deliveryList = common_vendor.ref([]);
    common_vendor.onMounted(async () => {
      let res = await apis_task.taskApi.list(2);
      deliveryList.value = res.data.data.items;
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(deliveryList.value, (item, k0, i0) => {
          return common_vendor.e({
            a: common_vendor.t(item.transportTaskId),
            b: common_vendor.t(item.startAddress),
            c: common_vendor.t(item.endAddress),
            d: "/subpkg_task/detail/index?id=" + item.id,
            e: common_vendor.t(item.planDepartureTime),
            f: item.status === 2
          }, item.status === 2 ? {
            g: "/subpkg_task/delivery/index?id=" + item.id
          } : {}, {
            h: item.status === 4
          }, item.status === 4 ? {
            i: `/subpkg_task/record/index?transportTaskId=${item.transportTaskId}&actualDepartureTime=${item.actualDepartureTime}`
          } : {}, {
            j: item.id
          });
        })
      }, {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-be84ba7a"]]);
wx.createComponent(Component);
