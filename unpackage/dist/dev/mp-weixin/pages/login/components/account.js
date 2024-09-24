"use strict";
const common_vendor = require("../../../common/vendor.js");
const apis_uniFetch = require("../../../apis/uni-fetch.js");
const stores_users = require("../../../stores/users.js");
if (!Array) {
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_forms_item2 + _easycom_uni_forms2)();
}
const _easycom_uni_forms_item = () => "../../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_forms = () => "../../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_forms_item + _easycom_uni_forms)();
}
const _sfc_main = {
  __name: "account",
  setup(__props) {
    const accountForm = common_vendor.ref();
    const formData = common_vendor.reactive({
      account: "ecut66",
      password: "123456"
    });
    const accountRules = common_vendor.reactive({
      account: {
        rules: [
          { required: true, errorMessage: "请输入登录账号" },
          { pattern: "^[a-zA-Z0-9]{6,8}$", errorMessage: "登录账号格式不正确" }
        ]
      },
      password: {
        rules: [
          { required: true, errorMessage: "请输入登录密码" },
          { pattern: "^\\d{6}$", errorMessage: "登录密码格式不正确" }
        ]
      }
    });
    async function onFormSubmit() {
      try {
        const formData2 = await accountForm.value.validate();
        let res = await apis_uniFetch.uniFetch.post("/driver/login/account", formData2);
        const token = res.data.data;
        const store = stores_users.useUserStore();
        store.token = token;
        common_vendor.index.switchTab({
          url: "/pages/task/index"
        });
      } catch (err) {
        console.log("验证失败：", err);
      }
    }
    return (_ctx, _cache) => {
      return {
        a: formData.account,
        b: common_vendor.o(($event) => formData.account = $event.detail.value),
        c: common_vendor.p({
          name: "account"
        }),
        d: formData.password,
        e: common_vendor.o(($event) => formData.password = $event.detail.value),
        f: common_vendor.p({
          name: "password"
        }),
        g: common_vendor.o(onFormSubmit),
        h: common_vendor.sr(accountForm, "f972d3ee-0", {
          "k": "accountForm"
        }),
        i: common_vendor.p({
          model: formData,
          rules: accountRules
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f972d3ee"]]);
wx.createComponent(Component);
