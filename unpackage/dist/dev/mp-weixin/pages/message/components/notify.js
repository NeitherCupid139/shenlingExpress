"use strict";
const common_vendor = require("../../../common/vendor.js");
const apis_message = require("../../../apis/message.js");
if (!Array) {
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  _easycom_uni_card2();
}
const _easycom_uni_card = () => "../../../uni_modules/uni-card/components/uni-card/uni-card.js";
if (!Math) {
  _easycom_uni_card();
}
const _sfc_main = {
  __name: "notify",
  setup(__props) {
    const list = common_vendor.ref([]);
    const isTriggered = common_vendor.ref(false);
    let page = 1;
    common_vendor.onMounted(async () => {
      let res = await apis_message.msgApi.list();
      list.value = res.data.data.items;
    });
    async function onScrollToLower() {
      page++;
      let res = await apis_message.msgApi.list(201, page, 10);
      if (res.data.data.items) {
        list.value.push(...res.data.data.items);
        console.log("已经触底...", page);
      }
    }
    async function onScrollViewRefresh() {
      console.log("下拉刷新触发...");
      isTriggered.value = true;
      page = 1;
      let res = await apis_message.msgApi.list(201, page, 10);
      list.value = res.data.data.items;
      isTriggered.value = false;
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(list.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.content),
            b: common_vendor.t(item.created),
            c: common_vendor.t(item.title),
            d: item.id,
            e: "a904c968-0-" + i0
          };
        }),
        b: common_vendor.p({
          border: false,
          ["is-shadow"]: false
        })
      }, {}, {
        c: common_vendor.o(onScrollToLower),
        d: common_vendor.o(onScrollViewRefresh),
        e: isTriggered.value
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a904c968"]]);
wx.createComponent(Component);
