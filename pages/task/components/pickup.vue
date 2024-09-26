<script setup>
//调用list方法获取服务器待提货单数据
//导入 apis/task.js
import taskApi from "@/apis/task.js";
import { onMounted, ref } from "vue";
//onMouted中来请求服务器数据
const list = ref([]);
/**
 * @description 获取待提货单列表
 * @returns {void}
 * @todo 获取待提货单列表
 * @author 钟富源
 */
onMounted(async () => {
	let res = await taskApi.list(); //定义响应式数据来接收服务器的数组并渲染到页面上
	list.value = res.data.data.items;
});

// 下一页页码
const nextPage = ref(1);
const isEmpty = ref(false);
const hasMore = ref(true);
const isTriggered = ref(false);

// 监听页面是否滚动到底部
function onScrollToLower() {
	// 没有更多数据时则不需要再请求了
	if (!hasMore.value) return;
	// 更新下一页页码
	nextPage.value++;

	// 获取下一页数据
	getPickUpList(nextPage.value, 5);
}

// 获取任务列表
async function getPickUpList(page, pageSize = 5) {
	const { code, data } = await taskApi.list(1, page, pageSize);
	// 检测接口是否调用成功
	console.log(data.code);
	if (data.code !== 200) uni.utils.toast("获取任务列表失败", "error");
	// 更新任务列表

	console.log(data.data.items);
	list.value = list.value.concat(data.data.items);
}
</script>

<template>
	<scroll-view
		@scrolltolower="onScrollToLower"
		:refresher-triggered="isTriggered"
		scroll-y
		refresher-enabled
		class="scroll-view"
	>
		<view class="scroll-view-wrapper">
			<view class="task-card" v-for="item in list" :key="item.id">
				<navigator
					hover-class="none"
					:url="'/subpkg_task/detail/index?id=' + item.id"
				>
					<view class="header">
						<text class="no">任务编号: {{ item.transportTaskId }}</text>
						<!-- <text class="status">已延迟</text> -->
					</view>
					<view class="body">
						<view class="timeline">
							<view class="line">{{ item.startAddress }}</view>
							<view class="line"> {{ item.endAddress }}</view>
						</view>
					</view>
				</navigator>
				<view class="footer">
					<view class="label">提货时间</view>
					<view class="time">{{ item.planDepartureTime }}</view>
					<!-- 可点击的提货按钮 -->
					<navigator
						v-if="item.enablePickUp"
						hover-class="none"
						:url="'/subpkg_task/pickup/index?id=' + item.id"
						class="action"
						>提货</navigator
					>
					<button
						hover-class="none"
						v-if="!item.enablePickUp"
						class="action"
						:disabled="!item.enablePickUp"
					>
						提货
					</button>
				</view>
			</view>

			<view v-if="false" class="task-blank">无待提货物</view>
		</view>
	</scroll-view>
</template>

<style lang="scss" scoped>
@import "./styles.scss";
</style>
