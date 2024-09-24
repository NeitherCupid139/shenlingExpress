"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
require("./utils/utils.js");
const stores_persist = require("./stores/persist.js");
if (!Math) {
  "./pages/task/index.js";
  "./pages/login/index.js";
  "./pages/my/index.js";
  "./pages/message/index.js";
  "./pages/pinia/index.js";
  "./subpkg_task/detail/index.js";
  "./subpkg_task/delay/index.js";
  "./subpkg_task/pickup/index.js";
  "./subpkg_task/except/index.js";
  "./subpkg_task/delivery/index.js";
  "./subpkg_task/orders/index.js";
  "./subpkg_task/guide/index.js";
  "./subpkg_task/record/index.js";
  "./subpkg_message/content/index.js";
  "./subpkg_user/truck/index.js";
  "./subpkg_user/task/index.js";
  "./subpkg_user/settings/index.js";
  "./subpkg_user/mobile/index.js";
  "./subpkg_user/password/index.js";
  "./subpkg_user/notify/index.js";
}
const _sfc_main = {
  onLaunch: function() {
  },
  onShow: function() {
  },
  onHide: function() {
  }
};
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  const pinia = common_vendor.createPinia();
  pinia.use(stores_persist.piniaPluginPersisitedstate);
  app.use(pinia);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
