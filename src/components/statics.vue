<template>
  <div class="statics">
    <div class="statics_map_box">
      <div class="statics_map" ref="statics_map">
        <!-- <p>该页面待开发</p> -->
      </div>
    </div>
    <div class="statics_week_box">
      <!-- 雷达图 -->
      <div class="statics_week_radar">
        <div ref="statics_week_radar" class="radar_map"></div>
        <!-- <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#fff"
            d="m57.46494,116.27789l120.26176,-85.94072l120.25929,85.94072l-45.93434,139.05762l-148.65006,0l-45.93666,-139.05762l-0.00001,0l-0.00001,0l0.00002,0l0.00001,0z"
            id="svg_2"
            stroke-width="4"
            stroke="rgb(224, 224, 224)"
          />
          <path
            fill="#fff"
            d="m89.71321,122.85284l88.35695,-65.77658l88.35501,65.77658l-33.74829,106.43084l-109.21384,0l-33.74984,-106.43084l0.00001,0z"
            id="svg_3"
            stroke-width="4"
            stroke="rgb(224, 224, 224)"
          />
          <path
            fill="#fff"
            d="m113.66327,128.82202l64.06299,-44.23701l64.06157,44.23701l-24.46913,71.57835l-79.18518,0l-24.47028,-71.57835l0.00002,0l0.00001,0l0.00001,0l-0.00001,0z"
            id="svg_4"
            stroke-width="4"
            stroke="rgb(224, 224, 224)"
          />
          <path
            fill="#fff"
            d="m143.27632,135.58781l35.13704,-25.67957l35.13615,25.67957l-13.42068,41.55119l-43.43105,0l-13.42148,-41.55119l0.00002,0l-0.00002,0l0.00002,0z"
            id="svg_5"
            stroke-width="4"
            stroke="rgb(224, 224, 224)"
          />
          <path
            fill="#fff"
            d="m166.02484,140.76144l11.99605,-8.93814l11.9958,8.93814l-4.58191,14.46248l-14.82777,0l-4.58217,-14.46248z"
            id="svg_6"
            stroke-width="4"
            stroke="rgb(224, 224, 224)"
          />
          <path
            stroke="rgb(224, 224, 224)"
            id="svg_70"
            d="m59.50975,117.14912l106.84161,24.04226l-106.84161,-24.04226z"
            opacity="NaN"
            stroke-width="3.5"
            fill="rgba(216,216,216,0.407)"
          />
          <path
            stroke="rgb(224, 224, 224)"
            id="svg_8"
            d="m297.47903,117.18004c0,0 -108.04901,23.33421 -108.05397,23.09198c0.00493,0.24223 108.05397,-23.09198 108.05397,-23.09198z"
            opacity="NaN"
            stroke-width="3.5"
            fill="rgba(216,216,216,0.407)"
          />
          <path
            stroke="rgb(224, 224, 224)"
            id="svg_9"
            d="m105.85336,253.8055l64.76938,-99.23064l-64.76938,99.23064z"
            opacity="NaN"
            stroke-width="3.5"
            fill="rgba(216,216,216,0.407)"
          />
          <path
            stroke="rgb(224, 224, 224)"
            id="svg_10"
            d="m252.47925,256.14914l-68.69722,-103.81911l68.69722,103.81911z"
            opacity="NaN"
            stroke-width="3.5"
            fill="rgba(216,216,216,0.407)"
          />
          <path
            id="svg_11"
            d="m178.54436,29.92752l-0.01709,104.37715l0.01709,-104.37715z"
            opacity="NaN"
            stroke-width="3.5"
            stroke="rgb(224, 224, 224)"
            fill="rgba(216,216,216,0.407)"
          />

          <text
            fill="#000000"
            stroke="#a7a7a7"
            stroke-width="0"
            x="104.72741"
            y="-11.85806"
            id="svg_12"
            font-size="24"
            font-family="Noto Sans JP"
            text-anchor="start"
            xml:space="preserve"
          >
            勤奋
          </text>
          <text
            fill="#999999"
            stroke-width="0"
            x="153.7444"
            y="17.40644"
            id="svg_13"
            font-size="24"
            font-family="Noto Sans JP"
            text-anchor="start"
            xml:space="preserve"
            stroke="#a7a7a7"
            font-style="normal"
            font-weight="bold"
          >
            周一
          </text>
          <text
            fill="#999999"
            stroke-width="0"
            x="307"
            y="123"
            id="svg_1"
            font-size="24"
            font-family="Noto Sans JP"
            text-anchor="start"
            xml:space="preserve"
            stroke="#a7a7a7"
            font-style="normal"
            font-weight="bold"
          >
            周二
          </text>
          <text
            fill="#999999"
            stroke-width="0"
            x="58.26821"
            y="282.25652"
            id="svg_14"
            font-size="24"
            font-family="Noto Sans JP"
            text-anchor="start"
            xml:space="preserve"
            stroke="#a7a7a7"
            font-style="normal"
            font-weight="bold"
          >
            周四
          </text>
          <text
            fill="#999999"
            stroke-width="0"
            x="8"
            y="123"
            id="svg_15"
            font-size="24"
            font-family="Noto Sans JP"
            text-anchor="start"
            xml:space="preserve"
            stroke="#a7a7a7"
            font-style="normal"
            font-weight="bold"
          >
            周五
          </text>
          <text
            fill="#999999"
            stroke-width="0"
            x="250.41106"
            y="282.26284"
            id="svg_16"
            font-size="24"
            font-family="Noto Sans JP"
            text-anchor="start"
            xml:space="preserve"
            stroke="#a7a7a7"
            font-style="normal"
            font-weight="bold"
          >
            周三
          </text>
          <path
            id="svg_7"
            d="m178.90144,56.13189l-58.23937,74.91232l2.28304,98.0625l95.27901,-27.64047l-31.88319,-59.54828l-7.43948,-85.78606z"
            opacity="1"
            :stroke="this.aftersvgstroke"
            stroke-width="5"
            :fill="this.aftersvg"
          />
        </svg> -->
        <!-- <div class="circle" :class="'circle' + this.changebgc"></div> -->
        <div class="statics_subscription">
          <p>本周完成率</p>
          <span>{{ averageWeek }}</span>
          &nbsp%
          <p>{{ showwords }}</p>
        </div>
      </div>
      <!-- 数据统计 -->
      <div class="statics_week">
        <div class="data" :class="this.changebgc">
          <p>
            <span>{{ monthTodoList.hasDone }}</span
            >&nbsp 项
          </p>
          <p>本月完成待办</p>
        </div>
        <div class="data" :class="this.changebgc">
          <p>
            <span>{{ monthTodoList.waitTodo }}</span
            >&nbsp 项
          </p>
          <p>本月剩余待办</p>
        </div>
        <div class="data" :class="this.changebgc">
          <p>
            <span>{{
              ((monthTodoList.hasDone / monthTodoList.all) * 100 || 0).toFixed(
                0
              )
            }}</span
            >&nbsp %
          </p>
          <p>本月完成率</p>
        </div>
        <div class="data" :class="this.changebgc">
          <p>
            <span>{{ monthTodoList.emergency_waitTodo }}</span
            >&nbsp 项
          </p>
          <p>本月剩余紧急待办</p>
        </div>
        <div class="data" :class="this.changebgc">
          <p>
            <span>{{
              (
                ((monthTodoList.emergency_all -
                  monthTodoList.emergency_waitTodo) /
                  monthTodoList.emergency_all) *
                  100 || 0
              ).toFixed(0)
            }}</span
            >&nbsp %
          </p>
          <p>本月紧急待办完成率</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script scoped>
import { mapGetters } from "vuex";
import * as echarts from "echarts";
import CalendarAlgorithm from "./CalendarAlgorithm";

export default {
  name: "statics",
  mixins: [CalendarAlgorithm],
  data() {
    return {
      color: {
        yellow: "rgb(250, 251, 197)",
        blue: "rgb(202, 213, 249)",
        green: "rgb(197, 238, 193)",
        purple: "rgb(217, 191, 246)",
      },
      weekTodoList: this.randarWeek(),
      words: [
        "本周完成情况不错，继续保持！",
        "本周完成情况一般，请加油！",
        "本周完成情况不好，请尽快迎头赶上!",
      ],
      monthTodoList: {},
    };
  },
  computed: {
    ...mapGetters(["changebgc","show_list"]),
    averageWeek: {
      get() {
        let total = 0;
        for (let i = 0; i < 7; i++) {
          total += this.weekTodoList[i];
        }
        return ((total / 7) * 100).toFixed(0);
      },
    },
    showwords: {
      get() {
        if (this.averageWeek >= 60) {
          return this.words[0];
        } else if (40 <= this.averageWeek && this.averageWeek < 60) {
          return this.words[1];
        } else {
          return this.words[2];
        }
      },
    },
  },
  methods: {
    staticMonth() {
      let arr = [];
      for (let i = 0; i < this.showmonth.length; i++) {
        arr.push(
          ...this.show_list.filter((item) => {
            return item.time === this.showmonth[i].time;
          })
        );
      }
      const waitTodo = arr.filter((item) => {
        return item.done === false;
      }).length;
      const hasDone = arr.filter((item) => {
        return item.done === true;
      }).length;
      const emergency_all = arr.filter((item) => {
        return item.emergency === "emergency";
      }).length;
      const emergency_waitTodo = arr.filter((item) => {
        return item.emergency === "emergency" && item.done === false;
      }).length;
      const all = arr.length;
      this.monthTodoList = {
        waitTodo,
        hasDone,
        all,
        emergency_all,
        emergency_waitTodo,
      };
    },
    randarWeek() {
      const list = this.staticWeek();
      let newarr = [];
      for (let i = 0; i < 7; i++) {
        const done = list[i].filter((item) => {
          return item.done === true;
        }).length;
        const all = list[i].length;
        if (all) {
          newarr.push(done / all);
        } else {
          newarr.push(1);
        }
      }
      return newarr;
    },
    initlineMap() {
      var myChart = this.$echarts.init(this.$refs.statics_map, null, {
        renderer: "svg",
      });
      const colors = {
        yellow: "rgb(214, 218, 19)",
        blue: "rgb(35, 75, 207)",
        green: "rgb(23, 198, 7)",
        purple: "rgb(103, 4, 216)",
      };
      var option = {
        color: colors,
        grid: {
          right: "0%",
          left: "0%",
        },
        xAxis: [
          {
            type: "category",
            axisLine: {
              show: false,
              lineStyle: {
                color: "black",
              },
            },
            axisLabel: {
              fontSize: 20,
            },
            axisTick: {
              alignWithLabel: true,
              show: false,
            },
            // prettier-ignore
            data: ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
          },
        ],
        yAxis: [
          {
            // type: 'value',
            name: "Precipitation",
            position: "left",
            show: false,
            splitLine: {
              show: false,
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "black",
              },
            },
          },
        ],
        series: [
          {
            name: "wendu",
            type: "line",
            // yAxisIndex: 0,
            data: this.weekTodoList,
            symbolSize: 15,
            symbol: "circle",
            smooth: true,
            // lineStyle: 5,
            color: colors[this.changebgc],
            lineStyle: {
              width: 6,
              shadowColor: "rgba(0,0,0,0.8)",
              shadowBlur: 10,
              shadowOffsetY: 8,
            },
            areaStyle: {
              opacity: 1,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 0.6, [
                {
                  offset: 0,
                  color: this.color[this.changebgc],
                },
                {
                  offset: 1,
                  color: "rgba(255,255,255,0.8)",
                },
              ]),
            },
            label: {
              show: true,
              formatter: function (params) {
                return `${(params.value * 100).toFixed(0)}%`;
              },
              fontSize: 16,
            },
          },
        ],
      };

      option && myChart.setOption(option);
    },
    initRandarMap() {
      var myChart = this.$echarts.init(this.$refs.statics_week_radar, null, {
        renderer: "svg",
      });
      var option = {
        color: ["#FFE434", "#67F9D8", "#56A3F1", "#FF917C"],
        radar: [
          {
            indicator: [
              { text: "星期天", max: 1 },
              { text: "星期一", max: 1 },
              { text: "星期二", max: 1 },
              { text: "星期三", max: 1 },
              { text: "星期四", max: 1 },
              { text: "星期五", max: 1 },
              { text: "星期六", max: 1 },
            ],
            center: ["50%", "50%"],
            radius: 120,
            startAngle: 90,
            splitNumber: 5,
            shape: "circle",
            axisName: {
              formatter: "{value}",
              color: "#428BD4",
              fontSize: 14,
              fontWeight: 600,
            },
            splitArea: {
              areaStyle: {
                color: ["#77EADF", "#26C3BE", "#64AFE9", "#428BD4"],
                shadowColor: "rgba(0, 0, 0, 0.2)",
                shadowBlur: 10,
              },
            },
            axisLine: {
              lineStyle: {
                color: "rgba(211, 253, 250, 0.8)",
              },
            },
            splitLine: {
              lineStyle: {
                color: "rgba(211, 253, 250, 0.8)",
              },
            },
          },
        ],
        series: [
          {
            type: "radar",
            emphasis: {
              lineStyle: {
                width: 4,
              },
            },
            data: [
              {
                value: this.weekTodoList,
                name: "Data A",
                itemStyle: {
                  color: this.color[this.changebgc],
                },
                areaStyle: {
                  color: this.color[this.changebgc],
                  opacity: 0.65,
                },
                label: {
                  show: true,
                  formatter: function (params) {
                    return `${(params.value * 100).toFixed(0)}%`;
                  },
                },
              },
            ],
          },
        ],
      };
      option && myChart.setOption(option);
    },
    throttle(fun, delay) {
      let timer = null;
      return () => {
        if (!timer) {
          timer = setTimeout(() => {
            timer = null;
          }, delay);
          fun(arguments);
        }
      };
    },
  },
  mounted() {
    this.initRandarMap();
    this.initlineMap();
    this.staticMonth();
    const chartobj = this.$echarts.init(this.$refs.statics_map);
    const myObserver = new ResizeObserver(
      this.throttle((entries) => {
        chartobj.resize();
      }, 150)
    );
    myObserver.observe(this.$refs.statics_map);
  },
  beforeDestroy() {
    const myObserver = new ResizeObserver(
      this.throttle((entries) => {
        chartobj.resize();
      }, 150)
    );
    myObserver.disconnect(this.$refs.statics_map);
  },
};
</script>

<style scoped>
.statics {
  height: 100vh;
  flex: 1 0 700px;
  /* overflow: hidden; */
}
.statics_map_box {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  text-align: center;
  align-items: center;
}
.statics_map {
  height: 350px;
  flex: 1 0 700px;
  background-color: #fff;
  margin: 20px 20px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: stretch;
}
.statics_map ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.statics_map ul li {
  text-align: center;
  list-style: none;
  display: inline-block;
  flex: 1 0 calc(100% / 7);
  height: 50px;
  /* width: 60px;
  height: 60px; */
}
/* dudu */

.statics_week_box {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  /* overflow: hidden; */
  align-content: stretch;
}
.statics_week_radar {
  flex: 0 0 350px;
  height: 350px;
  border-radius: 30px;
  background-color: #fff;
  margin: 20px 20px;
  position: relative;
  overflow: hidden;
}
.statics_week {
  flex: 1 0 650px;
  height: 350px;
  border-radius: 30px;
  background-color: #fff;
  margin: 20px 20px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: stretch;
  align-content: center;
  flex-direction: row;
}
.data {
  flex: 1 0 200px;
  text-align: center;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0);
  vertical-align: middle;
  padding: 35px 0px;
}
.data p {
  line-height: 38px;
}
.data:hover {
  background-color: rgba(220, 220, 220, 0.15);
}
.data span {
  color: rgb(50, 50, 50);
  font-size: 55px;
  font-weight: bold;
  display: inline-block;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.data p {
  margin: 5px 0;
  font-size: 16px;
  font-weight: 700;
  color: rgb(206, 206, 206);
}
@media (max-width: 1000px) {
  .statics_week_box {
    display: block;
  }
}
.circle {
  offset-path: path(
    "m178.90144,56.13189l-58.23937,74.91232l2.28304,98.0625l95.27901,-27.64047l-31.88319,-59.54828l-7.43948,-85.78606z"
  );
  opacity: 0;
  animation: move 2s ease-in-out infinite alternate;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  position: absolute;
  top: 30px;
}
.statics_subscription {
  position: absolute;
  text-align: center;
  left: 400px;
  top: 50%;
  transform: translateY(-50%);
  font-weight: 500;
  font-size: 26px;
}
.statics_subscription p {
  font-size: 20px;
  line-height: 85px;
  font-weight: normal;
}
.statics_subscription span {
  font-size: 45px;
  font-weight: bold;
}
svg text {
  font-size: 21px;

  font-weight: 400;
}
svg {
  position: absolute;
  top: 30px;
}
@keyframes move {
  30% {
    opacity: 0%;
    offset-distance: 0%;
  }
  100% {
    opacity: 100%;
    offset-distance: 100%;
  }
}
.yellow {
  stroke: rgba(250, 251, 197, 0.463);
  border: 2px solid rgba(250, 251, 197);
}
.blue {
  fill: rgba(202, 213, 249, 0.509);
  border: 2px solid rgb(202, 213, 249);
}
.green {
  fill: rgba(197, 238, 193, 0.456);
  border: 2px solid rgba(197, 238, 193);
}
.purple {
  fill: rgba(217, 191, 246, 0.362);
  border: 2px solid rgba(217, 191, 246);
}
.circleyellow {
  background-color: rgb(194, 197, 63, 0.7);
  border: 2px solid rgb(194, 197, 63);
}
.circleblue {
  background-color: rgb(71, 103, 210, 0.7);
  border: 2px solid rgb(71, 103, 210);
}
.circlegreen {
  background-color: rgb(74, 184, 64, 0.7);
  border: 2px solid rgb(74, 184, 64);
}
.circlepurple {
  background-color: rgb(134, 56, 224, 0.7);
  border: 2px solid rgb(134, 56, 224);
}

.circleyellow {
  color: rgb(214, 218, 19);
}
.circleblue {
  color: rgb(35, 75, 207);
}
.circlegreen {
  color: rgb(23, 198, 7);
}
.circlepurple {
  color: rgb(103, 4, 216);
}
.radar_map {
  height: 350px;
  width: 350px;
}
</style>