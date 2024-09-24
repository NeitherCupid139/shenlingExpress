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
    const truchInfo = common_vendor.ref({});
    common_vendor.onMounted(async () => {
      let res = await apis_uniFetch.uniFetch.get("/driver/users/truck");
      truchInfo.value = res.data.data;
      console.log(res.data.data);
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(truchInfo.value.pictureList, (img, k0, i0) => {
          return {
            a: img.url,
            b: img.url
          };
        }),
        b: common_vendor.p({
          border: false,
          title: "车辆编号",
          rightText: truchInfo.value.id
        }),
        c: common_vendor.p({
          border: false,
          title: "车辆号牌",
          rightText: truchInfo.value.licensePlate
        }),
        d: common_vendor.p({
          border: false,
          title: "车型",
          rightText: truchInfo.value.truckType
        }),
        e: common_vendor.p({
          border: false,
          title: "所属机构",
          rightText: truchInfo.value.currentOrganName
        }),
        f: common_vendor.p({
          border: false,
          title: "载重",
          rightText: truchInfo.value.allowableLoad
        }),
        g: common_vendor.p({
          border: false
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a5f3e2cd"]]);
wx.createPage(MiniProgramPage);
