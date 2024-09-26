"use strict";
const common_vendor = require("../../../common/vendor.js");
const apis_message = require("../../../apis/message.js");
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  (_easycom_uni_list_item2 + _easycom_uni_list2)();
}
const _easycom_uni_list_item = () => "../../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../../uni_modules/uni-list/components/uni-list/uni-list.js";
if (!Math) {
  (_easycom_uni_list_item + _easycom_uni_list)();
}
const _sfc_main = {
  __name: "announce",
  setup(__props) {
    const list = common_vendor.ref([]);
    common_vendor.onMounted(async () => {
      let res = await apis_message.msgApi.list(200);
      console.log(res);
      list.value = res.data.data.items;
      console.log(list.value);
    });
    const isRead = common_vendor.ref(false);
    async function onReadAll() {
      console.log("onReadAll");
      console.log(list.value);
      await apis_message.msgApi.allReadAnnounce();
      let res = await apis_message.msgApi.list(200);
      list.value = res.data.data.items;
      isRead.value = true;
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => onReadAll()),
        b: common_vendor.f(list.value, (item, k0, i0) => {
          return common_vendor.e(!isRead.value ? {} : {}, {
            a: item.id,
            b: "4b861c49-1-" + i0 + ",4b861c49-0",
            c: common_vendor.p({
              to: "/subpkg_message/content/index",
              ellipsis: "1",
              title: item.title,
              rightText: item.created
            })
          });
        }),
        c: !isRead.value,
        d: common_vendor.p({
          border: false
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4b861c49"]]);
wx.createComponent(Component);
