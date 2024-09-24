<script setup>
import { onLoad } from "@dcloudio/uni-app";
import taskApi from "@/apis/task.js";
import { ref } from "vue";

// 任务详情
const taskDetail = ref({});
const id = ref(0);

// 获取地址参数
onLoad(async (params) => {
	// console.log(params.id)  //作业id
	id.value = params.id;
	// 根据作业id请求服务器数据交给页面处理
	let res = await taskApi.detail(params.id);
	// 将服务器的数据赋值给响应式变量
	taskDetail.value = res.data.data;
	console.log(res);
});
</script>

<template>
	<view class="page-container">
		<view class="search-bar">
			<text class="iconfont icon-scan"></text>
			<input class="input" type="text" placeholder="输入运单号" />
		</view>
		<scroll-view scroll-y class="task-detail">
			<view class="scroll-view-wrapper">
				<view class="basic-info panel">
					<view class="panel-title">基本信息</view>
					<view class="timeline">
						<view class="line">{{ taskDetail.startAddress }}</view>
						<view class="line">{{ taskDetail.endAddress }}</view>
						<navigator
							hover-class="none"
							url="/subpkg_task/guide/index"
							class="guide"
						>
							<text class="iconfont icon-guide"></text>
							<text>开始导航</text>
						</navigator>
					</view>
					<view class="info-list">
						<view class="info-list-item">
							<text class="label">任务编号</text>
							<text class="value">{{ taskDetail.transportTaskId }}</text>
						</view>
						<view class="info-list-item">
							<text class="label">提货联系人</text>
							<text class="value">{{ taskDetail.startHandoverName }}</text>
						</view>
						<view class="info-list-item">
							<text class="label">联系电话</text>
							<text class="value">{{ taskDetail.startHandoverPhone }}</text>
						</view>
						<view class="info-list-item">
							<text class="label">预计提货时间</text>
							<text class="value">{{ taskDetail.planDepartureTime }}</text>
						</view>
						<view class="info-list-item">
							<text class="label">实际提货时间</text>
							<text class="value">{{ taskDetail.actualDepartureTime }}</text>
						</view>

						<view class="hr"></view>

						<view class="info-list-item">
							<text class="label">交付联系人</text>
							<text class="value">{{ taskDetail.finishHandoverName }}</text>
						</view>
						<view class="info-list-item">
							<text class="label">联系电话</text>
							<text class="value">{{ taskDetail.finishHandoverPhone }}</text>
						</view>
						<view class="info-list-item">
							<text class="label">预计送达时间</text>
							<text class="value">{{ taskDetail.planArrivalTime }}</text>
						</view>
						<view class="info-list-item">
							<text class="label">实际送达时间</text>
							<text class="value">{{ taskDetail.actualArrivalTime }}</text>
						</view>
					</view>
				</view>

				<view
					class="except-info panel"
					v-if="taskDetail.exceptionList && taskDetail.exceptionList.length > 0"
				>
					<view class="panel-title">异常信息</view>
					<view
						class="info-list"
						v-for="item in taskDetail.exceptionList"
						:key="item.exceptionTime"
					>
						<view class="info-list-item">
							<text class="label">上报时间</text>
							<text class="value">{{ item.exceptionTime }}</text>
						</view>
						<view class="info-list-item">
							<text class="label">异常类型</text>
							<text class="value">{{ item.exceptionType }}</text>
						</view>
						<view class="info-list-item">
							<text class="label">处理结果</text>
							<text class="value">{{ item.handleResult }}</text>
						</view>
					</view>
				</view>

				<view class="panel pickup-info">
					<view class="panel-title">提货信息</view>
					<view class="label">提货凭证</view>
					<view class="pictures">
						<image
							v-for="item in taskDetail.cargoPickUpPictureList"
							:key="item.url"
							class="picture"
							:src="item.url"
							mode=""
						></image>

						<view
							v-if="!taskDetail.cargoPickUpPictureList"
							class="picture-blank"
							>暂无图片</view
						>
					</view>
					<view class="label">货品照片</view>
					<view class="pictures">
						<image
							v-for="item in taskDetail.cargoPictureList"
							:key="item.url"
							class="picture"
							:src="item.url"
							mode=""
						></image>

						<view v-if="!taskDetail.cargoPictureList" class="picture-blank"
							>暂无图片</view
						>
					</view>
				</view>

				<view class="delivery-info panel">
					<view class="panel-title">交货信息</view>
					<view class="label">交货凭证</view>
					<view class="pictures">
						<image
							v-for="item in taskDetail.certificatePictureList"
							:key="item.url"
							class="picture"
							:src="item.url"
							mode=""
						></image>
						<view
							v-if="!taskDetail.certificatePictureList"
							class="picture-blank"
							>暂无图片</view
						>
					</view>
					<view class="label">货品照片</view>
					<view class="pictures">
						<image
							v-for="item in taskDetail.deliverPictureList"
							:key="item.url"
							class="picture"
							:src="item.url"
							mode=""
						></image>
						<view v-if="!taskDetail.deliverPictureList" class="picture-blank"
							>暂无图片</view
						>
					</view>
				</view>
			</view>
		</scroll-view>

		<view class="toolbar" v-if="taskDetail.status === 1">
			<navigator
				:url="`/subpkg_task/delay/index?id=${taskDetail.id}&planDepartureTime=${taskDetail.planDepartureTime}`"
				hover-class="none"
				class="button secondary"
				>延迟提货</navigator
			>
			<navigator
				:url="'/subpkg_task/pickup/index?id=' + id"
				hover-class="none"
				class="button primary"
				>提货</navigator
			>
		</view>
		<view class="toolbar" v-if="taskDetail.status === 2">
			<navigator
				:url="
					'/subpkg_task/except/index?transportTaskId=' +
					taskDetail.transportTaskId
				"
				hover-class="none"
				class="button secondary"
				>异常上报
			</navigator>
			<navigator
				:url="'/subpkg_task/delivery/index?id=' + taskDetail.id"
				hover-class="none"
				class="button primary"
				>交付</navigator
			>
		</view>
		<view class="toolbar" v-if="taskDetail.status === 4">
			<navigator
				:url="`/subpkg_task/record/index?transportTaskId=${taskDetail.transportTaskId}&actualDepartureTime=${taskDetail.actualDepartureTime}`"
				hover-class="none"
				class="button primary block"
				>回车登记</navigator
			>
		</view>
	</view>
</template>

<style lang="scss" scoped>
@import "./index.scss";
</style>
