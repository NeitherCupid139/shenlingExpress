<script setup>
import { ref } from "vue";
import taskApi from "@/apis/task.js";
import slVehicleViolation from "./components/vehicle-violation";
import slVehicleBreakdown from "./components/vehicle-breakdown";
import slVehicleAccident from "./components/vehicle-accident";
import { onLoad } from "@dcloudio/uni-app";
import { useTaskStore } from "@/stores/task.js";
const taskStore = useTaskStore();

// 回车时间
const dataTimePicker = ref("");
onLoad((query) => {
	// 接收url的传参：
	/*quer格式
      {transportTaskId: '4071713105083814377', actualDepartureTime: '2024-09-22 10:29:39'}
    */
	// 将仓库中的响应式对象id和startTime赋值
	taskStore.recordData.id = query.transportTaskId;
	taskStore.recordData.startTime = query.actualDepartureTime;
});

// 定义回车登记方法
async function onFormSubmit() {
	// 获取pinia里面的所有需要提交的数据对象
	let obj = taskStore.recordData;

	// 调用 task.js中的record方法完成数据提交
	let res = await taskApi.record(obj);
	console.log("回车登记:", res);
	if (res.data.code !== 200) {
		return uni.utils.toast(res.data.msg);
	}
	// 如果成功则跳转到task首页
	uni.switchTab({
		url: "/pages/task/index",
	});
}
</script>
<template>
	<view class="page-container">
		<scroll-view class="scroll-view" scroll-y>
			<view class="scroll-view-wrapper">
				<uni-list class="base-info">
					<uni-list-item
						style="overflow: visible"
						title="出车时间"
						show-arrow
						:right-text="taskStore.recordData.startTime"
					/>
					<uni-list-item show-arrow title="回车时间">
						<template v-slot:footer>
							<uni-datetime-picker v-model="taskStore.recordData.endTime">
								<view class="picker-value">{{
									taskStore.recordData.endTime || "请选择"
								}}</view>
							</uni-datetime-picker>
						</template>
					</uni-list-item>
				</uni-list>
				<!-- 交通违章 -->
				<sl-vehicle-violation></sl-vehicle-violation>
				<!-- 车辆故障 -->
				<sl-vehicle-breakdown></sl-vehicle-breakdown>
				<!--交通事故  -->
				<sl-vehicle-accident></sl-vehicle-accident>
			</view>
		</scroll-view>
		<view class="toolbar">
			<button class="button" @click="onFormSubmit">提交登记</button>
		</view>
	</view>
</template>

<style lang="scss" scoped>
@import "./index.scss";
</style>
