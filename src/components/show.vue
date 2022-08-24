<template>
  <!-- 中间展示区 -->
  <main>
    <div class="calendar">
      <!-- 新建待做事项 -->
      <div class="calendarTitle">
        <p class="calendarvuep">我的待办</p>
        <input type="text" class="search" placeholder="请输入查找内容..." />
        <div class="add_div" v-show="false" ref="add_div">
          <div>
            <p>新建待办</p>
            <button @click.prevent="qulify">确定</button>
            <button @click.prevent="cancel">取消</button>
          </div>
          <input
            class="add_todo"
            type="text"
            placeholder="请输入内容..."
            @keyup.enter="add_done"
            ref="add_todo"
          />
          <div>
            <span @click="addemergency" ref="addemergency"></span
            ><span @click="addimportant" ref="addimportant"></span
            ><span @click="addnormal" ref="addnormal"></span>
          </div>
        </div>
      </div>
      <div class="calendarvue">
        <Calendar />
      </div>
    </div>
    <div class="list_todo">
      <div class="positionoption">
        <a href="#" @click.prevent="show_waitTodo" ref="show_waitTodo"
          >待办事项</a
        >
        <i>|</i>
        <a href="#" @click.prevent="show_hasDone" ref="show_hasDone"
          >已办事项</a
        >
        <button
          id="add_list_todo"
          @click="add_list_todo"
          :class="this.changebgc"
        >
          <span>新建事项&nbsp&nbsp</span>+
        </button>
      </div>

      <div class="waitnull" ref="waitnull">
        <div
          class="waitnullpic"
          :class="'pic' + this.changebgc"
          ref="waitnullpic"
        ></div>
        <p>当前暂无未完成事项</p>
      </div>
      <div class="donenull" ref="donenull">
        <div class="donenullpic" :class="'pic' + this.changebgc"></div>
        <p>当前暂无已完成事项</p>
      </div>
      <!-- 待办事项 -->
      <ul ref="showWaitTodoTodo" :class="'quu' + this.changebgc">
        <li v-for="item in this.showWaitTodo" :key="item.id">
          <div :class="item.emergency" class="showemergency"></div>
          <label class="isdone">
            <input type="checkbox" v-model="item.done" />
            <span></span>
          </label>
          <span v-show="!item.isEdit" id="show_list">{{ item.list_todo }}</span>
          <input
            id="inputTitle"
            v-show="item.isEdit"
            type="text"
            :value="item.list_todo"
            @blur="handleBlur($event, item)"
            @keyup.enter="handleBlur($event, item)"
            ref="inputTitle"
          />
          <button
            v-show="!item.isEdit"
            @click="modify(item)"
            class="modify"
          ></button>
          <button @click="del(item.id)" class="delete"></button>
        </li>
      </ul>
      <ul ref="showHasdone" v-show="false" :class="'quu' + this.changebgc">
        <!-- 已办事项 -->
        <li v-for="item in this.showHasDone" :key="item.id">
          <div :class="item.emergency" class="showemergency"></div>
          <label class="isdone">
            <input type="checkbox" checked="checked" disabled />
            <span></span>
          </label>
          <span id="show_list">{{ item.list_todo }}</span>
          <button @click="del(item.id)" class="delete"></button>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
import { nanoid } from "nanoid";
import Calendar from "./Calender.vue";
import { mapGetters, mapState } from "vuex";

export default {
  name: "show",
  data() {
    return {
      emergency: "normal",
    };
  },
  components: {
    Calendar,
  },
  computed: {
    //监测vuex中数据变化
    ...mapState(["todo_list", "login_user", "userlist"]),
    ...mapGetters(["changebgc", "showWaitTodo", "showHasDone", "show_list"]),
    todolistLength: {
      get() {
        return this.waitTodoLength + this.hasDoneLength;
      },
    },
    waitTodoLength: {
      get() {
        return this.showWaitTodo.filter((item) => {
          return item.done !== true;
        }).length;
      },
    },
    hasDoneLength: {
      get() {
        return this.showHasDone.filter((item) => {
          return item.done === true;
        }).length;
      },
    },
  },
  methods: {
    add_list_todo() {
      this.$refs.add_div.style = "display:block";
      this.$nextTick(() => {
        this.$refs.add_div.style.transform = "translate(-50%, 5%)";
      });
      this.$refs.add_todo.focus();
      this.$bus.$emit("onmask", true);
    },
    add_done(e) {
      // 将用户输入包装成为对象
      if (e.target.value.trim() === "") {
        alert("请输入内容");
        this.$refs.add_div.style = "display:none";
        this.$bus.$emit("onmask", false);
      } else {
        const todoobj = {
          id: nanoid(),
          user_name: this.login_user.user_name,
          list_todo: e.target.value.trim(),
          done: false,
          time: this.$store.state.showDate.toLocaleDateString(),
          emergency: this.emergency,
        };
        this.$store.commit("addtodo", todoobj);
        this.$refs.add_todo.value = "";
        this.$refs.add_div.style = "display:none";
        this.$bus.$emit("onmask", false);
        this.show_waitTodo();
      }
    },
    qulify() {
      // 将用户输入包装成为对象
      if (this.$refs.add_todo.value.trim() === "") {
        alert("请输入内容");
        this.$refs.add_div.style = "display:none";
        this.$bus.$emit("onmask", false);
      } else {
        const todoobj = {
          id: nanoid(),
          user_name: this.login_user.user_name,
          list_todo: this.$refs.add_todo.value.trim(),
          done: false,
          time: this.$store.state.showDate.toLocaleDateString(),
          emergency: this.emergency,
        };
        this.$store.commit("addtodo", todoobj);
        this.$refs.add_todo.value = "";
        this.$refs.add_div.style = "display:none";
        this.$bus.$emit("onmask", false);
        this.show_waitTodo();
      }
    },
    cancel() {
      this.$refs.add_div.style = "display:none";
      this.$bus.$emit("onmask", false);
    },
    modify(item) {
      if (item.hasOwnProperty("isEdit")) {
        item.isEdit = true;
      } else {
        this.$set(item, "isEdit", true);
      }
      this.$nextTick(
        (
          index = this.$store.getters.showWaitTodo.findIndex(
            (value) => value.id === item.id
          )
        ) => {
          this.$refs.inputTitle[index].focus();
        }
      );
    },
    del(id) {
      if (confirm("确认删除吗？")) {
        this.$store.state.todo_list = this.$store.state.todo_list.filter(
          (item) => {
            return item.id !== id;
          }
        );
      }
    },
    handleBlur(e, item) {
      if (!e.target.value.trim()) {
        alert("请输入内容！");
        e.target.value = item.list_todo;
        item.isEdit = false;
      } else {
        item.list_todo = e.target.value;
        item.isEdit = false;
      }
    },
    show_waitTodo() {
      if (this.waitTodoLength <= 0) {
        this.$refs.waitnull.style = "display:block";
        this.$refs.donenull.style = "display:none";
        this.$refs.showWaitTodoTodo.style = "display:none";
        this.$refs.showHasdone.style = "display:none";
      } else {
        this.$refs.waitnull.style = "display:none";
        this.$refs.donenull.style = "display:none";
        this.$refs.showHasdone.style = "display:none";
        this.$refs.showWaitTodoTodo.style = "display:block";
      }
      this.$refs.show_waitTodo.style = "color:black";
      this.$refs.show_hasDone.style = "color:rgb(100, 100, 100)";
    },
    show_hasDone() {
      if (this.hasDoneLength <= 0) {
        this.$refs.donenull.style = "display:block";
        this.$refs.waitnull.style = "display:none";
        this.$refs.showHasdone.style = "display:none";
        this.$refs.showWaitTodoTodo.style = "display:none";
      } else {
        this.$refs.donenull.style = "display:none";
        this.$refs.waitnull.style = "display:none";
        this.$refs.showHasdone.style = "display:block";
        this.$refs.showWaitTodoTodo.style = "display:none";
      }
      this.$refs.show_waitTodo.style = "color:rgb(100, 100, 100)";
      this.$refs.show_hasDone.style = "color:black";
    },
    addemergency() {
      this.emergency = "emergency";
      this.$refs.addimportant.style = "background-color:#fff";
      this.$refs.addnormal.style = "background-color:#fff";
      this.$refs.addemergency.style = "background-color:#ddd";
    },
    addimportant() {
      this.emergency = "important";
      this.$refs.addemergency.style = "background-color:#fff";
      this.$refs.addnormal.style = "background-color:#fff";
      this.$refs.addimportant.style = "background-color:#ddd";
    },
    addnormal() {
      this.emergency = "normal";
      this.$refs.addemergency.style = "background-color:#fff";
      this.$refs.addimportant.style = "background-color:#fff";
      this.$refs.addnormal.style = "background-color:#ddd";
    },
  },
  watch: {
    todo_list: {
      deep: true,
      handler(newvalue) {
        localStorage.setItem("todo_list", JSON.stringify(newvalue));
        // this.$store.state.todo_list = newvalue;
      },
    },
    userlist: {
      deep: true,
      handler(newvalue) {
        localStorage.setItem("userlist", JSON.stringify(newvalue));
      },
    },
    waitTodoLength: {
      handler(newvalue) {
        if (!newvalue) {
          this.show_waitTodo();
        }
      },
    },
    hasDoneLength: {
      handler(newvalue) {
        if (!newvalue) {
          this.show_hasDone();
        }
      },
    },
  },
  mounted() {
    this.$bus.$emit("calTodoList", [
      this.todolistLength,
      this.waitTodoLength,
      this.hasDoneLength,
    ]);
    this.$bus.$on("show_waitTodo", () => {
      this.$nextTick(() => {
        this.show_waitTodo();
      });
    });
    this.show_waitTodo();
  },
  beforeUpdate() {
    this.$bus.$emit("calTodoList", [
      this.todolistLength,
      this.waitTodoLength,
      this.hasDoneLength,
    ]);
  },
  beforeDestroy() {
    this.$bus.$off("show_waitTodo");
  },
};
</script>

<style scoped>
main {
  flex: 1 0 700px;
  margin: 0 20px;
  border-radius: 10px 10px;
  height: 100vh;
  /* display: flex;
  flex-direction: column;
  justify-content: top; */
}
.calendar {
  height: 220px;
  /* flex: 0 0 250px; */
  background-color: white;
  border-radius: 20px;
  margin: 10px 0;
  position: relative;
  /* display: flex;
  justify-content: space-between;
  align-items: stretch; */
}
.calendarTitle {
  display: flex;
  justify-content: space-between;
  align-content: stretch;
}
.search {
  border: 1px solid #ddd;
  border-radius: 20px;
  padding-left: 15px;
  outline-style: none;
  height: 40px;
  width: 300px;
  /* float: right; */
  margin-top: 10px;
  margin-right: 10px;
  /* position: absolute; */
  /* right: 180px; */
  /* margin-right: 50px; */
}
.calendarvue {
  /* clear: both; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-self: center;
}
.calendarvuep {
  /* clear: both; */
  margin: 30px 40px 10px 40px;
  /* text-align: center; */
  display: block;
  font-size: 30px;
  font-weight: bold;
  color: rgb(37, 37, 37);
}
#add_list_todo {
  /* background-color: rgb(56, 157, 245); */
  width: 30px;
  height: 30px;
  color: white;
  border: 0px;
  border-radius: 15px;
  font-size: 15px;
  text-align: center;
  float: right;
  margin: 5px;
  font-weight: bolder;
  /* margin: 6px auto; */
}
#add_list_todo span {
  opacity: 0%;
  display: none;
  /* font-weight: bold; */
}
#add_list_todo:hover {
  /* transform: translateX(60px) rotate(360deg); */
  width: 180px;
  text-align: center;
  transition: all 0.6s ease;
  transition-delay: 0.1s;
  /* vertical-align: baseline; */
}
#add_list_todo:hover span {
  display: inline-block;
  line-height: 20px;
  /* opacity: 100%;
  line-height: 20px; */
  text-align: center;
  animation: spanAdd 0.3s linear forwards;
  animation-delay: 0.2s;
  color: white;
  font-weight: 400;
  vertical-align: baseline;
  font-size: 13px;
  margin: auto;
}
@keyframes spanAdd {
  from {
    opacity: 0%;
  }
  to {
    opacity: 100%;
  }
}
.add_div {
  width: 600px;
  height: 220px;
  position: absolute;
  border-radius: 50px;
  /* opacity: 0; */
  top: 80%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  box-shadow: 2px 2px 5px #ddd;
  z-index: 20;
  transition: all 0.5s ease-out;
}
.add_div input {
  display: block;
  width: 500px;
  height: 35px;
  border: 0;
  border-bottom: 1px solid grey;
  padding-left: 10px;
  margin: 50px auto 10px auto;
  outline-style: none;
  font-size: 20px;
  padding-bottom: 0px;
}
.add_div div:first-child {
  margin: 25px 50px;
}
.add_div div:first-child button {
  float: right;
  margin-left: 20px;
  background-color: #fff;
  border: 0px;
  font-size: 18px;
  line-height: 36px;
  color: rgb(169, 169, 169);
}
.add_div div:first-child button:nth-child(2) {
  color: rgb(217, 43, 43);
}
.add_div div:first-child button:hover {
  text-shadow: 0px 0px 0.2px rgb(120, 120, 120);
}
.add_div p {
  display: inline-block;
  text-align: left;

  font-size: 26px;
}
.add_div span {
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 15px 10px;
}
.add_div span:hover {
  background-color: rgb(236, 236, 236);
}
.add_div span:first-child {
  margin-left: 40px;
}
.add_div span:first-child {
  background-image: url("../assets/svg/icon-danger.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
}
.add_div span:nth-child(2) {
  background-image: url("../assets/svg/icon-important.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
}
.add_div span:last-child {
  background-image: url("../assets/svg/icon-normol.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-color: #ddd;
}
.list_todo {
  height: calc(100vh - 240px);
  background-color: white;
  border-radius: 20px 20px 0 0;
  overflow: scroll;
}
.list_todo i {
  color: rgb(188, 188, 188);
  float: left;
  /* display: inline-block; */
  /* display: inline-block; */
  margin: 15px 0;
  font-weight: bold;
  vertical-align: middle;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.list_todo a {
  text-decoration: none;
  color: rgb(188, 188, 188);
  float: left;
  /* display: inline-block; */
  margin: 15px 15px;
}
.list_todo .waitnull {
  display: none;

  height: 85%;
  width: 85%;

  clear: both;
  margin: 15% auto;
}
.picyellow {
  background-color: rgb(201, 204, 39);
}
.picblue {
  /* filter:drop-shadow(0px 1000px 0 rgb(120, 143, 218)) ; */
  background-color: rgb(120, 143, 218);
}
.picgreen {
  background-color: rgb(114, 190, 108);
}
.picpurple {
  background-color: rgb(167, 133, 207);
}
.waitnullpic {
  height: 350px;
  width: 80%;
  /* 使用drop-shadow属性在safari浏览器中渲染效果受到盒子边界限制，故使用mask进行变色。 */
  /* background-image: url("../assets/svg/waitnull2.svg");
  background-size: contain;
  background-position: 50% 50%;
  background-repeat: no-repeat; */
  /* transform: translateY(-300px); */
  margin: 0 auto;
  mask: url("../assets/svg/waitnull2.svg") no-repeat;
  mask-size: 100% 100%;
}
.waitnull p {
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  line-height: 60px;
  color: rgb(189, 189, 189);
}
.list_todo .donenull {
  display: none;
  height: 85%;
  width: 85%;
  clear: both;
  margin: 15% auto;
}
.donenullpic {
  height: 350px;
  width: 80%;
  mask: url("../assets/svg/donenull2.svg") no-repeat;
  mask-size: 100% 100%;
  margin: 0 auto;
}
.donenull p {
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  line-height: 60px;
  color: rgb(189, 189, 189);
}
.list_todo ul li {
  list-style-type: none;
  /* width: 100px; */
  padding: 0 25px;
  height: 65px;
  display: flex;
  justify-content: left;
  clear: both;
  align-items: center;
  background-color: #fff;
}
.list_todo ul li:hover {
  background-color: rgba(233, 233, 233, 0.654);
  transition: all 0.3s linear;
}
.list_todo ul li:hover .modify,
.list_todo ul li:hover .delete {
  display: inline-block;
  animation: spanAdd 0.6s linear forwards;
}
#inputTitle {
  line-height: 40px;
  margin: 15px 5px;
  padding: 0 5px;
  font-size: 20px;
  flex: 1 1 auto;
  border: 0px;
  border-bottom: 1px solid grey;
  outline-style: none;
  background-color: rgba(0, 0, 0, 0);
  overflow: hidden;
  /* line-height: 65px; */
}
.list_todo ul li span {
  flex: 1 1 auto;
  margin-left: 15px;
}
#show_list {
  flex: 1 0 400px;
  color: black;
  font-size: 20px;
  font-weight: 400;
  height: 65px;
  line-height: 65px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
}
#show_list:hover {
  cursor: default;
}
.modify,
.delete {
  margin: auto 15px;
  /* display: none; */
  border: 0px;
  width: 28px;
  height: 28px;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  opacity: 0;
}
.modify:hover {
  background-image: url("../assets/svg/icon-edit-hover.svg");
}
.delete:hover {
  background-image: url("../assets/svg/icon-delete-hover.svg");
}
.modify {
  background-image: url("../assets/svg/icon-edit.svg");
}
.delete {
  background-image: url("../assets/svg/icon-delete.svg");
}
.isdone span {
  background-color: #fff;
  border-radius: 50%;
  /* border: 2px solid rgba(47, 137, 242, 0.45); */
  width: 25px;
  height: 25px;
  display: inline-block;
  text-align: center;
  line-height: 20px;
}
.isdone input[type="checkbox"] {
  display: none;
}
.isdone input[type="checkbox"]:checked + span {
  position: relative;
}
.isdone input[type="checkbox"]:checked + span:after {
  content: "";
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  /* background-color: rgb(47, 137, 242); */
  border: #fff solid 2px;
  height: 18px;
  width: 18px;
}
.yellow {
  background-color: rgb(241, 243, 114);
  border: 2px solid rgba(250, 251, 197);
}
.blue {
  background-color: rgb(162, 178, 229);
  /* border: 2px solid rgb(202, 213, 249); */

  /* opacity: 0.5; */
}
.green {
  background-color: rgb(163, 218, 158);
  border: 2px solid rgba(197, 238, 193);
}
.purple {
  background-color: rgb(189, 158, 224);
  border: 2px solid rgba(217, 191, 246);
}
.quuyellow .isdone span {
  background-color: #fff;
  border: 2px solid rgba(250, 251, 197);
}
.quuyellow .isdone input[type="checkbox"]:checked + span:after {
  background-color: rgba(241, 243, 114);
  border: 2px solid #fff;
}
.quublue .isdone span {
  background-color: #fff;
  border: 2px solid rgb(202, 213, 249);
}
.quublue .isdone input[type="checkbox"]:checked + span:after {
  background-color: rgb(162, 178, 229);
  border: 2px solid #fff;
}
.quugreen .isdone span {
  background-color: #fff;
  border: 2px solid rgba(197, 238, 193);
}
.quugreen .isdone input[type="checkbox"]:checked + span:after {
  background-color: rgb(163, 218, 158);
  border: 2px solid #fff;
}
.quupurple .isdone span {
  background-color: #fff;
  border: 2px solid rgba(217, 191, 246);
}
.quupurple .isdone input[type="checkbox"]:checked + span:after {
  background-color: rgb(189, 158, 224);
  border: 2px solid #fff;
}
.showemergency {
  height: 50%;
  width: 5px;
  border-radius: 5px;
  /* background-color: red; */
}
.emergency {
  background-color: rgb(248, 12, 33);
}
.important {
  background-color: rgb(39, 113, 239);
}
.normal {
  background-color: rgb(93, 228, 83);
}
</style>