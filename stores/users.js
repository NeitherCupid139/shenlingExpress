import { defineStore } from "pinia";
import { ref } from "vue";

// 创建一个仓库，回调函数中定义响应式数据用来保存token
export const useUserStore = defineStore(
	"user",
	() => {
		// 定义一个响应式变量来存储token
		const token = ref("");

		return { token };
	},
	{
		// 通过localStorage来持久化token
		persist: {
			paths: ["token"],
		},
	}
);
