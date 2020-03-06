import VueRouter from 'vue-router'

import Login from "./components/Login.vue"
import Register from "./components/Register.vue"
import Account from "./components/Account.vue"
import List from './components/List.vue'


var router = new VueRouter({
    routes: [{
            path: '/account',
            component: Account,
            children: [
                
                {
                    path: '/login',
                    component: Login
                },
                {
                    path: '/register',
                    component: Register
                }
            ]
        },
        {
            path: '/list',
            component: List
        }
    ]
});

export default router;