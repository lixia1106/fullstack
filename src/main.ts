import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css' // 引入样式文件
import * as ElementPlusIconsVue from '@element-plus/icons-vue' // 引入图标
import App from './App.vue'

const app = createApp(App)

// 全局注册图标 (方便以后直接用)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(ElementPlus)
app.mount('#app')