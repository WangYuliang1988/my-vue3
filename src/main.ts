import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// 从一个单文件组件中导入根组件
import App from './App.vue'

import router from './router'

// 每个 Vue 应用都是通过 createApp 函数创建一个新的应用实例
// 传入 createApp 函数的是 Vue 应用的根组件，Vue 应用中包含的其它组件将作为根组件的子组件
const app = createApp(App)

app.use(createPinia())
app.use(router)

// 应用实例必须在调用 mount() 函数进行挂载后才会渲染出来
// mount() 接收一个“容器”参数，可以是一个实际的 DOM 元素字符串或一个 CSS 选择器字符串
// 根组件的内容将会被渲染在容器元素里面，容器元素自己不会被视为应用的一部分
// mount() 应该在整个应用配置和资源注册完成后被调用，其返回值是根组件实例（即根组件 this）
app.mount('#app')

// 注：应用实例并不只限于一个，createApp 允许在同一个页面中创建多个共存的 Vue 应用