"use strict";
const common_vendor = require("../../common/vendor.js");
const apis_task = require("../../apis/task.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const taskDetail = common_vendor.ref({});
    const id = common_vendor.ref(0);
    common_vendor.onLoad(async (params) => {
      id.value = params.id;
      let res = await apis_task.taskApi.detail(params.id);
      taskDetail.value = res.data.data;
      console.log(res);
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.t(taskDetail.value.startAddress),
        b: common_vendor.t(taskDetail.value.endAddress),
        c: common_vendor.t(taskDetail.value.transportTaskId),
        d: common_vendor.t(taskDetail.value.startHandoverName),
        e: common_vendor.t(taskDetail.value.startHandoverPhone),
        f: common_vendor.t(taskDetail.value.planDepartureTime),
        g: common_vendor.t(taskDetail.value.actualDepartureTime),
        h: common_vendor.t(taskDetail.value.finishHandoverName),
        i: common_vendor.t(taskDetail.value.finishHandoverPhone),
        j: common_vendor.t(taskDetail.value.planArrivalTime),
        k: common_vendor.t(taskDetail.value.actualArrivalTime),
        l: taskDetail.value.exceptionList && taskDetail.value.exceptionList.length > 0
      }, taskDetail.value.exceptionList && taskDetail.value.exceptionList.length > 0 ? {
        m: common_vendor.f(taskDetail.value.exceptionList, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.exceptionTime),
            b: common_vendor.t(item.exceptionType),
            c: common_vendor.t(item.handleResult),
            d: item.exceptionTime
          };
        })
      } : {}, {
        n: common_vendor.f(taskDetail.value.cargoPickUpPictureList, (item, k0, i0) => {
          return {
            a: item.url,
            b: item.url
          };
        }),
        o: !taskDetail.value.cargoPickUpPictureList
      }, !taskDetail.value.cargoPickUpPictureList ? {} : {}, {
        p: common_vendor.f(taskDetail.value.cargoPictureList, (item, k0, i0) => {
          return {
            a: item.url,
            b: item.url
          };
        }),
        q: !taskDetail.value.cargoPictureList
      }, !taskDetail.value.cargoPictureList ? {} : {}, {
        r: common_vendor.f(taskDetail.value.certificatePictureList, (item, k0, i0) => {
          return {
            a: item.url,
            b: item.url
          };
        }),
        s: !taskDetail.value.certificatePictureList
      }, !taskDetail.value.certificatePictureList ? {} : {}, {
        t: common_vendor.f(taskDetail.value.deliverPictureList, (item, k0, i0) => {
          return {
            a: item.url,
            b: item.url
          };
        }),
        v: !taskDetail.value.deliverPictureList
      }, !taskDetail.value.deliverPictureList ? {} : {}, {
        w: taskDetail.value.status === 1
      }, taskDetail.value.status === 1 ? {
        x: `/subpkg_task/delay/index?id=${taskDetail.value.id}&planDepartureTime=${taskDetail.value.planDepartureTime}`,
        y: "/subpkg_task/pickup/index?id=" + id.value
      } : {}, {
        z: taskDetail.value.status === 2
      }, taskDetail.value.status === 2 ? {
        A: "/subpkg_task/except/index?transportTaskId=" + taskDetail.value.transportTaskId,
        B: "/subpkg_task/delivery/index?id=" + taskDetail.value.id
      } : {}, {
        C: taskDetail.value.status === 4
      }, taskDetail.value.status === 4 ? {
        D: `/subpkg_task/record/index?transportTaskId=${taskDetail.value.transportTaskId}&actualDepartureTime=${taskDetail.value.actualDepartureTime}`
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1a9e4efd"]]);
wx.createPage(MiniProgramPage);
