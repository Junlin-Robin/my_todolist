<template>
  <div id="root" >
    <router-view ></router-view>
  </div>
</template>

<script>
import todolist from "./components/todolist.vue";
import login from "./components/login.vue";

export default {
  name: "App",
  components: {
    todolist,
    login,
  },
  data() {
    return {
      
    };
  },
  computed:{
    
  },
  mounted() {
    
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-size: 15px;
  /* 配置user-select会让用户无法选中指定元素 */
  /* -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none; */
  /* user-select: none; */
}
div,p,li{
  /* cursor: default; */
  user-select: none;
}
#root {
  width: 100%;
  height: 100vh;
  /* background-color: rgb(243, 243, 243); */
  display: flex;
  justify-content: center;
}
</style>
