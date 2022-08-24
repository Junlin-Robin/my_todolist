<template>
  <div class="calendarbox" :class="'box' + this.showStyleMonth">
    <div class="calendartitle" v-show="showStyleMonth">
      <span @click="visiblePreMonth"><</span>
      {{ this.year }} 年 {{ this.month }} 月
      <span @click="visibleLastMonth">></span>
    </div>
    <div @click="backToday" class="backToday" v-if="time !== new Date().toLocaleDateString()">回到今日</div>
    <div class="daybox">
      <ul>
        <li>
          <p>周日</p>
        </li>
        <li>
          <p>周一</p>
        </li>
        <li>
          <p>周二</p>
        </li>
        <li>
          <p>周三</p>
        </li>
        <li>
          <p>周四</p>
        </li>
        <li>
          <p>周五</p>
        </li>
        <li>
          <p>周六</p>
        </li>
      </ul>
    </div>
    <div class="datebox">
      <ul>
        <li v-for="item in showlist" :key="item.id" ref="datebox">
          <a
            href="#"
            @click.prevent="dateSelect(item)"
            :class="[item.isthismonth, item.isselect]"
            :id="item.isselect + changebgc"
            >{{ item.date }}</a
          >
          <div class="light" v-show="showlight(item.time)"></div>
        </li>
      </ul>
      <!-- {{todo_list}} -->
      <button class="btn" @click="changemonth"></button>
    </div>
  </div>
</template>

<script>
import CalendarAlgorithm from "./CalendarAlgorithm";
import { mapGetters } from "vuex";

export default {
  name: "Calendar",
  mixins: [CalendarAlgorithm],
  data() {
    return {
      showlist: [],
      showStyleMonth: false,
    };
  },
  computed: {
    ...mapGetters(["changebgc","show_list"]),
  },
  created() {
    this.showlist = this.visibleWeek();
  },
  methods: {
    dateSelect(item) {
      if (item.isthismonth === "no") {
        if (item.month < this.month) {
          this.visiblePreMonth(event, item.date);
        } else {
          this.visibleLastMonth(event, item.date);
        }
        this.$store.commit("changeshowlist", item.time);
        this.$bus.$emit("show_waitTodo");
        this.showlist = this.visibleWeek();
        this.showStyleMonth = false;
      } else {
        this.showlist.forEach((item) => {
          item.isselect = false;
        });
        item.isselect = true;
        this.$store.commit("changeshowlist", item.time);
        this.$bus.$emit("show_waitTodo");
        this.showlist = this.visibleWeek();
        this.showStyleMonth = false;
      };
      this.year = item.year;
      this.month = item.month;
      this.date = item.date;
      this.day = item.day;
      this.time = item.time;
    },
    changemonth() {
      if (!this.showStyleMonth) {
        this.showStyleMonth = !this.showStyleMonth;
        this.showlist = this.showmonth;
      } else {
        this.showStyleMonth = !this.showStyleMonth;
        this.showlist = this.visibleWeek();
      }
    },
    showlight(i) {
      return this.show_list.filter((value) => {
        return value.time === i;
      }).length;
    },
  },
  mounted(){
    this.$store.commit("changeshowlist", this.time);
  }
};
</script>

<style scoped>
.calendarbox {
  flex: 1 0 500px;
  margin: 5px 50px;
  border-radius: 50px;
  background-color: #fff;
  position: relative;
}
.boxfalse {
  box-shadow: 0px 0px 0px #fff;
}
.boxtrue {
  box-shadow: 0px 6px 10px rgb(216, 216, 216);
}
.datebox {
  position: relative;
  /* transition: all 5s linear; */
  z-index: 5;
  margin: 0px auto;
  border-radius: 50px;
  background-color: #fff;
}
ul {
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}
ul li {
  width: calc(100% / 7);
  list-style: none;
  display: inline-block;
  text-align: center;
  margin: 5px auto;
}
li p {
  font-size: 15px;
  color: rgb(166, 166, 166);
  font-weight: 500;
}
li a {
  display: block;
  margin: 0px auto 15px auto;
  align-content: center;
  line-height: 43px;
  /* padding-bottom: 5px; */
  width: 45px;
  height: 45px;
  border-radius: 50%;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
}
.yes {
  color: rgb(35, 35, 35);
}
.no {
  color: rgb(187, 187, 187);
}
.btn {
  display: block;
  background-color: rgb(220, 220, 220);
  border: 0px;
  width: 80px;
  height: 6px;
  border-radius: 3px;
  margin: 0px auto;
}
.btn:hover {
  background-color: rgb(188, 188, 188);
}
.light {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: rgb(216, 67, 67);
  margin: 6px auto;
}
#trueyellow {
  color: white;
  background-color: rgb(241, 243, 114);
}
#trueblue {
  color: white;
  background-color: rgb(162, 178, 229);
}
#truegreen {
  color: white;
  background-color: rgb(163, 218, 158);
}
#truepurple {
  color: white;
  background-color: rgb(189, 158, 224);
}
.calendartitle,
.calendartitle span {
  text-align: center;
  font-size: 22px;
  line-height: 35px;
  font-weight: bold;
  color: rgb(66, 66, 66);
}
.calendartitle {
  margin: 10px auto 20px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* word-spacing: 8px; */
}
.calendartitle span {
  margin: 0 80px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  text-align: center;
  vertical-align: middle;
}
.calendartitle span:hover {
  background-color: rgb(240, 240, 240);
}
.backToday{
  height: 20px;
  width: 100px;
  border-radius: 10px;
  background-color: rgb(238, 144, 61);
  position: absolute;
  top: -40px;
  left: 130px;
  text-align: center;
  font-size: 15px;
  line-height: 20px;
  color: #fff;
  cursor: pointer;
}
</style>