<script setup>
import taskApi from "@/apis/task.js";
import { ref, onMounted } from "vue";
const list = ref([]);
const startTime = ref("");
const endTime = ref("");
/**
 * @description 获取完成订单列表
 * @returns {void}
 * @todo 获取完成订单列表
 * @author 钟富源
 */
onMounted(async () => {
	let res = await taskApi.list(6); // 6表示已完成订单
	list.value = res.data.data.items;
});

/**
 * @description 搜索
 * @returns {void}
 * @todo 搜索完成订单
 * @author 钟富源
 */
async function search() {
	// 判断开始时间和结束时间是否为空
	if (!startTime.value || !endTime.value) {
		return uni.utils.toast("开始和结束时间非空", "error");
	}
	// 如果检查通过就发送请求
	let res = await taskApi.list(6, 1, 50, startTime.value, endTime.value);
	list.value = res.data.data.items;
}

// 获取开始时间
function getStartTime(e) {
	startTime.value = e.detail.value;
}
// 获取结束时间
function getEndTime(e) {
	endTime.value = e.detail.value;
}
</script>

<template>
	<view class="task-search">
		<view class="filter-bar">
			<picker class="picker" mode="date" @change="getStartTime">{{
				startTime
			}}</picker>
			<text class="text">至</text>
			<picker class="picker" mode="date" @change="getEndTime">{{
				endTime
			}}</picker>
			<button class="button" @click="search">筛选</button>
		</view>
	</view>
	<scroll-view scroll-y refresher-enabled class="scroll-view">
		<view class="scroll-view-wrapper">
			<view
				v-if="list.length > 0"
				v-for="item in list"
				:key="item.id"
				class="task-card"
			>
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
				<view class="footer flex">
					<view class="label">提货时间</view>
					<view class="time">{{ item.actualDepartureTime }}</view>
				</view>
			</view>
			<view v-if="list.length == 0" class="task-blank">无完成货物</view>
		</view>
	</scroll-view>
</template>

<style lang="scss" scoped>
@import "./styles.scss";

.task-search {
	padding: 30rpx;
	background-color: #fff;
	border-bottom: 1rpx solid #eee;

	.search-bar {
		position: relative;

		.icon-search {
			position: absolute;
			top: 22rpx;
			left: 24rpx;
			color: $uni-secondary-color;
			font-size: $uni-font-size-small;
		}

		.input {
			height: 72rpx;
			background-color: #f4f4f4;
			border-radius: 72rpx;
			padding-left: 72rpx;
			font-size: $uni-font-size-small;
		}
	}

	.filter-bar {
		display: flex;
		margin-top: 30rpx;
		font-size: $uni-font-size-small;
		text-align: center;
		line-height: 64rpx;
		color: $uni-secondary-color;

		.picker {
			width: 230rpx;
			height: 64rpx;
			border-radius: 64rpx;
			background-color: $uni-bg-color;
		}

		.text {
			margin: 0 24rpx;
		}

		.button {
			width: 120rpx;
			height: 64rpx;
			padding: 0;
			margin-left: 40rpx;
			line-height: 64rpx;
			border-radius: 64rpx;
			font-size: $uni-font-size-small;
			color: #fff;
			background-color: $uni-primary;

			&[disabled] {
				background-color: #fadcd9;
			}
		}
	}
}
</style>
