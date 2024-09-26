// 1. 导入ajax请求包
import { uniFetch } from "./uni-fetch.js";

// 2. 导出一个对象供外部调用
export default {
	/**
	 * 消息列表
	 * @property {string} contentType - 消息类型
	 * @property {string} page - 消息数据对应的页码
	 * @property {string} pageSize - 每页包含消息数据的条数
	 */
	list(contentType = 201, page = 1, pageSize = 10) {
		// 负责get调用接口/driver/messages/page
		return uniFetch.get("/driver/messages/page", {
			contentType,
			page,
			pageSize,
		});
	},
	allRead(code) {
		// 负责put调用接口/driver/messages/readAll
		return uniFetch.put("/driver/messages/readAll/" + code);
	},
};
