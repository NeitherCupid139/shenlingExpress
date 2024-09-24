import App from './App'
// 在项目启动的时候，加载我们自定义的utils对象
import '@/utils/utils.js'

// // #ifndef VUE3
// import Vue from 'vue'
// import './uni.promisify.adaptor'
// Vue.config.productionTip = false

// App.mpType = 'app'
// const app = new Vue({
//   ...App,
// })
// app.$mount()
// // #endif
// 1. 导入pinia的方法
import { createPinia } from 'pinia'
// 导入pinia的持久化数据组件
// import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { piniaPluginPersisitedstate } from '@/stores/persist.js'

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)

  // 2. 创建一个pinia的对象实例
  const pinia = createPinia()
  // 将持久化组件和pinia对象实例进行绑定
  // pinia.use(piniaPluginPersistedstate)
  pinia.use(piniaPluginPersisitedstate)

  app.use(pinia)
  return {
    app,
  }
}
// #endif
