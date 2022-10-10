import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import './assets/css/global.css'
import './assets/fonts/iconfont.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
// 配置请求根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(ElementUI)
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
