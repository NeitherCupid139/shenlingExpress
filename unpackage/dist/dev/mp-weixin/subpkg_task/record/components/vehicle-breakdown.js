"use strict";
const common_vendor = require("../../../common/vendor.js");
const stores_task = require("../../../stores/task.js");
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_file_picker2 = common_vendor.resolveComponent("uni-file-picker");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  (_easycom_uni_list_item2 + _easycom_uni_file_picker2 + _easycom_uni_list2)();
}
const _easycom_uni_list_item = () => "../../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_file_picker = () => "../../../uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.js";
const _easycom_uni_list = () => "../../../uni_modules/uni-list/components/uni-list/uni-list.js";
if (!Math) {
  (common_vendor.unref(vehicleOptions) + _easycom_uni_list_item + _easycom_uni_file_picker + _easycom_uni_list)();
}
const vehicleOptions = () => "./vehicle-options.js";
const _sfc_main = {
  __name: "vehicle-breakdown",
  setup(__props) {
    const taskStore = stores_task.useTaskStore();
    const show = common_vendor.ref(false);
    const types = common_vendor.ref([
      { id: 1, text: "启动困难" },
      { id: 2, text: "不着车" },
      { id: 3, text: "漏油" },
      { id: 4, text: "漏水" },
      { id: 5, text: "照明失灵" },
      { id: 6, text: "有异响" },
      { id: 7, text: "排烟异常" },
      { id: 8, text: "温度异常" },
      { id: 9, text: "其他" }
    ]);
    function onRadioChange(ev) {
      show.value = parseInt(ev.detail.value);
      taskStore.recordData.isFault = show.value == 1 ? true : false;
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(onRadioChange),
        b: common_vendor.p({
          datakey: "faultType",
          types: types.value
        }),
        c: common_vendor.unref(taskStore).recordData.faultDescription,
        d: common_vendor.o(($event) => common_vendor.unref(taskStore).recordData.faultDescription = $event.detail.value),
        e: common_vendor.p({
          direction: "column",
          border: false,
          title: "故障类型"
        }),
        f: common_vendor.o(($event) => common_vendor.unref(taskStore).recordData.faultImagesList = $event),
        g: common_vendor.p({
          limit: "6",
          modelValue: common_vendor.unref(taskStore).recordData.faultImagesList
        }),
        h: common_vendor.p({
          direction: "column",
          border: false,
          title: "请上传现场照片"
        }),
        i: show.value
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1d8c4f1b"]]);
wx.createComponent(Component);
