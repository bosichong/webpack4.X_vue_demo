//导入Vue
import Vue from "vue";

//导入路由配置
import VueRouter from "vue-router";

// 安装路由
Vue.use(VueRouter);

import App from "./components/App.vue";
import router from './router';

//导入 cdn的jQuery
import $ from 'jquery';



var vm = new Vue({
    el: '#app',
    render: c => c(App),
    router

});

$('#root').css('background-color','red');