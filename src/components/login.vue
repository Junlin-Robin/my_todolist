<template>
  <div id="root" @click="wave($event)" ref="root">
    <div class="wave" ref="wave">
      <span style="--i: 1"></span>
      <span style="--i: 2"></span>
      <span style="--i: 3"></span>
      <span style="--i: 4"></span>
      <span style="--i: 5"></span>
      <span style="--i: 6"></span>
      <span style="--i: 7"></span>
      <span style="--i: 8"></span>
      <span style="--i: 9"></span>
      <span style="--i: 10"></span>
    </div>
    <div id="user">
      <h2>掌控时间</h2>
      <div
        class="userpic"
        :style="'background-image:url(' + userpic + ')'"
      ></div>
      <label for="user_name" class="user_name">
        <span>账号：</span
        ><input
          type="text"
          ref="user_name"
          v-model.lazy.trim="user_name"
          id="user_name"
          name="user_name"
          maxlength="12"
        />
      </label>
      <label for="user_password" class="user_password">
        <span>密码：</span
        ><input
          type="password"
          ref="user_password"
          v-model.lazy="user_password"
          id="user_password"
          name="user_password"
          maxlength="12"
          @keyup.enter="login"
        />
        <button @click="login" class="login"></button>
      </label>

      <div class="footer">
        <a @click="register" href="#" class="register">注册</a>
        <a @click="forgetpassword" href="#" class="forgetpassword">忘记密码</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "login",
  data() {
    return {
      user_name: "",
      user_password: "",
      timer: null,
    };
  },
  computed: {
    ...mapState(["login_user", "userlist"]),
    userpic: {
      get() {
        let pic;
        const index = this.userlist.forEach((item) => {
          if (item.user_name === this.user_name) {
            return (pic = item.pic);
          }
        });
        return pic;
      },
    },
  },
  methods: {
    login() {
      const path = this.$route.path;
      this.$store.dispatch("login_checkuser", {
        user_name: this.user_name,
        user_password: this.user_password,
        path: path,
      });
      if (this.$store.state.login_user) {
        this.$router.push("/todolist");
      }
    },
    register() {
      this.$store.dispatch("registry_checkuser", {
        user_name: this.user_name,
        user_password: this.user_password,
      });
    },
    forgetpassword() {
      this.$refs.user_name.value = "";
      this.$refs.user_password.value = "";
      this.$store.dispatch("forgetpassword", {
        user_name: prompt("请输入您的用户名～"),
        user_password: prompt("请输入更新之后的密码"),
      });
    },
    wave(e) {
      if (e.clientY < 420) return;
      // if(120 < e.clientX < 440) return;
      if (!this.timer) {
        this.$refs.wave.style = `display: flex; left : ${e.clientX}px; top:${e.clientY}px`;
        this.timer = setTimeout(() => {
          this.timer = null;
        }, 50);
      }
    },
  },
  mounted() {
    if (this.login_user.nickname) {
      this.$router.push("/todolist");
    }
  },
};
</script>

<style scoped>
#root {
  width: 100%;
  height: 100vh;
  position: relative;
  /* background-image: linear-gradient(45deg, #0081ff, #1cbbb4); */
  background-image: url("../assets/bgc_mountain.jpeg");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  /* transition: all 0.5s linear; */
}
#user {
  position: relative;
  background-color: rgba(255, 255, 255, 0.5);
  width: 400px;
  height: 500px;
  transform: translateY(calc(50vh - 250px));
  display: block;
  border-radius: 50px;
  border: 1px solid #ddd;
  box-shadow: 3px 1px 3px rgb(110, 110, 110);
}
h2 {
  font-size: 50px;
  text-align: center;
  text-shadow: 2px 4px 2px rgb(125, 125, 125);
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
}
.userpic {
  width: 120px;
  height: 120px;
  background-color: rgba(221, 221, 221, 0.6);
  border-radius: 50%;
  border: 1px solid black;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  margin: 60px auto 100px auto;
}
label {
  display: block;
  margin: 30px 0px 0px 30px;
}
label span {
  font-size: 20px;
}
input {
  width: 260px;
  height: 40px;
  outline-style: none;
  border-width: 0px 0px 1px 0px;
  border-color: rgb(66, 66, 66);
  font-size: 20px;
  padding: 0 0 0 5px;
  background-color: rgba(255, 255, 255, 0);
}
.user_password {
  position: relative;
}
.login {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 45px;
  background-color: rgba(255, 255, 255, 0);
  border: 1px solid black;
  border-radius: 50%;
  background-image: url("../assets/svg/login.svg");
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
}
.login:hover {
  background-image: url("../assets/svg/loginhover.svg");
  border-color: #358cf5;
}
.footer {
  width: 100%;
  height: 30px;
  /* background-color: red; */
  margin-top: 40px;
  display: flex;
  justify-content: center;
}
a {
  text-decoration: none;
  margin: auto;
  font-size: 18px;
}
a:hover {
  color: #358cf5;
}
.wave {
  width: 360px;
  height: 80px;
  border-radius: 50%;
  display: none;
  justify-content: center;
  align-items: center;
  position: absolute;
  transform: translateX(-50%) translateY(-50%) skewX(-30deg);
}
.wave span {
  position: absolute;
  background-color: rgba(179, 193, 199, 0.4);
  box-shadow: 0 0 50px rgba(219, 219, 219, 0.5);
  border-radius: 50%;
  animation: wave 3.5s ease-in infinite;
  animation-delay: calc(0.5s * var(--i));
}
@keyframes wave {
  0% {
    width: 0;
    height: 0;
    opacity: 0;
    filter: blur(0px);
    border: 0.1px solid rgba(255, 255, 255, 0);
  }
  50% {
    opacity: 0.5;
    filter: blur(0.5px);
    border: 0.3px solid rgba(255, 255, 255, 0.3);
  }
  100% {
    width: 350px;
    height: 80px;
    opacity: 0;
    filter: blur(1px);
    border: 0.2px solid rgba(255, 255, 255, 0);
  }
}
</style>