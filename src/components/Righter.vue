<template>
  <!-- 右侧统计图 -->
  <div class="righter">
    <!-- <h2>概览</h2> -->
    <div class="map">
      <div class="mapanimate" ref="mapanimate">
        <!-- <div
          class="waitTodo"
          :class="'w' + this.changebgc"
          ref="waitTodo"
        ></div>
        <div class="HasDone" :class="this.changebgc"></div> -->
      </div>

      <p>
        剩余待办<span>{{ todolistLength[1] }}</span
        >件，已办事件<span>{{ todolistLength[2] }}</span
        >件
      </p>
      <!-- <img src="./assets/null.svg" alt=""> -->
    </div>
    <!-- <h2>今日打卡/全部打卡</h2> -->
    <div class="done">
      <div>
        <p>
          <span>{{ show_list.length }}</span
          >&nbsp项
        </p>
        <p>所有待办</p>
      </div>
      <div>
        <p>
          <span>{{ all_listwaitTodo.length }}</span
          >&nbsp项
        </p>
        <p>剩余待办</p>
      </div>
      <div>
        <p>
          <span>{{ all_listhasDone.length }}</span
          >&nbsp项
        </p>
        <p>已完成待办</p>
      </div>
      <!-- <img src="./assets/clockin-null.svg" alt=""> -->
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "righter",
  data() {
    return {
      todolistLength: [],
      color: {
        yellow: ["rgb(250, 251, 197)","rgb(194, 197, 63)"],
        green: ["rgb(197, 238, 193)","rgb(74, 184, 64)"],
        blue: ["rgb(202, 213, 249)","rgb(71, 103, 210)"],
        purple: ["rgb(217, 191, 246)","rgb(134, 56, 224)"]
      },
    };
  },
  computed: {
    ...mapGetters(["changebgc","show_list"]),
    all_listwaitTodo:{
      get(){
        return this.show_list.filter(item=>{
          return item.done === false;
        })
      }
    },
    all_listhasDone:{
      get(){
        return this.show_list.filter(item=>{
          return item.done === true;
        })
      }
    },
  },
  methods: {
    initpie() {
      var myChart = this.$echarts.init(this.$refs.mapanimate, null, {
        renderer: "svg",
      });
      var option = {
        // legend: {
        //   top: "90%",
        //   left: "center",
        // },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["80%", "50%"],
            avoidLabelOverlap: true,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "20",
                fontWeight: "bold",
              },
            },
            data: [
              { value: this.todolistLength[1], name: "待办事件",itemStyle: {
                  color: this.color[this.changebgc][1],
                }, },
              {
                value: this.todolistLength[2] ,
                name: "已办事件",
                itemStyle: {
                  color: this.color[this.changebgc][0],
                },
              },
            ],
          },
        ],
      };
      option && myChart.setOption(option);
    },
    throttle(fun,delay){
      let timer = null;
      return ()=>{
        if(!timer){
          timer = setTimeout(()=>{
            timer = null;
          },delay);
          fun(arguments);
        }
      }
    }
  },
  created() {
    this.$bus.$on("calTodoList", (data) => {
      this.todolistLength.splice(0, this.todolistLength.length);
      this.todolistLength.push(...data);
    });
  },
  mounted(){
    this.initpie();
    const chartobj = this.$echarts.init(this.$refs.mapanimate);
    const myObserver = new ResizeObserver(this.throttle(()=>{
      chartobj.resize();
    },500));
    myObserver.observe(this.$refs.mapanimate);
  },
  beforeUpdate(){
    this.initpie();
  },
  beforeDestroy() {
    this.$bus.$off("calTodoList");
    const myObserver = new ResizeObserver(this.throttle(()=>{
      chartobj.resize();
    },500));
    myObserver.disconnect(this.$refs.mapanimate);
  },
};
</script>

<style scoped>
* {
  font-size: 16px;
  font-weight: 500;
  color: rgb(206, 206, 206);
  margin: 0px;
  padding: 0px;
}
.righter {
  flex: 0 0 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: stretch;
  margin-right: 20px;
  height: 100vh;
}
.map {
  /* flex: 0 0 250px; */
  height: 220px;
  background-color: white;
  border-radius: 20px;
  margin: 10px 0;
  overflow: hidden;
}
.map p {
  text-align: center;
}
.map p span {
  display: inline-block;
  width: 18px;
  color: rgb(50, 50, 50);
  font-weight: bold;
  font-size: 18px;
}
.mapanimate {
  position: relative;
  margin: 0px auto;
  height: 88%;
  width: 100%;
}
.waitTodo {
  position: absolute;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  border: 12px solid #ddd;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: rotatecircle 1s ease alternate 2 forwards;
}
.HasDone {
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  /* border: 12px solid; */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: rotatecircle 1s ease alternate 2 forwards;
}
.wyellow {
  background-color: #fff;
  border: 12px solid rgb(194, 197, 63);
}
.wblue {
  background-color: #fff;
  border: 12px solid rgb(71, 103, 210);

  /* opacity: 0.5; */
}
.wgreen {
  background-color: #fff;
  border: 12px solid rgb(74, 184, 64);
}
.wpurple {
  background-color: #fff;
  border: 12px solid rgb(134, 56, 224);
}
.yellow {
  background-color: #fff;
  border: 12px solid rgba(250, 251, 197);
}
.blue {
  background-color: #fff;
  border: 12px solid rgb(202, 213, 249);
}
.green {
  background-color: #fff;
  border: 12px solid rgba(197, 238, 193);
}
.purple {
  background-color: #fff;
  border: 12px solid rgba(217, 191, 246);
}
@keyframes rotatecircle {
  0% {
    clip-path: polygon(50% 0%, 55% 0%, 50% 50%);
  }
  1% {
    clip-path: polygon(50% 0%, 55% 0%, 50% 50%);
  }
  2% {
    clip-path: polygon(50% 0%, 60% 0%, 50% 50%);
  }
  3% {
    clip-path: polygon(50% 0%, 65% 0%, 50% 50%);
  }
  4% {
    clip-path: polygon(50% 0%, 70% 0%, 50% 50%);
  }
  5% {
    clip-path: polygon(50% 0%, 75% 0%, 50% 50%);
  }
  6% {
    clip-path: polygon(50% 0%, 80% 0%, 50% 50%);
  }
  7% {
    clip-path: polygon(50% 0%, 85% 0%, 50% 50%);
  }
  8% {
    clip-path: polygon(50% 0%, 90% 0%, 50% 50%);
  }
  9% {
    clip-path: polygon(50% 0%, 95% 0%, 50% 50%);
  }
  10% {
    clip-path: polygon(50% 0%, 100% 0%, 50% 50%);
  }
  11% {
    clip-path: polygon(50% 0%, 100% 0%, 100% 5%, 50% 50%);
  }
  12% {
    clip-path: polygon(50% 0%, 100% 0%, 100% 10%, 50% 50%);
  }
  13% {
    clip-path: polygon(50% 0%, 100% 0%, 100% 15%, 50% 50%);
  }
  14% {
    clip-path: polygon(50% 0%, 100% 0%, 100% 20%, 50% 50%);
  }
  15% {
    clip-path: polygon(50% 0%, 100% 0%, 100% 25%, 50% 50%);
  }
  16% {
    clip-path: polygon(50% 0%, 100% 0%, 100% 30%, 50% 50%);
  }
  17% {
    clip-path: polygon(50% 0%, 100% 0%, 100% 35%, 50% 50%);
  }
  18% {
    clip-path: polygon(50% 0%, 100% 0%, 100% 40%, 50% 50%);
  }
  19% {
    clip-path: polygon(50% 0%, 100% 0%, 100% 45%, 50% 50%);
  }
  20% {
    clip-path: polygon(50% 0%, 100% 0%, 100% 50%, 50% 50%);
  }
  21% {
    clip-path: polygon(50% 0%, 100% 0%, 100% 55%, 50% 50%);
  }
  22% {
    clip-path: polygon(50% 0%, 100% 0%, 100% 60%, 50% 50%);
  }
  23% {
    clip-path: polygon(50% 0%, 100% 0%, 100% 65%, 50% 50%);
  }
  24% {
    clip-path: polygon(50% 0%, 100% 0%, 100% 70%, 50% 50%);
  }
  25% {
    clip-path: polygon(50% 0%, 100% 0%, 100% 75%, 50% 50%);
  }
  26% {
    clip-path: polygon(50% 0%, 100% 0%, 100% 80%, 50% 50%);
  }
  27% {
    clip-path: polygon(50% 0%, 100% 0%, 100% 85%, 50% 50%);
  }
  28% {
    clip-path: polygon(50% 0%, 100% 0%, 100% 90%, 50% 50%);
  }
  29% {
    clip-path: polygon(50% 0%, 100% 0%, 100% 95%, 50% 50%);
  }
  30% {
    clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 50% 50%);
  }
  31% {
    clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 95% 100%, 50% 50%);
  }
  32% {
    clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 90% 100%, 50% 50%);
  }
  33% {
    clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 85% 100%, 50% 50%);
  }
  34% {
    clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 80% 100%, 50% 50%);
  }
  35% {
    clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 75% 100%, 50% 50%);
  }
  36% {
    clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 70% 100%, 50% 50%);
  }
  37% {
    clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 65% 100%, 50% 50%);
  }
  38% {
    clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 60% 100%, 50% 50%);
  }
  39% {
    clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 55% 100%, 50% 50%);
  }
  40% {
    clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%, 50% 50%);
  }
  41% {
    clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 45% 100%, 50% 50%);
  }
  42% {
    clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 40% 100%, 50% 50%);
  }
  43% {
    clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 35% 100%, 50% 50%);
  }
  44% {
    clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 30% 100%, 50% 50%);
  }
  45% {
    clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 25% 100%, 50% 50%);
  }
  46% {
    clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 20% 100%, 50% 50%);
  }
  47% {
    clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 15% 100%, 50% 50%);
  }
  48% {
    clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 10% 100%, 50% 50%);
  }
  49% {
    clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 5% 100%, 50% 50%);
  }
  50% {
    clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 0% 100%, 50% 50%);
  }
  51% {
    clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 95%, 50% 50%);
  }
  52% {
    clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 90%, 50% 50%);
  }
  53% {
    clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 85%, 50% 50%);
  }
  54% {
    clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 80%, 50% 50%);
  }
  55% {
    clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 75%, 50% 50%);
  }
  56% {
    clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 70%, 50% 50%);
  }
  57% {
    clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 65%, 50% 50%);
  }
  58% {
    clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 60%, 50% 50%);
  }
  59% {
    clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 55%, 50% 50%);
  }
  60% {
    clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 50%, 50% 50%);
  }
  61% {
    clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 45%, 50% 50%);
  }
  62% {
    clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 40%, 50% 50%);
  }
  63% {
    clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 35%, 50% 50%);
  }
  64% {
    clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 30%, 50% 50%);
  }
  65% {
    clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 25%, 50% 50%);
  }
  66% {
    clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 20%, 50% 50%);
  }
  67% {
    clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 15%, 50% 50%);
  }
  68% {
    clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 10%, 50% 50%);
  }
  69% {
    clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 5%, 50% 50%);
  }
  70% {
    clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, 50% 50%);
  }
  71% {
    clip-path: polygon(
      50% 0%,
      100% 0%,
      100% 100%,
      0% 100%,
      0% 0%,
      5% 0%,
      50% 50%
    );
  }
  72% {
    clip-path: polygon(
      50% 0%,
      100% 0%,
      100% 100%,
      0% 100%,
      0% 0%,
      10% 0%,
      50% 50%
    );
  }
  73% {
    clip-path: polygon(
      50% 0%,
      100% 0%,
      100% 100%,
      0% 100%,
      0% 0%,
      15% 0%,
      50% 50%
    );
  }
  74% {
    clip-path: polygon(
      50% 0%,
      100% 0%,
      100% 100%,
      0% 100%,
      0% 0%,
      20% 0%,
      50% 50%
    );
  }
  75% {
    clip-path: polygon(
      50% 0%,
      100% 0%,
      100% 100%,
      0% 100%,
      0% 0%,
      25% 0%,
      50% 50%
    );
  }
  76% {
    clip-path: polygon(
      50% 0%,
      100% 0%,
      100% 100%,
      0% 100%,
      0% 0%,
      30% 0%,
      50% 50%
    );
  }
  77% {
    clip-path: polygon(
      50% 0%,
      100% 0%,
      100% 100%,
      0% 100%,
      0% 0%,
      35% 0%,
      50% 50%
    );
  }
  78% {
    clip-path: polygon(
      50% 0%,
      100% 0%,
      100% 100%,
      0% 100%,
      0% 0%,
      40% 0%,
      50% 50%
    );
  }
  79% {
    clip-path: polygon(
      50% 0%,
      100% 0%,
      100% 100%,
      0% 100%,
      0% 0%,
      45% 0%,
      50% 50%
    );
  }
  80% {
    clip-path: polygon(
      50% 0%,
      100% 0%,
      100% 100%,
      0% 100%,
      0% 0%,
      50% 0%,
      50% 50%
    );
  }

  /* 20%{
    clip-path: polygon(50% 0%,100% 0%,100% 50%,50% 50%);
  }
  30%{
    clip-path: polygon(50% 0%,100% 0%,100% 100%,50% 50%);
  }
  40%{
    clip-path: polygon(50% 0%,100% 0%,100% 100%,50% 100%,50% 50%);
  }
  50%{
    clip-path: polygon(50% 0%,100% 0%,100% 100%,50% 100%,0% 100%,50% 50%);
  }
  60%{
    clip-path: polygon(50% 0%,100% 0%,100% 100%,50% 100%,0% 100%,0% 50%,50% 50%);
  }
  70%{
    clip-path: polygon(50% 0%,100% 0%,100% 100%,50% 100%,0% 100%,0% 50%,0% 0%,50% 50%);
  } */
}
.done {
  height: calc(100vh - 240px);
  overflow: scroll;
  background-color: white;
  border-radius: 20px 20px 0 0;
  display: flex;
  flex-direction: column;
  justify-content: top;
}
.done div {
  height: 150px;
  flex: 1 0 150px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
}
.done p {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  margin: 5px 0;
}
.done div:nth-child(2) {
  border-top: 0.5px solid #ddd;
  border-bottom: 0.5px solid #ddd;
}
.done span {
  color: rgb(50, 50, 50);
  font-size: 55px;
  font-weight: bold;
  display: inline-block;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  /* margin-top: calc(20%); */
}
@media (max-width: 1200px) {
  .righter {
    display: none;
  }
}
</style>