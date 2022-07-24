import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import installElementPlus from './plugins/element'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

//websocket
import socket from './utils/io'

const app = createApp(App)
installElementPlus(app)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(socket, {connection: 'ws://localhost:4321',
    opinion: {query: {}, transports: ['websocket', 'polling'], timeout: 5000,}})

app.use(router).mount('#app')
