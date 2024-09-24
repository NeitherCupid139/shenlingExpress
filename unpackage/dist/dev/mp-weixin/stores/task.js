"use strict";
const common_vendor = require("../common/vendor.js");
const useTaskStore = common_vendor.defineStore("task", () => {
  const recordData = common_vendor.ref({
    id: "",
    startTime: "",
    endTime: "",
    /*** 违章 ***/
    isBreakRules: false,
    breakRulesType: null,
    penaltyAmount: null,
    deductPoints: null,
    /*** 违章 ***/
    /*** 故障 ***/
    isFault: false,
    faultType: null,
    faultDescription: "",
    faultImagesList: [],
    /*** 故障 ***/
    /*** 事故 ***/
    isAccident: false,
    accidentType: null,
    accidentDescription: "",
    accidentImagesList: []
    /*** 事故 ***/
  });
  return { recordData };
});
exports.useTaskStore = useTaskStore;
