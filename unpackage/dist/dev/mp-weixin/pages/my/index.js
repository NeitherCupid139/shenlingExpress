"use strict";
const common_vendor = require("../../common/vendor.js");
const apis_uniFetch = require("../../apis/uni-fetch.js");
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
    const userData = common_vendor.ref({});
    const taskInfo = common_vendor.ref({});
    common_vendor.onMounted(() => {
      getInfo();
      getTaskInfo();
    });
    async function getTaskInfo() {
      let res = await apis_uniFetch.uniFetch.get("/driver/users/taskReport", {
        year: "2024",
        month: "09"
        // 由于我的账号注册日期是7月，所以需要填写07，大家根据自己的注册日期来填写
      });
      taskInfo.value = res.data.data;
    }
    async function getInfo() {
      try {
        let res = await apis_uniFetch.uniFetch.get("/driver/users");
        userData.value = res.data.data;
      } catch (err) {
        common_vendor.index.utils.toast("失败了");
        console.log(err);
      }
    }
    return (_ctx, _cache) => {
      return {
        a: userData.value.avatar,
        b: common_vendor.t(userData.value.name),
        c: common_vendor.t(userData.value.number),
        d: common_vendor.t(userData.value.phone),
        e: common_vendor.t(taskInfo.value.taskAmounts),
        f: common_vendor.t(taskInfo.value.completedAmounts),
        g: common_vendor.t(taskInfo.value.transportMileage),
        h: common_vendor.p({
          to: "/subpkg_user/truck/index",
          showArrow: true,
          title: "车辆信息"
        }),
        i: common_vendor.p({
          to: "/subpkg_user/task/index",
          showArrow: true,
          title: "任务数据"
        }),
        j: common_vendor.p({
          to: "/subpkg_user/settings/index",
          showArrow: true,
          title: "系统设置"
        }),
        k: common_vendor.p({
          border: false
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f97bc692"]]);
wx.createPage(MiniProgramPage);
