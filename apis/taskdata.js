// 导入uni-fetch.js文件
import { uniFetch } from "./uni-fetch.js";

// 封装一个对象并导出，对象中定义一个list方法来获取任务列表数据
export default {
	getNum() {
		return uniFetch.get("/driver/users/taskReport");
	},
};
