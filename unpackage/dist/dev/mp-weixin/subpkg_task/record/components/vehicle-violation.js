"use strict";
const common_vendor = require("../../../common/vendor.js");
const stores_task = require("../../../stores/task.js");
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  (_easycom_uni_list_item2 + _easycom_uni_list2)();
}
const _easycom_uni_list_item = () => "../../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../../uni_modules/uni-list/components/uni-list/uni-list.js";
if (!Math) {
  (common_vendor.unref(vehicleOptions) + _easycom_uni_list_item + _easycom_uni_list)();
}
const vehicleOptions = () => "./vehicle-options.js";
const _sfc_main = {
  __name: "vehicle-violation",
  setup(__props) {
    const taskStore = stores_task.useTaskStore();
    const show = common_vendor.ref(false);
    const initialData = common_vendor.ref([
      {
        title: "违章类型",
        key: "breakRulesType",
        types: [
          { id: 1, text: "闯红灯" },
          { id: 2, text: "无证驾驶" },
          { id: 3, text: "超载" },
          { id: 4, text: "酒后驾驶" },
          { id: 5, text: "超速驾驶" },
          { id: 6, text: "其它" }
        ]
      },
      {
        title: "罚款金额",
        key: "penaltyAmount",
        types: [
          { id: "0", text: "0元" },
          { id: "100", text: "100元" },
          { id: "200", text: "200元" },
          { id: "300", text: "300元" },
          { id: "500", text: "500元" },
          { id: "1000", text: "1000元" },
          { id: "2000", text: "2000元" }
        ]
      },
      {
        title: "扣分",
        key: "deductPoints",
        types: ["0分", "1分", "2分", "3分", "6分", "12分"],
        types: [
          { id: "0", text: "0分" },
          { id: "1", text: "1分" },
          { id: "2", text: "2分" },
          { id: "3", text: "3分" },
          { id: "6", text: "6分" },
          { id: "12", text: "12分" }
        ]
      }
    ]);
    function onRadioChange(ev) {
      show.value = !!parseInt(ev.detail.value);
      taskStore.recordData.isBreakRules = show.value;
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(onRadioChange),
        b: common_vendor.f(initialData.value, (item, k0, i0) => {
          return {
            a: "c2ef9f81-2-" + i0 + "," + ("c2ef9f81-1-" + i0),
            b: common_vendor.p({
              datakey: item.key,
              types: item.types
            }),
            c: "c2ef9f81-1-" + i0 + ",c2ef9f81-0",
            d: common_vendor.p({
              direction: "column",
              border: false,
              title: item.title
            })
          };
        }),
        c: show.value
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c2ef9f81"]]);
wx.createComponent(Component);
