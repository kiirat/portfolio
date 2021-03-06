import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import vuetify from './plugins/vuetify';
import store from './store'
import Axios from 'axios'

Vue.use(VueRouter)

Vue.config.productionTip = false

Vue.prototype.$http = Axios;
const token = localStorage.getItem('token')
if (token) {
  console.log(token)
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

// axios.defaults.baseURL = "/"

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
