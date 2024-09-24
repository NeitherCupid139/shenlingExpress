<script setup>
import { onLoad } from "@dcloudio/uni-app";
import { ref, computed } from "vue";
import taskApi from "@/apis/task.js";
const id = ref(0); //接收url传入的id
const planDepartureTime = ref(""); //接收url传入的planDepartureTime
/**
 * @description 获取url传入的参数
 * @returns {void}
 * @param {Object} query - url传入的参数
 * @todo 获取url传入的参数
 * @author 钟富源
 */
onLoad((query) => {
	id.value = query.id;
	planDepartureTime.value = query.planDepartureTime;
});

// 获取用户输入的延迟时间
let time = computed(() => {
	let [date, time] = planDepartureTime.value.split(" "); //2024-12-12 12:12:12
	let [h, m] = time.split(":"); //获取小时和分钟
	return `${h}:${m}`;
});
const delayTime = ref("");
function getTime(e) {
	let date = planDepartureTime.value.split(" ")[0]; //获取日期
	delayTime.value = `${date} ${e.detail.value}`; //拼接日期和时间
}

//获取用户输入的延迟理由
const delayReason = ref("");

//提交数据给服务器
async function onFormSubmit() {
	// 参数非空检查
	if (!delayTime.value || !delayReason.value) {
		return uni.utils.toast("时间和理由不能为空", "error");
	}
	// 提交数据给服务器
	let obj = {
		id: id.value,
		delayTime: delayTime.value,
		delayReason: delayReason.value,
	};
	let res = await taskApi.delay(obj);
	uni.utils.toast("延迟提货成功", "success");
	uni.switchTab({
		url: "/pages/task/index",
	});
}
</script>

<template>
	<view class="page-container">
		{{ id }}
		<uni-list :border="false">
			<uni-list-item
				title="原定时间 "
				showArrow
				:rightText="planDepartureTime"
			/>
			<uni-list-item title="延迟时间" showArrow>
				<template v-slot:footer>
					<picker
						class="time-picker"
						mode="time"
						:value="time"
						@change="getTime"
					>
						<text>{{ delayTime ? delayTime + ":00" : "不可超过2个小时" }}</text>
					</picker>
				</template>
			</uni-list-item>
			<uni-list-item direction="column">
				<template v-slot:body>
					<view class="textarea-wrapper">
						<textarea
							maxlength="50"
							v-model="delayReason"
							class="textarea"
							placeholder-style="color: #818181"
							placeholder="请输入延迟提货原因"
						></textarea>
						<text class="words-count">{{ delayReason.length }}/50</text>
					</view>
				</template>
			</uni-list-item>
			<uni-list-item :border="false">
				<template v-slot:body>
					<button class="button" @click="onFormSubmit">提交</button>
				</template>
			</uni-list-item>
		</uni-list>
	</view>
</template>

<style lang="scss" scoped>
@import "./index.scss";
</style>
