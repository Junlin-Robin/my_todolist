//创建整个应用的路由器
import VueRouter from 'vue-router';
//引入组件
import waitTodo from "../components/waitTodo.vue";
import statics from "../components/statics.vue";
import options from "../components/options.vue";
import informations from "../components/informations.vue";
import todolist from "../components/todolist.vue";
import login from "../components/login.vue"


//配置路由
export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: "/login"
        },
        {
            path: '/login',
            component: login,
        },
        {
            path: '/todolist',
            component: todolist,
            children: [
                {
                    path: '/todolist',
                    redirect: "/waitTodo"
                },
                {
                    path: '/waitTodo',
                    component: waitTodo,
                },
                {
                    path: '/statics',
                    component: statics
                },
                {
                    path: '/options',
                    component: options
                },
                {
                    path: '/informations',
                    component: informations
                }
            ]
        }
    ]
})