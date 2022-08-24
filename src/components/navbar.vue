<template>
  <!-- 左侧导航区 -->
  <aside>
    <div class="username">
      <!-- 头像 -->
      <div class="userpic" ref="userpic" :style="'background-image:url('+login_user.pic+')'"></div>
      <span>{{ login_user.nickname }}</span>
    </div>
    <div class="navbar">
      <ul>
        <router-link to="/waitTodo" :active-class="'r' + this.changebgc"
          ><li><span class="waitTodo"></span>我的待办</li></router-link
        >
        <router-link to="/statics" :active-class="'r' + this.changebgc"
          ><li><span class="statics"></span>数据统计</li></router-link
        >
        <router-link to="/options" :active-class="'r' + this.changebgc"
          ><li><span class="options"></span>设置</li></router-link
        >
        <router-link to="/informations" :active-class="'r' + this.changebgc"
          ><li><span class="about"></span>关于</li></router-link
        >
      </ul>
    </div>
    <div class="emergency">
      <p>分类</p>
      <ul>
        <li @click.prevent="searchdanger"><span class="danger"></span><a href="#">紧急</a></li>
        <li @click.prevent="searchimportant"><span class="important"></span><a href="#">重要</a></li>
        <li @click.prevent="searchnormal"><span class="normal"></span><a href="#">一般</a></li>
      </ul>
    </div>
  </aside>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  name: "navbar",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["changebgc","showWaitTodo","showHasDone"]),
    ...mapState(["login_user"]),
  },
  methods:{
    searchdanger(){
    
    },
    searchimportant(){

    },
    searchnormal(){

    }
  },
  mounted() {
    if (!this.login_user.nickname) {
      this.$router.push("/");
    }
  },
};
</script>

<style scoped>
aside {
  background-color: white;
  flex: 0 0 220px;
  position: relative;
  /* height: 100vh; */
  overflow: scroll;
}
.username {
  margin: 50px 15px 60px 30px;
  height: 50px;
  white-space: nowrap;
}
.userpic {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid black;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: inline-block;
  vertical-align: middle;
}
.username span {
  display: inline-block;
  vertical-align: bottom;
  margin-left: 10px;
  font-size: 25px;
  font-weight: 500;
  width: 130px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.navbar,
.emergency {
  margin: 40px 20px 80px 25px;
  text-align: left;
}
.navbar li:hover,
.emergency li:hover {
  background-color: rgba(175, 175, 175, 0.25);
  transition: all linear 0.15s;
}
.navbar li,
.emergency li {
  list-style-type: none;
  border-radius: 8px 8px;
  margin-bottom: 15px;
}
.navbar li span,
.emergency li span {
  margin: 5px 20px;
  width: 25px;
  height: 25px;
  display: inline-block;
  background-size: cover;
  background-position: center;
  vertical-align: middle;
}
.navbar a,
.emergency a {
  text-decoration: none;
  color: rgb(60, 60, 60);
  font-size: 14px;
  font-weight: 400;
}
.emergency p {
  font-size: 13px;
  color: rgb(202, 202, 202);
  font-weight: bold;
  margin-bottom: 10px;
  font-family: "Courier New", Courier, monospace;
}
.waitTodo {
  background-image: url("../assets/svg/icon-todo.svg");
}
.statics {
  background-image: url("../assets/svg/icon-form.svg");
}
.options {
  background-image: url("../assets/svg/icon-setting.svg");
}
.about {
  background-image: url("../assets/svg/icon-about.svg");
}
.danger {
  background-image: url("../assets/svg/icon-danger.svg");
  background-size: cover;
  background-repeat: no-repeat;
}
.important {
  background-image: url("../assets/svg/icon-important.svg");
}
.normal {
  background-image: url("../assets/svg/icon-normol.svg");
}
.ryellow li {
  background-color: rgb(253, 254, 228);
}
.rblue li {
  background-color: rgb(232, 237, 253);
}
.rgreen li {
  background-color: rgb(229, 255, 227);
}
.rpurple li {
  background-color: rgb(239, 228, 250);
}
</style>