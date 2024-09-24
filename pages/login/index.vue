<script setup>
import { ref, reactive, computed } from "vue";
import slAccount from "./components/account";
import slMobile from "./components/mobile";

/**
 * @description 当前登录类型
 * @type {ref<number>}
 * @default 0
 * @example 0 - 账号登录, 1 - 手机号登录
 * @author 钟富源
 */
const tabIndex = ref(0);
/**
 * @description 登录类型
 * @type {Array<{ title: string, subTitle: string }>}
 * @property {string} title - 标题
 * @property {string} subTitle - 副标题
 * @author 钟富源
 */
const tabMetas = reactive([
	{
		title: "账号登录",
		subTitle: "手机号登陆",
	},
	{
		title: "手机号登录",
		subTitle: "账号登录",
	},
]);

/**
 * @description 当前登录类型,根据tabIndex获取
 * @type {Object<{ title: string, subTitle: string }>}
 * @example { title: '账号登录', subTitle: '手机号登陆' }
 * @author 钟富源
 */
const tabMeta = computed(() => {
	return tabMetas[tabIndex.value];
});

/**
 * @description 切换登录类型
 * @example 0 -> 1, 1 -> 0
 * @returns {void}
 * @author 钟富源
 */
function changeLoginType() {
	tabIndex.value = Math.abs(tabIndex.value - 1);
}
</script>

<template>
	<view class="user-login">
		<view class="login-type">
			<view class="title">{{ tabMeta.title }}</view>
			<view class="type">
				<text @click="changeLoginType">{{ tabMeta.subTitle }}</text>
				<text class="iconfont icon-caret"></text>
			</view>
		</view>
		<sl-account v-if="tabIndex === 0"></sl-account>
		<sl-mobile v-else></sl-mobile>
	</view>
</template>

<style lang="scss" scoped>
@import "./index.scss";
</style>
