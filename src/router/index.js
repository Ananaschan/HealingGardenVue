import Vue from 'vue'
import VueRouter from "vue-router";

import adminIndex from "../views/back/adminIndex";
import adminLogin from "../views/back/adminLogin";
import adminList from "../components/back/adminList";
import userList from "../views/back/userList";
import addUser from "../views/back/addUser";
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
          component: adminList,
          meta: {
            //未登录拦截
            requireAuth: true
          }
        },
        {
          path: '/userList',
          name: 'userList',
          component: userList,
          meta: {
            //未登录拦截
            requireAuth: true
          }
        },
        {
          path: '/addUser',
          name: 'addUser',
          component: addUser,
          meta: {
            //未登录拦截
            requireAuth: true
          }
        }
      ],
      meta: {
        //未登录拦截
        requireAuth: true
      }
    },
    {//后台登录页
      path: '/adminLogin',
      name: 'adminLogin',
      component: adminLogin
    }
  ]
})
