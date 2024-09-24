// 职责：帮助我们来封装uni-app-fetch的网络请求
// 封装步骤：
// 1. // 导入安装好的 uni-app-fetch 模块
import { createUniFetch } from 'uni-app-fetch'
import { useUserStore } from '@/stores/users.js'

// 2. // 配置符合自身业务的请求对象
export const uniFetch = createUniFetch({
  loading: { title: '正在加载中...' },
  baseURL: 'https://slwl-api.itheima.net', //同常配置的是接口地址的域名
  intercept: {
    // 请求拦截器
    request(options) {
      // 后续补充实际逻辑
      // 请求拦截器里面，就可以增加一个请求头，将登录接口拿到的token传递给服务器
      const store = useUserStore()
      const token = store.token
      const defaultHeaders = {
        Authorization: token,
      }
      options.header = Object.assign({}, defaultHeaders, options.header)

      return options // return不能省，否则请求失败
    },
    // 响应拦截器
    response(result) {
      // console.log('响应：', result)
      // 后续补充实际逻辑

      // 如果服务器响应回来的状态码为401，则提示用户登录失效，并且跳转到登录页面
      if (result.statusCode === 401) {
        uni.utils.toast('登录失效，请重新登录')
        uni.redirectTo({
          url: '/pages/login/index',
        })
      }

      return result // return不能省，否则响应失败
    },
  },
})
