import Vue from 'vue'
import App from './App.vue'
import './plugins/vant'
import 'amfe-flexible/index.js'
import router from './router'
import CustomInput from './components/customInput/index'
Vue.config.productionTip = false

Vue.use(CustomInput)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
