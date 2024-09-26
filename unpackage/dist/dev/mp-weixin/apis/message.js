"use strict";
const apis_uniFetch = require("./uni-fetch.js");
const msgApi = {
  /**
   * 消息列表
   * @property {string} contentType - 消息类型
   * @property {string} page - 消息数据对应的页码
   * @property {string} pageSize - 每页包含消息数据的条数
   */
  list(contentType = 201, page = 1, pageSize = 10) {
    return apis_uniFetch.uniFetch.get("/driver/messages/page", {
      contentType,
      page,
      pageSize
    });
  },
  allReadAnnounce() {
    return apis_uniFetch.uniFetch.put("/driver/messages/readAll/200");
  }
};
exports.msgApi = msgApi;
