"use strict";
const apis_uniFetch = require("./uni-fetch.js");
const getNum = {
  getNum() {
    return apis_uniFetch.uniFetch.get("/driver/users/taskReport");
  }
};
exports.getNum = getNum;
