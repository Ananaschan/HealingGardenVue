import Vue from 'vue'
import VueRouter from "vue-router";

import test from "../components/test";
Vue.use(VueRouter);

export default new VueRouter({
  routes:[
    {
      path:'/test',
      name:'test',
      component:test
    }
  ]
})
