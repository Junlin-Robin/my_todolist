<template>
  <div id="todolist" :class="this.changebgc">
    <navbar />
    <router-view class="scrollstyle" ></router-view>
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
import navbar from "./navbar.vue";
import show from "./show.vue";
import righter from "./Righter.vue";
import { mapGetters } from 'vuex';

export default {
  name: "todolist",
  components: {
    navbar,
    show,
    righter,
  },
  data() {
    return {
      
    };
  },
  computed:{
    ...mapGetters(["changebgc"]),
  },
  mounted() {
    this.$bus.$on("onmask", (judgement) => {
      if (judgement) {
        this.$refs.mask.style = "display:block";
      } else {
        this.$refs.mask.style = "display:none";
      }
    });
  },
};
</script>

<style scoped> 
#todolist {
  width: 100%;
  height: 100vh;
  /* background-color: rgb(243, 243, 243); */
  display: flex;
  justify-content: space-between;
  border: 0px;
  /* height: 100vh; */
  /* align-items: stretch; */
  overflow: hidden;
}
.scrollstyle{
  overflow: scroll;
}
.mask {
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: black;
  opacity: 25%;
  z-index: 10;
  display: none;
}
.yellow {
  background-color: rgba(250, 251,197);
  border: 2px solid rgba(250, 251,197);
}
.blue {
  background-color: rgb(202, 213, 249);
  border: 2px solid rgb(202, 213, 249);

  /* opacity: 0.5; */
}
.green {
  background-color: rgba(197,238,193);
  border: 2px solid rgba(197,238,193);
}
.purple {
  background-color: rgba(217, 191, 246);
  border: 2px solid  rgba(217, 191, 246);
}
</style>
