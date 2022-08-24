import { nanoid } from "nanoid";

export default {
  //直接返回运行时对应的事件，返回时间对象
  data() {
    return {
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      date: new Date().getDate(),
      day: new Date().getDay(),
      time: new Date().toLocaleDateString(),
      showmonth: [],
    }
  },
  computed: {

  },
  methods: {
    daysInMonth() {
      const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      if (
        (this.year % 4 === 0 && this.year % 100 !== 0) ||
        this.year % 400 === 0
      ) {
        daysInMonth[1] = 29;
      }
      return daysInMonth;
    },
    //某月的1号是星期几(从星期天开始)
    targetDay(i) {
      if (i) {
        var newdate = new Date(i);
      } else {
        var newdate = new Date();
      }
      const differday = (newdate.getDate() - 1) % 7;
      const day = newdate.getDay();
      if (differday <= day) {
        return day - differday;
      } else {
        return 7 - (differday - day);
      }
    },
    //星期循环
    daycycle(i) {
      if (i >= 0 && i <= 6) {
        return i;
      } else {
        return i % 7;
      }
    },
    //获取下月数据
    getLastMonth(i) {
      if (i) {
        var month = new Date(i).getMonth() + 1;
        var year = new Date(i).getFullYear();
      } else {
        var month = this.month;
        var year = this.year;
      };
      if (month === 12) {
        month = 1;
        year += 1;
      } else {
        month += 1;
      }
      return {
        year,
        month,
        newdate: `${year}-${month}-1`
      };
    },
    //获取上月数据
    getPreMonth(i) {
      if (i) {
        var month = new Date(i).getMonth() + 1;
        var year = new Date(i).getFullYear();
      } else {
        var month = this.month;
        var year = this.year;
      }
      if (month === 1) {
        month = 12;
        year -= 1;
      } else {
        month -= 1;
      }
      return {
        year,
        month,
      };
    },
    //渲染本周
    visibleWeek() {
      const visiblemonth = this.showmonth;
      const day = visiblemonth.filter(item => {
        return item.isselect === true;
      })[0].day;
      const date = visiblemonth.filter(item => {
        return item.isselect === true;
      })[0].date;
      const time = visiblemonth.filter(item => {
        return item.isselect === true;
      })[0].date;
      const index = visiblemonth.findIndex(item => {
        return item.isselect === true;
      });
      let showWeekList = [];
      for (let i = 1; i <= day; i++) {
        showWeekList.unshift(visiblemonth[index - i])
      };
      for (let i = 0; i < 7 - day; i++) {
        showWeekList.push(visiblemonth[index + i])
      };
      return showWeekList;
    },
    showMonthList() {
      return this.showmonth;
    },
    //当前月份渲染
    visibleCalendar(i) {
      const daysinmonth = this.daysInMonth()[this.month - 1];
      const daysinpremonth = this.daysInMonth()[this.getPreMonth().month - 1];
      const targetday = this.targetDay(i);
      const targetlastmonthday = this.targetDay(this.getLastMonth().newdate);
      let showMonthList = [];
      for (let i = 0; i < daysinmonth; i++) {
        showMonthList.push({ id: nanoid(), date: i + 1, day: this.daycycle(targetday + i), isthismonth: "yes", isselect: false, time: new Date(`${this.year}-${this.month}-${i + 1}`).toLocaleDateString(), year: this.year, month: this.month })
      };
      showMonthList[this.date - 1].isselect = true;
      // 判断是否渲染上月数据
      if (targetday !== 0) {
        for (let i = 0; i < targetday; i++) {
          showMonthList.unshift({ id: nanoid(), date: daysinpremonth - i, day: targetday - i - 1, isthismonth: "no", isselect: false, time: new Date(`${this.getPreMonth().year}-${this.getPreMonth().month}-${daysinpremonth - i}`).toLocaleDateString(), year: this.getPreMonth().year, month: this.getPreMonth().month })
        };
      };
      //判断是否渲染下月数据
      if (targetlastmonthday !== 0) {
        for (let i = 0; i < 7 - targetlastmonthday; i++) {
          showMonthList.push({ id: nanoid(), date: i + 1, day: targetlastmonthday + i, isthismonth: "no", isselect: false, time: new Date(`${this.getLastMonth().year}-${this.getLastMonth().month}-${i + 1}`).toLocaleDateString(), year: this.getLastMonth().year, month: this.getLastMonth().month })
        };
      };
      this.showmonth = showMonthList;
      // return showMonthList;
    },
    //渲染上一月
    //注意这里传参数，第一个默认为事件对象event
    visiblePreMonth(e, i = 1) {
      this.month = this.getPreMonth().month;
      this.year = this.getPreMonth().year;
      this.date = i;
      this.day = this.targetDay(`${this.year}-${this.month}-${this.date}`);
      this.time = new Date(`${this.year}-${this.month}-${this.date}`).toLocaleDateString();
      this.visibleCalendar(`${this.year}-${this.month}-${this.date}`);
      this.showmonth = this.showMonthList();
      this.showlist = this.showMonthList();
    },
    //渲染下一月
    visibleLastMonth(e, i = 1) {
      this.month = this.getLastMonth().month;
      this.year = this.getLastMonth().year;
      this.date = i;
      this.day = this.targetDay(`${this.year}-${this.month}-${this.date}`);
      this.time = new Date(`${this.year}-${this.month}-${this.date}`).toLocaleDateString();
      this.visibleCalendar(`${this.year}-${this.month}-${this.date}`);
      this.showmonth = this.showMonthList();
      this.showlist = this.showMonthList();
    },
    //回到本天
    backToday() {
      this.year = new Date().getFullYear();
      this.month = new Date().getMonth() + 1;
      this.date = new Date().getDate();
      this.day = new Date().getDay();
      this.time = new Date().toLocaleDateString();
      this.visibleCalendar();
      if (!this.showStyleMonth) {
        this.showlist = this.visibleWeek();
      } else {
        this.showlist = this.showmonth;
      }
      this.$store.commit("changeshowlist", this.time);
      this.$bus.$emit("show_waitTodo");
      this.showlist = this.visibleWeek();
      this.showStyleMonth = false;
    },
    staticWeek() {
      const time = new Date().toLocaleDateString();
      const year = new Date().getFullYear();
      const month = new Date().getMonth() + 1;
      const date = new Date().getDate();
      const day = new Date().getDay();
      const daysinpremonth = this.daysInMonth()[this.getPreMonth(time).month - 1];
      const preyear = this.getPreMonth(time).year;
      const preMonth = this.getPreMonth(time).month;
      const lastyear = this.getLastMonth(time).year;
      const lastMonth = this.getLastMonth(time).month;
      const daysinmonth = this.daysInMonth()[month - 1];
      let timer = [];
      for (let i = 0; i <= day; i++) {
        if (date - i > 0) {
          const newdate = new Date(
            `${year}-${month}-${date - i}`
          ).toLocaleDateString();
          timer.unshift(newdate);
        } else {
          const newdate = new Date(
            `${preyear}-${preMonth}-${daysinpremonth - i}`
          ).toLocaleDateString();
          timer.push(newdate);
        }
      };
      for (let i = 1; i < 7 - day; i++) {
        if (date + i <= daysinmonth) {
          const newdate = new Date(
            `${year}-${month}-${date + i}`
          ).toLocaleDateString();
          timer.push(newdate);
        } else {
          const newdate = new Date(
            `${lastyear}-${lastMonth}-${i}`
          ).toLocaleDateString();
          timer.push(newdate);
        }
      };
      const arr = [];
      for (let i = 0; i < timer.length; i++) {
        arr.push(
          this.$store.getters.show_list.filter((item) => {
            return item.time === timer[i];
          })
        );
      }
      return arr;

    },
  },
  created() {
    this.visibleCalendar()
  },


}


