// 导入uni-fetch.js文件
import { uniFetch } from './uni-fetch.js'

// 封装一个对象并导出，对象中定义一个list方法来获取任务列表数据
export default {
  /**
   * 任务列表
   * @param {number} status - 任务状态1:待提货， 2为在途(在途和已交付),6为已完成（已回车登记）
   * @param {string} page - 数据页码
   * @param {string} pageSize - 每页数据条件
   */
  list(
    status = 1,
    page = 1,
    pageSize = 10,
    startTime = '2022-06-12',
    endTime = '2025-12-31'
  ) {
    return uniFetch.get('/driver/tasks/list', {
      status,
      page,
      pageSize,
      startTime,
      endTime,
    })
  },
  /**
   * 任务详情
   * @param {string} id - 任务ID
   */
  detail(id) {
    if (!id) return //检验id的是否非空
    return uniFetch.get(`/driver/tasks/details/${id}`)
  },
  /**
   * 提货
   * @property {Object} data - 接口参数
   */
  pickup(data) {
    if (!data.id) return
    return uniFetch.post('/driver/tasks/takeDelivery', data)
  },
  /**
   * 交付
   * @property {Object} data - 接口参数
   */
  deliver(data) {
    if (!data.id) return
    return uniFetch.post('/driver/tasks/deliver', data)
  },
  /**
   * 延迟提货
   * @param {Object} data - 接口参数
   */
  delay(data) {
    if (!data.id) return
    return uniFetch.put('/driver/tasks/delay', data)
  },
  /**
   * 回车登记
   * @param {Object} data - 接口数据
   */
  record(data) {
    if (!data.id) return
    return uniFetch.post('/driver/tasks/truckRegistration', data)
  },
  /**
   * 上报异常
   * @param {Object} data - 接口数据
   */
  except(data) {
    return uniFetch.post('/driver/tasks/reportException', data)
  },
}
