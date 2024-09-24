<script setup>
// 引入uniFetch，用于请求服务器接口
import { uniFetch } from "@/apis/uni-fetch.js";
import { ref, reactive } from "vue";
// 引入useUserStore，用于存储token
import { useUserStore } from "@/stores/users.js";
/**
 * @description 表单实例，用于表单数据验证
 * @type {ref<UniForm>}
 * @author 钟富源
 */
const accountForm = ref();

/**
 * @description 表单数据
 * @type {Object<{ account: string, password: string }>}
 * @property {string} account - 登录账号
 * @property {string} password - 登录密码
 * @example { account: 'ecut66', password
 * @author 钟富源
 */
const formData = reactive({
	account: "ecut66",
	password: "123456",
});

/**
 * @description 表单验证规则
 * @description 如果验证通过，返回表单数据，否则显示错误信息
 * @type {Object<{ account: { rules: Array<{ required: boolean, errorMessage: string }> }, password: { rules: Array<{ required: boolean, errorMessage: string }> } }>}
 * @property {Array<{ required: boolean, errorMessage: string }>} account.rules - 登录账号验证规则
 * @property {Array<{ required: boolean, errorMessage: string }>} password.rules - 登录密码验证规则
 * @author 钟富源
 */
const accountRules = reactive({
	account: {
		rules: [
			{ required: true, errorMessage: "请输入登录账号" },
			{ pattern: "^[a-zA-Z0-9]{6,8}$", errorMessage: "登录账号格式不正确" },
		],
	},
	password: {
		rules: [
			{ required: true, errorMessage: "请输入登录密码" },
			{ pattern: "^\\d{6}$", errorMessage: "登录密码格式不正确" },
		],
	},
});

/**
 * @description 表单提交事件
 * @returns {Promise<void>}
 * @throws {Error} 验证失败
 * @author 钟富源
 */
async function onFormSubmit() {
	// 验证通过
	try {
		const formData = await accountForm.value.validate(); // 获取表单数据
		let res = await uniFetch.post("/driver/login/account", formData); // 发送登陆请求
		const token = res.data.data; // 获取token
		const store = useUserStore(); // 将res.data.data中的token存储起来
		store.token = token; //向仓库保存一个token并且持久化
		// 跳转到任务列表页面，uni.switchTab是跳转到tabBar页面
		uni.switchTab({
			url: "/pages/task/index",
		});
	} catch (err) {
		// 验证失败
		console.log("验证失败：", err);
	}
}
</script>

<template>
	<uni-forms
		class="login-form"
		ref="accountForm"
		:model="formData"
		:rules="accountRules"
	>
		<uni-forms-item name="account">
			<input
				type="text"
				placeholder="请输入账号"
				v-model="formData.account"
				class="uni-input-input"
				placeholder-style="color: #818181"
			/>
		</uni-forms-item>
		<uni-forms-item name="password">
			<input
				type="text"
				placeholder="请输入密码"
				class="uni-input-input"
				v-model="formData.password"
				placeholder-style="color: #818181"
			/>
		</uni-forms-item>
		<button class="submit-button" @click="onFormSubmit">登录</button>
	</uni-forms>
</template>

<style lang="scss" scoped>
@import "./styles.scss";
</style>
