<script setup>
/**
 * @description 清理缓存
 * @returns {void}
 * @todo 清理缓存
 * @author 钟富源
 */
function onClearCache() {
	console.log("清理缓存");
	// 清理缓存
	uni.clearStorage();
	uni.utils.toast("清理缓存成功", "success");
}
/**
 * @description 退出登录
 * @returns {void}
 * @todo 退出登录
 * @author 钟富源
 */
function logOut() {
	console.log("退出登录");
	uni.clearStorage();
	uni.utils.toast("退出登录成功", "success");
	// 跳转到登录页面
	uni.redirectTo({
		url: "/pages/login/index",
	});
}
</script>

<template>
	<view class="page-container">
		<view class="settings-list">
			<uni-list :border="false">
				<uni-list-item
					title="换绑手机"
					to="/subpkg_user/mobile/index"
					show-arrow
				/>
				<uni-list-item
					title="修改密码"
					to="/subpkg_user/password/index"
					show-arrow
				/>
				<uni-list-item
					title="消息通知设置"
					to="/subpkg_user/notify/index"
					show-arrow
				/>
				<uni-list-item
					title="清理缓存"
					@click="onClearCache()"
					show-arrow
					link
				/>
			</uni-list>
		</view>
		<button @click="logOut()" class="logout-button">退出</button>
	</view>
</template>

<style lang="scss" scoped>
@import "./index.scss";
</style>
