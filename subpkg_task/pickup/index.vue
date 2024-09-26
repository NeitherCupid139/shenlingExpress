<script setup>
import { ref, computed } from "vue";
import { onLoad } from "@dcloudio/uni-app";
import taskApi from "@/apis/task.js";
const id = ref(0);
onLoad((params) => {
	id.value = params.id;
});
/**
 * @author 陈雨虹
 */
// 提货凭证图片
const receiptPictrues = ref([]);
const cargoPickUpPictureList = computed(() => {
	return receiptPictrues.value.map((item) => {
		return { url: item.url };
	});
});
// 货品图片
const goodsPictrues = ref([]);
const cargoPictureList = computed(() => {
	return goodsPictrues.value.map((item) => {
		return { url: item.url };
	});
});

// 准备一个计算属性来计算当前是否可点击
const enableSubmit = computed(() => {
	return receiptPictrues.value.length > 0 && goodsPictrues.value.length > 0;
});

async function onSubmitForm() {
	// task.js中定义方法，完成提交
	let obj = {
		id: id.value,
		cargoPickUpPictureList: cargoPickUpPictureList.value,
		cargoPictureList: cargoPictureList.value,
	};
	console.log(obj);
	await taskApi.pickup(obj);
	uni.utils.toast("提货成功", "success");
	//跳转到提货列表
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
				title="请拍照上传回单凭证"
				v-model="receiptPictrues"
			></uni-file-picker>
			<uni-file-picker
				limit="3"
				title="请拍照上传货品照片"
				v-model="goodsPictrues"
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

	&[disabled],
	&.disabled {
		color: #fff;
		background-color: #fadcd9;
	}
}
</style>
