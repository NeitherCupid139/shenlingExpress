<script setup>
  import { ref } from 'vue'
  import { useTaskStore } from '@/stores/task.js'
  const taskStore = useTaskStore()

  // 当前被选中选项的索引值
  const tabIndex = ref(-1)

  // 接收传入组件的数据
  const props = defineProps({
    types: Array,
    datakey: String, // 字段名称
  })

  // 点击选中选项
  function onOptionSelect(index, item) {
    // item格式：{id:'',text:''}
    // 高亮显示选中的选项
    tabIndex.value = index
    console.log(props.datakey, item)
    // 将用户选择的数据id赋值给仓库对应属性中
    taskStore.recordData[props.datakey] = item.id
  }
</script>

<template>
  <view class="vehicle-options">
    <view
      class="option"
      :class="{ active: tabIndex === index }"
      v-for="(option, index) in props.types"
      :key="option.id"
      @click="onOptionSelect(index, option)"
    >
      {{ option.text }}
    </view>
  </view>
</template>

<style lang="scss" scoped>
  .vehicle-options {
    display: flex;
    flex-wrap: wrap;
    font-size: $uni-font-size-small;

    .option {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 180rpx;
      height: 70rpx;
      padding-top: 1rpx;
      margin-top: 30rpx;
      margin-right: 38rpx;
      color: $uni-secondary-color;
      border: 2rpx solid $uni-bg-color;
      background-color: $uni-bg-color;
      border-radius: 20rpx;

      &:nth-child(3n) {
        margin-right: 0;
      }

      &.active {
        color: $uni-primary;
        border: 2rpx solid $uni-primary;
        background-color: #ffe0dd;
      }
    }
  }
</style>
