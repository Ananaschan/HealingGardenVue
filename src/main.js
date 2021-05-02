import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import qs from 'qs'
import store from './store';

Vue.use(VueAxios, axios)
Vue.use(ElementUI)
Vue.prototype.$qs = qs

axios.defaults.baseURL = 'http://localhost:8081/api'
Vue.prototype.$axios = axios
Vue.config.productionTip = false


router.beforeEach((to, from, next) => {
  //路由中是否开启requireAuth
  if (to.meta.requireAuth) {
    //state中是否保存了登录的用户？
    if (store.state.admin.userName) {
      //找到了 放行
      next()
    } else {
      //没找到 跳转至登录页
      next({
        path: 'adminLogin',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    //没开启requireAuth 放行
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  components: { App },
  template: '<App/>'
})
