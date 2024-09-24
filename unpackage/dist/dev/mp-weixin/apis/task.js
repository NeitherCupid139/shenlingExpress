"use strict";
const apis_uniFetch = require("./uni-fetch.js");
const taskApi = {
  /**
   * 任务列表
   * @param {number} status - 任务状态1:待提货， 2为在途(在途和已交付),6为已完成（已回车登记）
   * @param {string} page - 数据页码
   * @param {string} pageSize - 每页数据条件
   */
  list(status = 1, page = 1, pageSize = 10, startTime = "2022-06-12", endTime = "2025-12-31") {
    return apis_uniFetch.uniFetch.get("/driver/tasks/list", {
      status,
      page,
      pageSize,
      startTime,
      endTime
    });
  },
  /**
   * 任务详情
   * @param {string} id - 任务ID
   */
  detail(id) {
    if (!id)
      return;
    return apis_uniFetch.uniFetch.get(`/driver/tasks/details/${id}`);
  },
  /**
   * 提货
   * @property {Object} data - 接口参数
   */
  pickup(data) {
    if (!data.id)
      return;
    return apis_uniFetch.uniFetch.post("/driver/tasks/takeDelivery", data);
  },
  /**
   * 交付
   * @property {Object} data - 接口参数
   */
  deliver(data) {
    if (!data.id)
      return;
    return apis_uniFetch.uniFetch.post("/driver/tasks/deliver", data);
  },
  /**
   * 延迟提货
   * @param {Object} data - 接口参数
   */
  delay(data) {
    if (!data.id)
      return;
    return apis_uniFetch.uniFetch.put("/driver/tasks/delay", data);
  },
  /**
   * 回车登记
   * @param {Object} data - 接口数据
   */
  record(data) {
    if (!data.id)
      return;
    return apis_uniFetch.uniFetch.post("/driver/tasks/truckRegistration", data);
  },
  /**
   * 上报异常
   * @param {Object} data - 接口数据
   */
  except(data) {
    return apis_uniFetch.uniFetch.post("/driver/tasks/reportException", data);
  }
};
exports.taskApi = taskApi;
