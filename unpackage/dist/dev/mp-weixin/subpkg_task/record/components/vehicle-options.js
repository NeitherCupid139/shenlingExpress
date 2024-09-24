"use strict";
const common_vendor = require("../../../common/vendor.js");
const stores_task = require("../../../stores/task.js");
const _sfc_main = {
  __name: "vehicle-options",
  props: {
    types: Array,
    datakey: String
    // 字段名称
  },
  setup(__props) {
    const taskStore = stores_task.useTaskStore();
    const tabIndex = common_vendor.ref(-1);
    const props = __props;
    function onOptionSelect(index, item) {
      tabIndex.value = index;
      console.log(props.datakey, item);
      taskStore.recordData[props.datakey] = item.id;
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(props.types, (option, index, i0) => {
          return {
            a: common_vendor.t(option.text),
            b: tabIndex.value === index ? 1 : "",
            c: option.id,
            d: common_vendor.o(($event) => onOptionSelect(index, option), option.id)
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-3a448a82"]]);
wx.createComponent(Component);
