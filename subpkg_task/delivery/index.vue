<script setup>
import { ref, computed } from "vue";
import { onLoad } from "@dcloudio/uni-app";
import taskApi from "@/apis/task.js";
// 提货凭证照片
const receiptPictrues = ref([]);
// 提货商品照片
const goodsPictrues = ref([]);

// 使用计算属性来计算出当前上传的凭证图片，返回url
const receiptPictruesComputed = computed(() => {
	return receiptPictrues.value.map((item) => {
		return { url: item.url };
	});
});

const goodsPictruesComputed = computed(() => {
	return goodsPictrues.value.map((item) => {
		return { url: item.url };
	});
});

// 使用计算属性来计算出当前提交按钮是否可以点击
// 凭证和商品都至少上传一张图片
const enableSubmit = computed(() => {
	// 如果两个数组长度均大于0，则返回true，否则返回false
	return receiptPictrues.value.length > 0 && goodsPictrues.value.length > 0;
});

let id = ref(0);
onLoad((params) => {
	id = params.id;
});

/**
 * @description 提交表单
 * @returns {void}
 * @todo 提交表单
 * @author 钟富源
 */
async function onSubmitForm() {
	// 准备好提交的数据
	let obj = {
		id: id,
		deliverPictureList: receiptPictruesComputed.value,
		certificatePictureList: goodsPictruesComputed.value,
	};
	// 提交
	await taskApi.deliver(obj);
	uni.utils.toast("交付成功", "success");
	// 跳转到任务列表
	uni.switchTab({
		url: "/pages/task/index",
	});
}
</script>

<template>
	<view class="page-container">
		<view class="receipt-info">
			<uni-file-picker
				limit="3"
				v-model="receiptPictrues"
				title="请拍照上传回单凭证"
			></uni-file-picker>
			<uni-file-picker
				limit="3"
				v-model="goodsPictrues"
				title="请拍照上传货品照片"
			></uni-file-picker>
		</view>

		<button :disabled="!enableSubmit" class="button" @click="onSubmitForm">
			提交
		</button>
	</view>
</template>

<style lang="scss" scoped>
.page-container {
	padding: 30rpx;
}

.receipt-info {
	min-height: 600rpx;
	background-color: #fff;
	padding: 20rpx 30rpx;
	border-radius: 16rpx;

	::v-deep .uni-file-picker {
		margin-bottom: 30rpx;
	}
}

.button {
	height: 100rpx;
	text-align: center;
	line-height: 100rpx;
	/* #ifdef APP */
	padding-top: 4rpx;
	/* #endif */
	border-radius: 100rpx;
	margin-top: 60rpx;
	color: #fff;
	font-size: $uni-font-size-big;
	background-color: $uni-primary;

	&[disabled] {
		color: #fff;
		background-color: #fadcd9;
	}
}
</style>
