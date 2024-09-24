"use strict";
const common_vendor = require("../common/vendor.js");
const useCounterStore = common_vendor.defineStore(
  "counter",
  () => {
    const count = common_vendor.ref(0);
    return { count };
  },
  {
    //pinia数据持久化，通过localStorage
    persist: {
      paths: ["count"]
    }
  }
);
exports.useCounterStore = useCounterStore;
