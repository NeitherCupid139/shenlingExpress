<script setup>
  // 1. 导入ajax请求封装包
  import { uniFetch } from '@/apis/uni-fetch.js'

  // 2. 在页面加载之后发出请求拿到数据后回显到页面
  // 2.1 导入生命周期函数 onMouted
  import { onMounted, ref } from 'vue'
  // 2.2 使用ref定义一个响应式变量
  const truchInfo = ref({})
  // 2.3 生命周期函数中GET请求URL地址：/driver/users/truck 拿到数据赋值给响应式变量
  onMounted(async () => {
    let res = await uniFetch.get('/driver/users/truck')
    truchInfo.value = res.data.data
    console.log(res.data.data)
  })
</script>

<template>
  <view class="page-container">
    <!-- 1. 汽车图片轮播图组件 -->
    <swiper
      class="truck-pictures"
      indicator-active-color="#fff"
      circular
      indicator-dots
    >
      <swiper-item v-for="img in truchInfo.pictureList" :key="img.url">
        <image class="picture" mode="aspectFill" :src="img.url"></image>
      </swiper-item>
    </swiper>
    <view class="truck-meta">
      <uni-list :border="false">
        <uni-list-item
          :border="false"
          title="车辆编号"
          :rightText="truchInfo.id"
        />
        <uni-list-item
          :border="false"
          title="车辆号牌"
          :rightText="truchInfo.licensePlate"
        />
        <uni-list-item
          :border="false"
          title="车型"
          :rightText="truchInfo.truckType"
        />
        <uni-list-item
          :border="false"
          title="所属机构"
          :rightText="truchInfo.currentOrganName"
        />
        <uni-list-item
          :border="false"
          title="载重"
          :rightText="truchInfo.allowableLoad"
        />
      </uni-list>
    </view>
  </view>
</template>

<style lang="scss" scoped>
  @import './index.scss';
</style>
