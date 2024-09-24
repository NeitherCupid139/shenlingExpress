"use strict";
const common_vendor = require("../../common/vendor.js");
const apis_task = require("../../apis/task.js");
if (!Array) {
  const _easycom_uni_datetime_picker2 = common_vendor.resolveComponent("uni-datetime-picker");
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_file_picker2 = common_vendor.resolveComponent("uni-file-picker");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_datetime_picker2 + _easycom_uni_list_item2 + _easycom_uni_file_picker2 + _easycom_uni_list2 + _easycom_uni_popup2)();
}
const _easycom_uni_datetime_picker = () => "../../uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.js";
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_file_picker = () => "../../uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_datetime_picker + _easycom_uni_list_item + _easycom_uni_file_picker + _easycom_uni_list + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const transportTaskId = common_vendor.ref(0);
    const exceptionTypeArr = [];
    const exceptionType = common_vendor.ref("");
    const exceptionDescribe = common_vendor.ref("");
    const exceptionImagesList = common_vendor.ref([]);
    const timePicker = common_vendor.ref("");
    common_vendor.onLoad((query) => {
      transportTaskId.value = query.transportTaskId;
    });
    const popup = common_vendor.ref(null);
    const exceptTime = common_vendor.computed(() => {
      return timePicker.value || "请选择";
    });
    const exceptionPlace = common_vendor.ref("");
    async function onLocationChoose() {
      let location = await common_vendor.index.chooseLocation({});
      exceptionPlace.value = location.address;
      console.log(location);
    }
    function onPopupConfirm() {
      popup.value.close();
    }
    function onPopupOpen() {
      popup.value.open();
    }
    const exceptionTypes = common_vendor.reactive([
      { text: "发动机启动困难", checked: true },
      { text: "不着车，漏油", checked: false },
      { text: "照明失灵", checked: false },
      { text: "排烟异常、温度异常", checked: false },
      { text: "其他问题", checked: false }
    ]);
    function onCheckboxChange(item) {
      if (!exceptionTypeArr.includes(item.text)) {
        exceptionTypeArr.push(item.text);
      }
      exceptionType.value = exceptionTypeArr.join(",");
    }
    async function onFormSubmit() {
      let obj = {
        transportTaskId: transportTaskId.value,
        exceptionTime: timePicker.value,
        exceptionPlace: exceptionPlace.value,
        exceptionType: exceptionType.value,
        exceptionDescribe: exceptionDescribe.value,
        exceptionImagesList: exceptionImagesList.value
      };
      await apis_task.taskApi.except(obj);
      common_vendor.index.switchTab({
        url: "/pages/task/index"
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(exceptTime.value),
        b: common_vendor.o(($event) => timePicker.value = $event),
        c: common_vendor.p({
          modelValue: timePicker.value
        }),
        d: common_vendor.p({
          ["show-arrow"]: true,
          title: "异常时间"
        }),
        e: common_vendor.o(onLocationChoose),
        f: common_vendor.p({
          ["show-arrow"]: true,
          clickable: true,
          ellipsis: "1",
          title: "上报位置",
          rightText: exceptionPlace.value
        }),
        g: common_vendor.o(onPopupOpen),
        h: common_vendor.p({
          ["show-arrow"]: true,
          clickable: true,
          title: "异常类型",
          rightText: exceptionType.value
        }),
        i: exceptionDescribe.value,
        j: common_vendor.o(($event) => exceptionDescribe.value = $event.detail.value),
        k: common_vendor.t(exceptionDescribe.value.length),
        l: common_vendor.p({
          direction: "column",
          title: "异常描述"
        }),
        m: common_vendor.o(($event) => exceptionImagesList.value = $event),
        n: common_vendor.p({
          limit: "6",
          modelValue: exceptionImagesList.value
        }),
        o: common_vendor.p({
          border: false,
          direction: "column",
          title: "上传图片（最多6张）"
        }),
        p: common_vendor.p({
          border: false
        }),
        q: common_vendor.o(onFormSubmit),
        r: common_vendor.f(exceptionTypes, (item, index, i0) => {
          return {
            a: common_vendor.o(($event) => onCheckboxChange(item)),
            b: "a5d326dc-11-" + i0 + ",a5d326dc-9",
            c: common_vendor.p({
              title: item.text
            })
          };
        }),
        s: common_vendor.o(onPopupConfirm),
        t: common_vendor.sr(popup, "a5d326dc-8", {
          "k": "popup"
        }),
        v: common_vendor.p({
          ["mask-click"]: false,
          type: "bottom"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a5d326dc"]]);
wx.createPage(MiniProgramPage);
