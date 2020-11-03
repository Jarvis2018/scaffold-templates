import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'normalize.css'
import './vant'
import './utils/filters'
import './styles/index.scss'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
