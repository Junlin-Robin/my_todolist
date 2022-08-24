//该文件创建store

//引入vuex
import Vuex from "vuex"
//
import Vue from "vue"

import { nanoid } from "nanoid"
//
Vue.use(Vuex);

export default new Vuex.Store({
    actions: {
        login_checkuser(context, value) {
            const index = context.state.userlist.findIndex(item => {
                return item.user_name === value.user_name;
            });
            if (index === -1) {
                return alert("该用户不存在");
            };
            if (!context.state.userlist[index].user_password === value.user_password) {
                return alert("密码不正确，请重新输入！");
            };
            alert("登录成功！");
            context.commit("login", context.state.userlist[index]);
        },
        registry_checkuser(context, value) {
            const pattern = /^[a-zA-Z]\w{5,}$/;
            if (!pattern.test(value.user_name)) {
                return alert("用户名不合法：只允许以字母开头，合法字符位大小写英文字母和数字，用户名最少长度6位！");
            };
            if (context.state.userlist.some(item => {
                return item.user_name === value.user_name;
            })) {
                return alert("该用户名已经被注册！");
            };
            alert("注册成功！");
            context.commit("registry_adduser", value);
        },
        forgetpassword(context, userobj) {
            const index = context.state.userlist.findIndex(item => {
                return item.user_name === userobj.user_name;
            });
            if (index === -1) {
                return alert("该用户不存在");
            };
            context.state.userlist[index].user_password = userobj.user_password;
            localStorage.setItem("userlist", JSON.stringify(context.state.userlist));
            return alert('密码更改成功，请重新登录！')
        }
    },
    mutations: {
        selectbgc(state, value) {
            state.skin.forEach(element => {
                element.selected = "noselect";
            });
            state.skin[state.skin.findIndex(item => { return item.id === value.id })].selected = "isselect";
            localStorage.setItem("backgroundColor", JSON.stringify(state.skin));
        },
        addtodo(state, todoobj) {
            state.todo_list.push(todoobj);
        },
        changeshowlist(state, time) {
            state.showDate = new Date(time);
        },
        addShowMonthList(state, monthobj) {
            state.showMonthList = monthobj;
        },
        login(state, value) {
            state.login_user = value;
            localStorage.setItem("login_user", JSON.stringify(value));
            // state.todo_list = JSON.parse(localStorage.getItem(value.user_name)) || [];
        },
        registry_adduser(state, value) {
            state.userlist.push({ user_name: value.user_name, user_password: value.user_password, nickname: `新用户${nanoid().slice(0, 6)}`, pic: "data:image/webp;base64,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" });
            localStorage.setItem("userlist", JSON.stringify(state.userlist));
        },
        logout(state) {
            state.login_user = '';
        }
    },
    state: {
        skin: JSON.parse(localStorage.getItem("backgroundColor"))
            || [
                { id: '1', color: "yellow", selected: "noselect", name: "柠檬黄" },
                { id: '2', color: "blue", selected: "isselect", name: "天空蓝" },
                { id: '3', color: "green", selected: "noselect", name: "祖母绿" },
                { id: '4', color: "purple", selected: "noselect", name: "尊贵紫" }
            ],
        todo_list: JSON.parse(localStorage.getItem("todo_list")) || [],
        showDate: new Date(),
        showMonthList: [],
        login_user: JSON.parse(localStorage.getItem("login_user")) || "",
        userlist: JSON.parse(localStorage.getItem("userlist")) || [],
    },
    //类似计算属性
    getters: {
        show_list(state, getters) {
            return state.todo_list.filter((item) => {
                return item.user_name === state.login_user.user_name;
            })
        },
        showDateList(state, getters) {
            return getters.show_list.filter((item) => {
                return item.time === state.showDate.toLocaleDateString();
            })
        },
        showWaitTodo(state, getters) {
            return getters.showDateList.filter((item) => {
                return item.done === false;
            })
        },
        showHasDone(state, getters) {
            return getters.showDateList.filter((item) => {
                return item.done === true;
            })
        },
        changebgc(state) {
            return state.skin.filter((item) => {
                return item.selected === "isselect";
            })[0].color
        },

    }

})