<!-- 任务通知页面 -->
<script setup>
  // 页面进入之后调用list方法获取数据
  import messageApi from '@/apis/message.js'
  import { onMounted, ref } from 'vue'
  const list = ref([]) //定义一个数组类型的响应式数据
  const isTriggered = ref(false)
  let page = 1 //当前的页数
  onMounted(async () => {
    let res = await messageApi.list()
    list.value = res.data.data.items
    // console.log(res.data.data.items)
  })

  // 上拉刷新（触底触发的函数）

  async function onScrollToLower() {
    page++ // 增加页面数量
    // 将新的页码对应的数据加载回来
    let res = await messageApi.list(201, page, 10)
    // 判断如果没有数据，则不追加，否则追加
    if (res.data.data.items) {
      // 使用数组的push方法，将服务器最新的数据追加到页面的最下方
      list.value.push(...res.data.data.items)
      console.log('已经触底...', page)
    }
  }

  // 下拉刷新
  async function onScrollViewRefresh() {
    // 重新请求第一页数据，将来接口有新数据我们就可以获取最新数据
    // 温馨提示：由于我们的接口没有人维护数据，所以第1页数据是老数据
    console.log('下拉刷新触发...')
    // 将page重置为1
    isTriggered.value = true //打开下拉刷新动画
    page = 1
    let res = await messageApi.list(201, page, 10)
    list.value = res.data.data.items
    isTriggered.value = false //关闭下拉刷新动画
  }
</script>
<template>
  <scroll-view
    class="scroll-view"
    scroll-y
    @scrolltolower="onScrollToLower"
    refresher-enabled
    @refresherrefresh="onScrollViewRefresh"
    :refresher-triggered="isTriggered"
  >
    <view class="scroll-view-wrapper">
      <view class="message-action">
        <text class="iconfont icon-clear"></text>
        全部已读
      </view>
      <uni-card
        :border="false"
        :is-shadow="false"
        v-for="item in list"
        :key="item.id"
      >
        <view class="brief">{{ item.content }}</view>
        <view class="extra">
          <text class="time">{{ item.created }}</text>
          <navigator
            hover-class="none"
            class="link"
            url="/subpkg_message/content/index"
            >查看详情</navigator
          >
        </view>
        <template v-slot:title>
          <view class="title unread">{{ item.title }}</view>
        </template>
      </uni-card>

      <view v-if="false" class="message-blank">暂无消息</view>
    </view>
  </scroll-view>
</template>

<style lang="scss" scoped>
  @import './styles.scss';
</style>
