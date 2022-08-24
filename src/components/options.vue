<template>
  <div class="options">
    <div class="title">设置</div>
    <div class="setting">
      <div class="skin">
        <div class="skin_title">主题皮肤</div>
        <div
          v-for="item in this.$store.state.skin"
          :key="item.id"
          class="skin_icon"
          :class="[item.selected, item.color]"
          @click="changebgc($event, item)"
        >
          <p>{{ item.name[0] }}</p>
          <p>{{ item.name[1] }}</p>
          <p>{{ item.name[2] }}</p>
        </div>
      </div>
    </div>
    <div class="setting">
      <div class="skin">
        <div class="skin_title">用户名</div>
        <div class="changenickname" @click="changenickname($event)">
          <input
            type="text"
            v-model.lazy.trim="login_user.nickname"
            @keyup.enter="confirmnickname($event)"
            @blur="confirmnickname($event)"
            v-show="login_user.isEdit"
            ref="changenickname"
            class="nicknameinput"
          />
          <div v-show="!login_user.isEdit" class="nickname">{{ login_user.nickname }}</div>
          <p></p>
        </div>
      </div>
    </div>
    <div class="setting">
      <div class="skin">
        <div class="skin_title">头像</div>
        <div
          class="changeuserpic"
          @click="emitchangeuserpic"
          :style="'background-image:url('+login_user.pic+')'"
          ref="changeuserpic"
        ></div>
        <input type="file" @change="changeuserpic" ref="file" v-show="false" />
      </div>
    </div>
    <div class="setting">
      <div class="skin">
        <div class="skin_title">注销登录</div>
        <div class="logout" @click="logout($event)">
          <a href="#" alt="">{{ "登出" }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "options",
  data() {
    return {};
  },
  computed: {
    ...mapState(["login_user", "userlist"]),
  },
  watch: {
    login_user: {
      deep: true,
      handler(newvalue) {
        localStorage.setItem("login_user", JSON.stringify(newvalue));
      },
    },
    userlist: {
      deep: true,
      handler(newvalue) {
        localStorage.setItem("userlist", JSON.stringify(newvalue));
      },
    },
  },
  methods: {
    changebgc(e, item) {
      this.$store.commit("selectbgc", item);
    },
    changenickname() {
      if (this.login_user.hasOwnProperty("isEdit")) {
        this.login_user.isEdit = true;
      } else {
        this.$set(this.login_user, "isEdit", true);
      }
      this.$nextTick(() => {
        this.$refs.changenickname.focus();
      });
    },
    confirmnickname() {
      const index = this.userlist.findIndex((item) => {
        return item.user_name === this.login_user.user_name;
      });
      this.userlist[index].nickname = this.login_user.nickname;
      this.login_user.isEdit = false;
    },
    changeuserpic(e) {
      const uploadfile = e.target.files[0];
      let img = this.$refs.changeuserpic;
      img.setAttribute("crossOrigin", "anonymous");
      let reader = new FileReader();
      reader.readAsDataURL(uploadfile);
      reader.onload =  ()=>{
        if (reader.result.length >= 1000000) {
          return alert("图片格式太大，请压缩图片到100kb");
        }
        console.log(reader.result);
        img.style = `background-image:url(${reader.result})`;
        this.$set(this.login_user,"pic",reader.result);
        const index = this.userlist.findIndex((item) => {
          return item.user_name === this.login_user.user_name;
        });
        this.$set(this.userlist[index],"pic",reader.result);
      };
    },
    emitchangeuserpic() {
        this.$refs.file.click();
    },
    async logout(){
      try {
        await(this.$store.commit('logout'));
        this.$router.push("/");
      } catch (error) {
        console.log(error);
        return alert(error)
      }
      
    }
  },
};
</script>

<style scoped>
.options {
  flex: 1 0 800px;
  margin: 0 auto;
  height: 100vh;
}
.title {
  margin-left: 60px;
  margin-top: 80px;
  font-size: 28px;
  font-weight: bold;
  color: rgb(37, 37, 37);
}
.setting {
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 40px;
}
.skin {
  flex: 1 0 700px;
  height: 120px;
  border-radius: 40px;
  margin: 0 80px;
  background-color: #fff;
}
.skin_title {
  display: inline-block;
  font-size: 22px;
  font-weight: bold;
  line-height: 120px;
  margin-left: 20px;
}
.skin_icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  color: #fff;
  font-weight: bold;
  text-align: right;
  margin: 30px 20px;
  float: right;
  box-shadow: inset 0px 12px 28px rgba(221, 221, 221, 0.75);
}
.skin p {
  margin-right: 5px;
  font-size: 16px;
}
.skin_icon:hover {
  width: 70px;
  height: 70px;
  border-radius: 35px;
  margin: 25px 20px;
  transition: all 0.3s linear;
  opacity: 0.8;
}
.yellow {
  background-color: rgba(240, 240, 24, 0.943);
}
.blue {
  background-color: rgb(79, 125, 233);
}
.green {
  background-color: rgb(10, 194, 25);
}
.purple {
  background-color: rgba(131, 52, 222, 0.902);
}
.noselect {
  opacity: 0.4;
}
.isselect {
  opacity: 1;
}
.changenickname {
  height: 48px;
  border-radius: 25px;
  color: #fff;
  font-weight: bold;
  text-align: right;
  margin: 30px 20px;
  float: right;
  box-shadow: inset 0px 12px 28px rgba(221, 221, 221, 0.75);
}
.changenickname:hover {
  transform: translateY(-5px);
  transition: all 0.3s linear;
  opacity: 0.8;
}
.changeuserpic {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  color: #fff;
  margin: 30px 20px;
  float: right;
  border: 1px solid black;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}
.changeuserpic:hover {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin: 25px 20px;
  transition: all 0.3s linear;
  opacity: 0.8;
}
.logout{
  height: 48px;
  border-radius: 25px;
  color: #fff;
  font-weight: bold;
  text-align: right;
  margin: 30px 20px;
  float: right;
  box-shadow: inset 0px 12px 28px rgba(221, 221, 221, 0.75);
}
.logout a{
  float: right;
  font-size: 22px;
  line-height: 60px;
  text-decoration: none;
  margin: 0 20px;
  line-height: 48px;
}
.logout a:hover{
  color: #358cf5;
}
.nickname{
  color: black;
  font-size: 22px;
  font-weight: normal;
  line-height: 48px;
  margin: 0 15px;
}
.nicknameinput{
  color: black;
  font-size: 22px;
  font-weight: normal;
  line-height: 48px;
  outline-style: none;
  border-width: 0 0 1px 0;
  border-color: black;
  border-style: solid;
  background-color: rgba(255, 255, 255, 0);
  margin: 0 15px;
}
</style>