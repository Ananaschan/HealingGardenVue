import Vue from 'vue'
import VueRouter from "vue-router";

import adminIndex from "../views/back/adminIndex";
import adminLogin from "../views/back/adminLogin";
import adminList from "../components/back/adminList";
Vue.use(VueRouter);

export default new VueRouter({
  mode:'history',
  routes:[
    {//后台首页
      path: '/adminIndex',
      name: 'adminIndex',
      component: adminIndex,
      children:[
        {
          path: '/adminList',
          name: 'adminList',
          component: adminList
        }
      ]
    },
    {//后台登录页
      path: '/adminLogin',
      name: 'adminLogin',
      component: adminLogin
    },
    {//管理员列表

    }
  ]
})
