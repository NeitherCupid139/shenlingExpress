"use strict";
const common_vendor = require("../../common/vendor.js");
const apis_task = require("../../apis/task.js");
const stores_task = require("../../stores/task.js");
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_datetime_picker2 = common_vendor.resolveComponent("uni-datetime-picker");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  (_easycom_uni_list_item2 + _easycom_uni_datetime_picker2 + _easycom_uni_list2)();
}
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_datetime_picker = () => "../../uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
if (!Math) {
  (_easycom_uni_list_item + _easycom_uni_datetime_picker + _easycom_uni_list + common_vendor.unref(slVehicleViolation) + common_vendor.unref(slVehicleBreakdown) + common_vendor.unref(slVehicleAccident))();
}
const slVehicleViolation = () => "./components/vehicle-violation.js";
const slVehicleBreakdown = () => "./components/vehicle-breakdown.js";
const slVehicleAccident = () => "./components/vehicle-accident.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const taskStore = stores_task.useTaskStore();
    common_vendor.ref("");
    common_vendor.onLoad((query) => {
      taskStore.recordData.id = query.transportTaskId;
      taskStore.recordData.startTime = query.actualDepartureTime;
    });
    async function onFormSubmit() {
      let obj = taskStore.recordData;
      let res = await apis_task.taskApi.record(obj);
      console.log("回车登记:", res);
      if (res.data.code !== 200) {
        return common_vendor.index.utils.toast(res.data.msg);
      }
      common_vendor.index.switchTab({
        url: "/pages/task/index"
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "出车时间",
          ["show-arrow"]: true,
          ["right-text"]: common_vendor.unref(taskStore).recordData.startTime
        }),
        b: common_vendor.t(common_vendor.unref(taskStore).recordData.endTime || "请选择"),
        c: common_vendor.o(($event) => common_vendor.unref(taskStore).recordData.endTime = $event),
        d: common_vendor.p({
          modelValue: common_vendor.unref(taskStore).recordData.endTime
        }),
        e: common_vendor.p({
          ["show-arrow"]: true,
          title: "回车时间"
        }),
        f: common_vendor.o(onFormSubmit)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c61f3fc5"]]);
wx.createPage(MiniProgramPage);
