<script setup>
// 导入task.js文件并调用list方法获取在途订单
import taskApi from "@/apis/task.js";
import { onMounted, ref } from "vue";
// 定义响应式数据接收服务器的数据并渲染到界面
// 在途任务列表
const deliveryList = ref([]);

/**
 * @description 获取在途订单列表
 * @returns {void}
 * @todo 获取在途订单列表
 * @author 钟富源
 */
onMounted(async () => {
	let res = await taskApi.list(2); // 2表示在途订单
	deliveryList.value = res.data.data.items;
});
</script>
<template>
	<scroll-view scroll-y  class="scroll-view">
		<view class="scroll-view-wrapper">
			<view class="task-card" v-for="item in deliveryList" :key="item.id">
				<navigator
					hover-class="none"
					:url="'/subpkg_task/detail/index?id=' + item.id"
				>
					<view class="header">
						<text class="no">任务编号: {{ item.transportTaskId }}</text>
					</view>
					<view class="body">
						<view class="timeline">
							<view class="line">{{ item.startAddress }}</view>
							<view class="line">{{ item.endAddress }}</view>
						</view>
					</view>
				</navigator>
				<view class="footer">
					<view class="label">提货时间</view>
					<view class="time">{{ item.planDepartureTime }}</view>
					<navigator
						v-if="item.status === 2"
						hover-class="none"
						:url="'/subpkg_task/delivery/index?id=' + item.id"
						class="action"
					>
						交付
					</navigator>

					<navigator
						v-if="item.status === 4"
						hover-class="none"
						:url="`/subpkg_task/record/index?transportTaskId=${item.transportTaskId}&actualDepartureTime=${item.actualDepartureTime}`"
						class="action"
						>回车登记</navigator
					>
				</view>
			</view>
			<view v-if="false" class="task-blank">无在途货物</view>
		</view>
	</scroll-view>
</template>

<style lang="scss" scoped>
@import "./styles.scss";
</style>
