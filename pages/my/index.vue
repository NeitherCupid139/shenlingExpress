<script setup>
import { uniFetch } from "@/apis/uni-fetch.js";
import { onMounted, ref } from "vue";
const userData = ref({});
const taskInfo = ref({});
/**
 * @description 获取信息
 * @todo 获取司机信息
 * @todo 获取里程信息
 * @returns {void}
 * @author 钟富源
 */
onMounted(() => {
	getInfo();
	getTaskInfo();
});

/**
 * @description 获取任务信息
 * @returns {void}
 * @todo 获取任务信息
 * @todo 获取任务完成量
 * @author 钟富源
 */
async function getTaskInfo() {
	let res = await uniFetch.get("/driver/users/taskReport", {
		year: "2024",
		month: "09", // 由于我的账号注册日期是7月，所以需要填写07，大家根据自己的注册日期来填写
	});
	taskInfo.value = res.data.data;
}

/**
 * @description 获取信息
 * @returns {void}
 * @todo 获取司机信息
 * @author 钟富源
 */
async function getInfo() {
	try {
		let res = await uniFetch.get("/driver/users");
		userData.value = res.data.data; // 响应体中的data属性的值
	} catch (err) {
		uni.utils.toast("失败了");
		console.log(err);
	}
}
</script>

<template>
	<view class="page-container">
		<view class="user-profile">
			<image class="avatar" :src="userData.avatar" mode=""></image>
			<text class="username">{{ userData.name }}</text>
			<text class="no">司机编号：{{ userData.number }}</text>
			<text class="mobile">手机号码：{{ userData.phone }}</text>
		</view>
		<view class="month-overview">
			<view class="title">我的任务</view>
			<view class="content">
				<view class="item">
					<text class="volumn">{{ taskInfo.taskAmounts }}</text>
					<text class="label">任务总量</text>
				</view>
				<view class="item">
					<text class="volumn">{{ taskInfo.completedAmounts }}</text>
					<text class="label">完成任务量</text>
				</view>
				<view class="item">
					<text class="volumn">{{ taskInfo.transportMileage }}</text>
					<text class="label">运输里程(km)</text>
				</view>
			</view>
		</view>
		<view class="entry-list">
			<uni-list :border="false">
				<uni-list-item
					to="/subpkg_user/truck/index"
					showArrow
					title="车辆信息"
				/>
				<uni-list-item
					to="/subpkg_user/task/index"
					showArrow
					title="任务数据"
				/>
				<uni-list-item
					to="/subpkg_user/settings/index"
					showArrow
					title="系统设置"
				/>
			</uni-list>
		</view>
	</view>
</template>

<style lang="scss" scoped>
@import "./index.scss";
</style>
