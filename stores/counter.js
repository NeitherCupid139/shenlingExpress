import { defineStore } from "pinia";
import { ref } from "vue";

export const useCounterStore = defineStore(
	"counter",
	() => {
		const count = ref(0);
		return { count };
	},
	{
		//pinia数据持久化，通过localStorage
		persist: {
			paths: ["count"],
		},
	}
);
