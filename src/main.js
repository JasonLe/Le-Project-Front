import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import axios from './axios/axiosInstance'
import showdown from 'showdown';

const app = createApp(App).use(store).use(router).use(showdown).use(ElementPlus)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

app.mount('#app')
app.config.globalProperties.$axios=axios;  //配置axios的全局引用
