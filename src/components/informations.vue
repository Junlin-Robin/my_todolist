<template>
  <div class="app">
    <div class="appPic"></div>
    <div onselectstart="return false" class="appName">掌控时间</div>
    <div onselectstart="return false" class="appversion">version 0.1.0</div>
    <div onselectstart="return false" class="appinformation">
      MailAddress: <a href="#">347258143@qq.com</a>
      欢迎大家学习交流
    </div>
    <div class="futureFunction">
      <div class="waitToOpt">
        待优化的功能
        <div>全局搜索功能</div>
        <div>定时提醒功能</div>
        <div>视觉优化</div>
        <div>safari浏览器兼容问题</div>
      </div>
      <div class="futureToOpt">
        未来待开发功能
        <div>移动端优先</div>
        <div>自定义换肤功能</div>
        <div>云同步</div>
        <div>音乐-短信提醒</div>
      </div>
    </div>
    <div class="reference">
      app设计思路参考开源项目：<a
        href="https://github.com/chaochaoxiaoshu/SilverBullet"
        >https://github.com/chaochaoxiaoshu/SilverBullet</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "informations",
  data() {
    return {};
  },
};
</script>

<style scoped>
div:hover {
  cursor: default;
}
.app {
  flex: 1 0 800px;
  margin: 0 auto;
  height: 100vh;
  overflow: scroll;
}
.appPic {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background-image: url("../assets/1.webp");
  background-position: center;
  background-size: cover;
  margin: 120px auto 30px auto;
}
.appName {
  font-size: 40px;
  color: rgb(42, 42, 42);
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  text-align: center;
  margin-bottom: 20px;
}
.appversion {
  color: rgb(150, 150, 150);
  font-size: 18px;
  text-align: center;
  margin-bottom: 5px;
}
.appinformation {
  color: rgb(42, 42, 42);
  font-size: 20px;
  text-align: center;
}
.futureFunction {
  margin: 60px auto 10px auto;
  text-align: center;
  display: flex;
  justify-content: center;
}
.waitToOpt {
  flex: 0 0 150px;
  text-align: center;
  padding-right: 50px;
  font-size: 14px;
  color: rgb(42, 42, 42);
  line-height: 36px;
  border-right: 1px solid rgb(42, 42, 42);
}
.waitToOpt div {
  font-size: 13px;
  color: rgb(150, 150, 150);
  line-height: 26px;
}
.futureToOpt {
  flex: 0 0 150px;
  text-align: center;
  padding-left: 50px;
  font-size: 14px;
  color: rgb(42, 42, 42);
  line-height: 36px;
}
.futureToOpt div {
  font-size: 13px;
  color: rgb(150, 150, 150);
  line-height: 26px;
}
.reference {
  color: rgb(42, 42, 42);
  font-size: 16px;
  text-align: center;
  margin: 50px auto 10px auto;
}
</style>