import { createApp } from 'vue'
import App from './App.vue'
// 引入路由配置
import router from './router/index'
// 引入store配置
import store from './store/index'
// 集成Element Plus框架
import ElementPlus from 'element-plus'

createApp(App).use(router).use(store).use(ElementPlus).mount('#app')
