import Vue from 'vue'
import VueRouter from "vue-router";

import adminIndex from "../views/back/adminIndex";
import adminLogin from "../views/back/adminLogin";
import adminList from "../components/back/adminList";
import userList from "../components/back/userList";
import addUser from "../components/back/addUser";
import foodTypeList from "../components/back/foodTypeList";
import addFoodType from "../components/back/addFoodType";
import foodList from "../components/back/foodList";
import addFood from "../components/back/addFood";


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
        {//用户模块
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
        },
        {
          path: '/foodTypeList',
          name: 'foodTypeList',
          component: foodTypeList,
          meta: {
            //未登录拦截
            requireAuth: true
          },
        },
        {
          path: '/addFoodType',
          name: 'addFoodType',
          component: addFoodType,
          meta: {
            //未登录拦截
            requireAuth: true
          },
        },
        {
          path: '/foodList',
          name: 'foodList',
          component: foodList,
          meta: {
            //未登录拦截
            requireAuth: true
          },
        },
        {
          path: '/addFood',
          name: 'addFood',
          component: addFood,
          meta: {
            //未登录拦截
            requireAuth: true
          },
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
