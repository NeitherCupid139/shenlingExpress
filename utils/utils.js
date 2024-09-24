const utils = {
  // title：表示提示用户的信息是什么。默认提示语：
  // icon：表示提示面板中显示的图标名称是什么，none(没有图标),success（成功）,error,fail（失败）,exception（警告）等
  toast(title = '数据加载失败！', icon = 'none') {
    uni.showToast({
      title: title,
      icon: icon,
      mask: true, //开启遮罩层
    })
  },
}

// 将utils对象挂载到全局变量 uni命名空间上(对象)
uni.utils = utils
