<script setup>
  // 1. 导入请求包
  import msgApi from '@/apis/message.js'
  // 2. 页面加载完成后请求数据交给响应式变量
  import { onMounted, ref } from 'vue'
  const list = ref([])
  onMounted(async () => {
    let res = await msgApi.list(200)
    // 3. 将响应式数据绑定到模版属性中
    list.value = res.data.data.items
  })
</script>
<template>
  <scroll-view class="scroll-view" refresher-enabled scroll-y>
    <view class="scroll-view-wrapper">
      <view class="message-action">
        <text class="iconfont icon-clear"></text>
        全部已读
      </view>
      <uni-list :border="false">
        <uni-list-item
          v-for="item in list"
          :key="item.id"
          to="/subpkg_message/content/index"
          ellipsis="1"
          :title="item.title"
          :rightText="item.created"
        >
          <template v-slot:header>
            <text class="dot"></text>
          </template>
        </uni-list-item> </uni-list
    ></view>
  </scroll-view>
</template>

<style lang="scss" scoped>
  @import './styles.scss';
</style>
