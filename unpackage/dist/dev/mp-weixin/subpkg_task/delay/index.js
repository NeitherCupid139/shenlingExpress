"use strict";
const common_vendor = require("../../common/vendor.js");
const apis_task = require("../../apis/task.js");
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  (_easycom_uni_list_item2 + _easycom_uni_list2)();
}
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
if (!Math) {
  (_easycom_uni_list_item + _easycom_uni_list)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const id = common_vendor.ref(0);
    const planDepartureTime = common_vendor.ref("");
    common_vendor.onLoad((query) => {
      id.value = query.id;
      planDepartureTime.value = query.planDepartureTime;
    });
    let time = common_vendor.computed(() => {
      let [date, time2] = planDepartureTime.value.split(" ");
      let [h, m] = time2.split(":");
      return `${h}:${m}`;
    });
    const delayTime = common_vendor.ref("");
    function getTime(e) {
      let date = planDepartureTime.value.split(" ")[0];
      delayTime.value = `${date} ${e.detail.value}`;
    }
    const delayReason = common_vendor.ref("");
    async function onFormSubmit() {
      if (!delayTime.value || !delayReason.value) {
        return common_vendor.index.utils.toast("时间和理由不能为空", "error");
      }
      let obj = {
        id: id.value,
        delayTime: delayTime.value,
        delayReason: delayReason.value
      };
      await apis_task.taskApi.delay(obj);
      common_vendor.index.utils.toast("延迟提货成功", "success");
      common_vendor.index.switchTab({
        url: "/pages/task/index"
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(id.value),
        b: common_vendor.p({
          title: "原定时间 ",
          showArrow: true,
          rightText: planDepartureTime.value
        }),
        c: common_vendor.t(delayTime.value ? delayTime.value + ":00" : "不可超过2个小时"),
        d: common_vendor.unref(time),
        e: common_vendor.o(getTime),
        f: common_vendor.p({
          title: "延迟时间",
          showArrow: true
        }),
        g: delayReason.value,
        h: common_vendor.o(($event) => delayReason.value = $event.detail.value),
        i: common_vendor.t(delayReason.value.length),
        j: common_vendor.p({
          direction: "column"
        }),
        k: common_vendor.o(onFormSubmit),
        l: common_vendor.p({
          border: false
        }),
        m: common_vendor.p({
          border: false
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-fecb005a"]]);
wx.createPage(MiniProgramPage);
