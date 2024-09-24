<script setup>
import { ref, computed, reactive } from "vue";
import { onLoad } from "@dcloudio/uni-app";
import taskApi from "@/apis/task.js";
// 准备响应式变量
const transportTaskId = ref(0);
const exceptionTypeArr = [];
const exceptionType = ref(""); //异常类型
const exceptionDescribe = ref(""); //异常描述
const exceptionImagesList = ref([]); //异常图片
const timePicker = ref(""); // 异常日期

/**
 * @description 获取任务id
 * @returns {void}
 * @param {Object} query - url传入的参数
 * @todo 获取url传入的参数
 * @author 钟富源
 */
onLoad((query) => {
	transportTaskId.value = query.transportTaskId;
});
// 组件 ref
const popup = ref(null);
// 文件提示
const exceptTime = computed(() => {
	return timePicker.value || "请选择";
});

// 异常的位置
const exceptionPlace = ref("");

// 打开地图
async function onLocationChoose() {
	// 用来自动选择地图中的位置信息
	let location = await uni.chooseLocation({});
	exceptionPlace.value = location.address;
	console.log(location);
}

// 点击类型弹层确认按钮
function onPopupConfirm() {
	// 获取用户勾选的异常类型

	popup.value.close();
}

// 打开弹层
function onPopupOpen() {
	// 打开了一个面板
	popup.value.open();
}

// 定义 popup 组件展示的数据
const exceptionTypes = reactive([
	{ text: "发动机启动困难", checked: true },
	{ text: "不着车，漏油", checked: false },
	{ text: "照明失灵", checked: false },
	{ text: "排烟异常、温度异常", checked: false },
	{ text: "其他问题", checked: false },
]);

// 监听用户选择类型
function onCheckboxChange(item) {
	// console.log(item)
	// 根据用户传入的item:{text:'',checked:true/false}来计算我们需要的数据

	// 判断exceptionTypeArr中如果不存在当前用户勾选的数据则添加
	if (!exceptionTypeArr.includes(item.text)) {
		exceptionTypeArr.push(item.text);
	}

	exceptionType.value = exceptionTypeArr.join(",");
	// console.log(exceptionTypeArr)
}

// 上报异常信息
async function onFormSubmit() {
	let obj = {
		transportTaskId: transportTaskId.value,
		exceptionTime: timePicker.value,
		exceptionPlace: exceptionPlace.value,
		exceptionType: exceptionType.value,
		exceptionDescribe: exceptionDescribe.value,
		exceptionImagesList: exceptionImagesList.value,
	};

	let res = await taskApi.except(obj);
	uni.switchTab({
		url: "/pages/task/index",
	});
}
</script>

<template>
	<view class="page-container">
		<scroll-view class="scroll-view" scroll-y>
			<view style="margin: 30rpx" class="scroll-view-wrapper">
				<uni-list :border="false">
					<uni-list-item show-arrow title="异常时间">
						<template v-slot:footer>
							<uni-datetime-picker v-model="timePicker">
								<view class="picker-value">{{ exceptTime }}</view>
							</uni-datetime-picker>
						</template>
					</uni-list-item>

					<uni-list-item
						show-arrow
						clickable
						ellipsis="1"
						@click="onLocationChoose"
						title="上报位置"
						:rightText="exceptionPlace"
					/>
					<uni-list-item
						show-arrow
						clickable
						@click="onPopupOpen"
						title="异常类型"
						:rightText="exceptionType"
					/>

					<uni-list-item direction="column" title="异常描述">
						<template v-slot:footer>
							<view class="textarea-wrapper">
								<textarea
									v-model="exceptionDescribe"
									class="textarea"
									maxlength="50"
									placeholder="请输入异常描述"
								></textarea>
								<view class="words-count"
									>{{ exceptionDescribe.length }}/50</view
								>
							</view>
						</template>
					</uni-list-item>
					<uni-list-item
						:border="false"
						style="margin-top: -30rpx"
						direction="column"
						title="上传图片（最多6张）"
					>
						<template v-slot:footer>
							<uni-file-picker
								limit="6"
								v-model="exceptionImagesList"
							></uni-file-picker>
						</template>
					</uni-list-item>
				</uni-list>
			</view>
		</scroll-view>
		<view class="fixbar">
			<button class="button" @click="onFormSubmit">提交</button>
		</view>
		<!-- 异常类型弹层 -->
		<uni-popup ref="popup" :mask-click="false" type="bottom">
			<uni-list class="popup-action-sheet">
				<uni-list-item>
					<template v-slot:header>
						<view class="header">选择类型</view>
					</template>
				</uni-list-item>
				<uni-list-item
					v-for="(item, index) in exceptionTypes"
					:title="item.text"
				>
					<template v-slot:footer>
						<checkbox-group class="checkbox" @change="onCheckboxChange(item)">
							<checkbox color="#EF4F3F" />
						</checkbox-group>
					</template>
				</uni-list-item>

				<uni-list-item>
					<template v-slot:body>
						<button @click="onPopupConfirm" class="button">确定</button>
					</template>
				</uni-list-item>
			</uni-list>
		</uni-popup>
	</view>
</template>

<style lang="scss" scoped>
@import "./index.scss";
</style>
