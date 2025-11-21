<template>
  <!-- 数据总览 -->
  <!-- PDP检查,工时统计,代码统计,airtest执行统计,各年级bug统计,效能数据统计,buffer数据统计,缺陷/磨课排行榜,QA主动发现缺陷,年级线上缺陷,工作度量 -->
  <div>
    <!-- PDP检查+工时统计  -->
    <div class="view_todaytodo">
      <el-card>
        <el-radio-group size="small" class="todaytodo" />
        <div id="todaytodo_id" />
      </el-card>
      <el-card>
        <el-radio-group size="small" class="registertime">
          <el-date-picker
            v-model="registertime_value"
            type="daterange"
            size="small"
            value-format="yyyy-MM-dd"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            @change="registertime"
          >
          </el-date-picker>
        </el-radio-group>
        <div id="registertime_id" />
      </el-card>
    </div>
    <!-- 代码统计+airtest执行统计 -->
    <div class="view_gitCommintStatisticsByQuarter">
      <el-card class="card">
        <el-radio-group size="small" class="gitCommintStatisticsByQuarter">
          <el-date-picker
            v-model="gitCommintStatisticsByQuarter_value"
            type="daterange"
            size="small"
            value-format="yyyy-MM-dd"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            @change="gitCommintStatisticsByQuarter"
          >
          </el-date-picker>
        </el-radio-group>
        <div id="gitCommintStatisticsByQuarter_id" />
      </el-card>
      <el-card>
        <el-radio-group
          v-model="switch_executor_radio"
          size="small"
          @change="switch_executor"
        >
          <el-radio-button label="number_executions">年级</el-radio-button>
          <el-radio-button label="executions">执行人</el-radio-button>
        </el-radio-group>
        <h2 style="text-align: left; margin-left: 5px; font-size: 18px">
          {{ "Airtest执行统计" }}
        </h2>
        <div id="switch_executor_id" />
      </el-card>
    </div>
    <!-- bug统计 -->
    <div class="tatistics-bug">
      <el-card>
        <el-date-picker
          v-model="statistics_value"
          type="daterange"
          size="small"
          value-format="yyyy-MM-dd"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          @change="statistics"
        >
        </el-date-picker>
        &emsp;
        <el-radio-group
          v-model="statistics_radio"
          size="small"
          @change="statistics"
        >
          <el-radio-button label="数学">数学</el-radio-button>
          <el-radio-button label="语文">语文</el-radio-button>
          <el-radio-button label="英语">英语</el-radio-button>
          <el-radio-button label="自然科学">自然科学</el-radio-button>
        </el-radio-group>
        <el-select
          id="class"
          v-model="default_value"
          placeholder="选择年级"
          size="small"
          style="float: right; margin-left: 10px"
          @change="Gradetrend"
        >
          <el-option
            v-for="item in gradetrend_radio"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <div id="statistics_id" />
      </el-card>
    </div>
    <!-- 效能统计 -->
    <div class="view_efficiencyStatistics">
      <el-card>
        <el-radio-group size="small" class="efficiencyStatistics">
          <el-date-picker
            v-model="efficiencyStatistics_value"
            type="daterange"
            size="small"
            value-format="yyyy-MM-dd"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            @change="efficiencyStatistics"
          >
          </el-date-picker>
        </el-radio-group>
        &emsp;
        <el-radio-group
          v-model="efficiencyStatistics_radio"
          size="small"
          @change="efficiencyStatistics"
        >
          <el-radio-button label="week">周</el-radio-button>
          <el-radio-button label="month">月</el-radio-button>
        </el-radio-group>
        &emsp;
        <el-select
          id="class"
          v-model="efficiencyStatistics_grade_radio"
          placeholder="选择年级"
          size="small"
          style="float: right; margin-left: 10px"
          @change="efficiencyStatistics"
        >
          <el-option
            v-for="item in gradeOptions"
            :key="item"
            :label="item"
            :value="item"
          >
          </el-option>
        </el-select>

        <h2 style="text-align: left; margin-left: 5px; font-size: 18px">
          {{ "效能数据统计" }}
        </h2>

        <div id="efficiencyStatistics_id" />
      </el-card>
    </div>
    <!-- buffer分析 -->
    <div class="view_buffer_statis">
      <el-card>
        <el-date-picker
          v-model="buffer_statis_value"
          type="daterange"
          size="small"
          value-format="yyyy-MM-dd"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          @change="buffer_statis"
        >
        </el-date-picker>
        &emsp;
        <el-radio-group
          v-model="buffer_statis_radio"
          size="small"
          @change="buffer_statis"
        >
          <el-radio-button label="数学">数学</el-radio-button>
          <el-radio-button label="语文">语文</el-radio-button>
          <el-radio-button label="英语">英语</el-radio-button>
          <el-radio-button label="自然科学">自然科学</el-radio-button>
          <el-radio-button label="欢乐伙伴">欢乐伙伴</el-radio-button>
        </el-radio-group>
        <el-col :span="18">
          <h2 style="text-align: left; margin-left: 5px; font-size: 18px">
            {{ "buffer数据统计" }}
          </h2>
        </el-col>
        <div id="buffer_statis_id" />
      </el-card>
    </div>
    <!-- 缺陷/磨课排行 -->
    <div class="view_defect_moke_grind">
      <el-card>
        <el-radio-group size="small" class="defectMokeGrind">
          <el-date-picker
            v-model="defectMokeGrind_dateValue"
            type="daterange"
            size="small"
            value-format="yyyy-MM-dd"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            @change="defectMokeGrind"
          >
          </el-date-picker>
        </el-radio-group>
        <h2 style="text-align: left; margin-left: 5px; font-size: 18px">
          {{ "缺陷/磨课排行" }}
        </h2>
        <div id="defectMokeGrind_id" />
      </el-card>
    </div>
    <!-- QA主动发现缺陷 -->
    <div class="qa_find_bug">
      <el-card>
        <el-radio-group size="small" class="qaActiveDiscovery">
          <el-date-picker
            v-model="qaActiveDiscovery_dateValue"
            type="daterange"
            size="small"
            value-format="yyyy-MM-dd"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            @change="qaActiveDiscovery"
          >
          </el-date-picker>
        </el-radio-group>
        <div id="qaActiveDiscovery_id" />
      </el-card>
      <el-card>
        <el-radio-group size="small" class="qaOnlineDefect">
          <el-date-picker
            v-model="qaOnlineDefect_value"
            type="daterange"
            size="small"
            value-format="yyyy-MM-dd"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            @change="qaOnlineDefect"
          >
          </el-date-picker>
        </el-radio-group>
        <h2 style="text-align: left; margin-left: 5px; font-size: 18px">
          {{ "年级线上缺陷" }}
        </h2>
        <div id="qaOnlineDefect_id" />
      </el-card>
    </div>
    <!--  工作度量 -->
    <div class="TestMokeIssue">
      <el-card>
        <el-radio-group
          v-model="TestMokeIssue_radio"
          size="small"
          @change="TestMokeIssue"
        >
          <el-radio-button label="month">月</el-radio-button>
          <el-radio-button label="week">周</el-radio-button>
        </el-radio-group>
        <el-col>
          <h2 style="text-align: left; margin-left: 5px; font-size: 20px">
            {{ "工作度量" }}
          </h2>
        </el-col>
        <div id="TestMokeIssue_id" />
      </el-card>
    </div>
  </div>
</template>
<script>
import { request } from "@/utils/quality";
import { _ChartByLevel, _DefectLeaderboard } from "@/api/form_submission";
const echarts = require("echarts");
export default {
  name: "dataPreview",
  data() {
    return {
      gradeChange_radio: [],
      default_value: "",
      qaActiveDiscovery_dateValue: [],
      TestMokeIssue_radio: "month",
      defectMokeGrind_dateValue: [],
      qaOnlineDefect_value: [],
      statistics_value: [],
      statistics_radio: "数学",
      default_value: "",
      gradetrend_radio: [],
      efficiencyStatistics_value: [],
      efficiencyStatistics_radio: "month",
      efficiencyStatistics_grade_radio: "MA-P1",
      gradeOptions: [
        "总计",
        "MA-L1",
        "MA-L2",
        "MA-L3",
        "MA-L4",
        "MA-L5",
        "MA-L6",
        "MA-L7",
        "MA-L8",
        "MA-L9",
        "MA-P1",
        "MA-P2",
        "MA-P3",
        "MA-P4",
        "MA-P5",
        "MA-P6",
        "MA-P7",
        "MA-P8",
        "MA-P9",
        "MA-K2",
        "MA-GEP",
        "MCE-P1",
        "MCE-P2",
        "MCE-P3",
        "MCE-P4",
        "MCE-P5",
        "MCE-P6",
        "CH-S2",
        "CH-S4",
        "Science",
      ],
      //buffer分析
      buffer_statis_value: [],
      buffer_statis_radio: "数学",
      //PDP检查、工时统计
      registertime_value: [],
      //代码统计、airtest执行统计
      gitCommintStatisticsByQuarter_value: [],
      switch_executor_radio: "number_executions",
    };
  },
  mounted() {
    this.todaytodo();
    this.registertime();
    this.gitCommintStatisticsByQuarter();
    this.switch_executor();
    this.statistics();
    this.efficiencyStatistics();
    this.buffer_statis();
    this.qaActiveDiscovery();
    this.TestMokeIssue();
    this.defectMokeGrind();
    this.qaOnlineDefect();
  },
  methods: {
    // 今日待办
    todaytodo() {
      echarts.dispose(document.getElementById("todaytodo_id"));
      var vm = this;
      var rateChart = echarts.init(document.getElementById("todaytodo_id"));
      request({
        method: "POST",
        url: "/todaytodo",
      }).then(function (response) {
        var option = {
          title: {
            text: "PDP检查",
          },
          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            type: "category",
            triggerEvent: true,
            data: response.data.data.name,
            axisLabel: {
              interval: 0,
              rotate: 20,
            },
            axisTick: {
              alignWithLabel: true,
            },
          },
          yAxis: { type: "value" },
          legend: {
            // bottom: "30%",
            bottom: "-5px",
            data: [
              "待上线",
              "待磨课",
              "待测试",
              "待提测",
              "本月创建",
              "本月提测",
              "本月开始",
              "本月结束",
              "本月上线",
              "缺陷/磨课",
            ],
          },

          grid: {
            left: "35px",
            right: "35px",
          },
          series: [
            {
              name: "待上线",
              data: response.data.data.onlinedelaylist,
              type: "line",
              color: "#089CFF",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "待磨课",
              data: response.data.data.Grindingdelayluist,
              type: "line",
              color: "#FFAC54",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "待测试",
              data: response.data.data.testdelaylist,
              type: "line",
              color: "#ff7f50",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "待提测",
              data: response.data.data.ticedelaylist,
              type: "line",
              color: "#ff7f90",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "本月创建",
              data: response.data.data.PDP_month_create,
              type: "line",
              color: "#93EB61",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },

            {
              name: "本月提测",
              data: response.data.data.PDP_month_test,
              type: "line",
              color: "#E8D64E",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "本月开始",
              data: response.data.data.PDP_month_start,
              type: "line",
              color: "#C2EA23",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "本月结束",
              data: response.data.data.PDP_month_end,
              type: "line",
              color: "#5FBBA2",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "本月上线",
              data: response.data.data.PDP_month_close,
              type: "line",
              color: "#905FBB",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "缺陷/磨课",
              data: response.data.data.PDP_month_close,
              type: "line",
              color: "#DE53BC",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
          ],
        };
        rateChart.setOption(option);
        rateChart.on("click", function (params) {
          if (params != null)
            window.open(
              "https://jira.bg.huohua.cn/secure/StructureBoard.jspa?p=200547398"
            );
        });
      }),
        (window.onresize = function () {
          rateChart.resize();
        });
    },
    //工时统计
    registertime() {
      echarts.dispose(document.getElementById("registertime_id"));
      var vm = this;
      var rateChart = echarts.init(document.getElementById("registertime_id"));
      if (this.registertime_value[0] == undefined) {
        (this.registertime_value[0] = ""), (this.registertime_value[1] = "");
      }
      request({
        method: "POST",
        url:
          "/registertime" +
          "?start_date=" +
          this.registertime_value[0] +
          "&end_date=" +
          this.registertime_value[1],
      }).then(function (response) {
        var option = {
          title: {
            text: "工时统计",
          },

          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            type: "category",

            data: response.data.data.name,
            axisLabel: {
              interval: 0,
              rotate: 20,
            },
            axisTick: {
              alignWithLabel: true,
            },
          },
          yAxis: { type: "value" },
          legend: {
            data: ["时长", "登记次数"],
          },
          grid: {
            left: "35px",
            right: "35px",
            bottom: "30px",
          },
          series: [
            {
              name: "时长",
              data: response.data.data.time,
              type: "line",
              color: "#089CFF",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "登记次数",
              data: response.data.data.time_num,
              type: "line",
              color: "#FFAC54",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
          ],
        };
        rateChart.setOption(option);
      }),
        rateChart.on("click", function (params) {
          if (params != null)
            window.open(
              "https://jira.bg.huohua.cn/secure/StructureBoard.jspa?p=200547398"
            );
        });
      window.onresize = function () {
        rateChart.resize();
      };
    },
    // 代码统计
    gitCommintStatisticsByQuarter() {
      var myChart = echarts.init(
        document.getElementById("gitCommintStatisticsByQuarter_id")
      );
      if (this.gitCommintStatisticsByQuarter_value[0] == undefined) {
        (this.gitCommintStatisticsByQuarter_value[0] = ""),
          (this.gitCommintStatisticsByQuarter_value[1] = "");
      }
      request({
        method: "POST",
        url:
          "gitCommintStatisticsByQuarter" +
          "?start_date=" +
          this.gitCommintStatisticsByQuarter_value[0] +
          "&end_date=" +
          this.gitCommintStatisticsByQuarter_value[1],
      }).then(function (response) {
        var option = {
          title: {
            text: "代码统计",
          },

          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            type: "category",
            data: response.data.data.name,
            axisTick: {
              alignWithLabel: true,
            },
            axisLabel: {
              interval: 0,
              rotate: 20,
            },
          },

          yAxis: { type: "value" },
          legend: {
            data: ["代码提交数量", "提交次数"],
          },
          axisLabel: {
            show: true,
            interval: "auto",
          },
          grid: {
            left: "40px",
            right: "10px",
            bottom: "30px",
          },
          series: [
            {
              name: "代码提交数量",
              data: response.data.data.adds,
              type: "line",
              color: "#089CFF",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "提交次数",
              data: response.data.data.commints,
              type: "line",
              color: "#08922F",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
          ],
        };
        myChart.setOption(option);
      });
    },
    // Airtest执行统计
    switch_executor() {
      if (this.switch_executor_radio == "number_executions") {
        this.chartBylevel();
      } else if (this.switch_executor_radio == "executions") {
        this.chartByexecutor();
      }
    },
    chartBylevel() {
      echarts.dispose(document.getElementById("switch_executor_id"));
      var vm = this;
      var rateChart = echarts.init(
        document.getElementById("switch_executor_id")
      );
      rateChart.showLoading({
        text: "稍等，数据加载中......",
        color: "#0183FF",
        textColor: "#000",
        maskColor: "rgba(247, 248, 250, 0)",
        zlevel: 0,
        lineWidth: 2,
      });
      _ChartByLevel().then(function (response) {
        rateChart.hideLoading();
        var option = {
          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            type: "category",
            data: response.data.x,
            axisLabel: {
              interval: 0,
              rotate: 20,
            },
            axisTick: {
              alignWithLabel: true,
            },
          },
          yAxis: {
            axisLabel: {
              show: true,
              interval: "auto",
            },
          },
          grid: {
            top: "25px",
            left: "25px",
            right: "25px",
            bottom: "33px",
          },
          series: [
            {
              name: "执行次数",
              data: response.data.y,
              type: "line",
              color: "#089CFF",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
          ],
        };
        rateChart.setOption(option);
        rateChart.on("click", function (params) {
          if (params != null)
            window.open("http://localhost:9528/#/report_statistics/report");
        });
      });
    },
    chartByexecutor() {
      echarts.dispose(document.getElementById("switch_executor_id"));
      var rateChart = echarts.init(
        document.getElementById("switch_executor_id")
      );
      request({
        method: "POST",
        url: "chartByexecutor",
      }).then(function (response) {
        var option = {
          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            type: "category",
            data: response.data.data.x,
            axisLabel: {
              interval: 0,
              rotate: 20,
            },
            axisTick: {
              alignWithLabel: true,
            },
          },
          yAxis: {
            axisLabel: {
              show: true,
              interval: "auto",
            },
          },
          series: [
            {
              name: "执行次数",
              data: response.data.data.y,
              type: "line",
              color: "#089CFF",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
          ],
        };
        rateChart.setOption(option);
      });
    },
    // 各年级bug统计
    statistics() {
      var vm = this;
      request({
        method: "POST",
        url: "/provide_data" + "?Subject=" + this.statistics_radio,
      }).then(function (response) {
        vm.gradetrend_radio = response.data.data
          ? response.data.data.reverse()
          : [];
        vm.default_label = vm.gradetrend_radio[0].label;
        vm.default_value = vm.gradetrend_radio[0].value;
        vm.Gradetrend();
      });
    },
    Gradetrend(val) {
      if (val == undefined) {
        val = this.default_value;
      }
      echarts.dispose(document.getElementById("statistics_id"));
      var rateChart = echarts.init(document.getElementById("statistics_id"));
      if (this.statistics_value[0] == undefined) {
        (this.statistics_value[0] = ""), (this.statistics_value[1] = "");
      }
      rateChart.showLoading({
        text: "稍等，数据加载中......",
        color: "#0183FF",
        textColor: "#000",
        maskColor: "rgba(247, 248, 250, 0)",
        zlevel: 0,
        lineWidth: 2,
      });
      const datas = {
        subject: this.statistics_radio,
        aclass: val,
        start: this.statistics_value[0],
        end: this.statistics_value[0],
      };
      _DefectLeaderboard(datas).then((res) => {
        rateChart.hideLoading();
        if (res.msg == "error") {
          this.$notify({
            title: "成功",
            message: "近一周内，没有缺陷",
            type: "success",
            duration: 2000,
          });
        }

        var option = {
          title: {
            text: "各年级bug统计",
          },
          tooltip: {
            trigger: "axis",
            magicType: { show: true, type: ["line", "bar"] },
          },
          xAxis: {
            type: "category",
            data: res.data.name,
            axisLabel: {
              interval: 0,
              rotate: 20,
            },
            axisTick: {
              alignWithLabel: true,
            },
          },
          yAxis: [
            {
              type: "value",
              name: "数量",
              min: 0,
              axisLabel: {
                show: true,
                interval: "auto",
              },
            },
          ],
          grid: {
            left: "35px",
            right: "35px",
            bottom: "70px",
          },
          series: [
            {
              name: "数量",
              data: res.data.count,
              type: "bar",
              color: "#9AC411",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
          ],
          dataZoom: [
            {
              type: "slider",
              show: true,
              start: 0,
              end: 100,
              xAxisIndex: [0],
              // bottom:-10//距离底部的距离
            },
          ],
        };
        rateChart.setOption(option);
      });
      rateChart.on("click", function (params) {
        if (params != null)
          window.open(
            "https://jira.bg.huohua.cn/secure/StructureBoard.jspa?p=200547398"
          );
      });
      window.onresize = function () {
        rateChart.resize();
      };
    },
    // 效能统计
    efficiencyStatistics() {
      echarts.dispose(document.getElementById("efficiencyStatistics_id"));
      var vm = this;
      if (this.efficiencyStatistics_value[0] == undefined) {
        (this.efficiencyStatistics_value[0] = ""),
          (this.efficiencyStatistics_value[1] = "");
      }
      var efficiencyStatistics_startdata = parseInt(
        this.efficiencyStatistics_value[0].replaceAll("-", "")
      );
      var efficiencyStatistics_enddata = parseInt(
        this.efficiencyStatistics_value[1].replaceAll("-", "")
      );
      var rateChartefficiency = echarts.init(
        document.getElementById("efficiencyStatistics_id")
      );
      rateChartefficiency.showLoading({
        text: "稍等，数据加载中......",
        color: "#0183FF",
        textColor: "#000",
        maskColor: "rgba(247, 248, 250, 0)",
        zlevel: 0,
        lineWidth: 2,
      });
      request({
        method: "POST",
        url:
          "efficiencyChart" +
          "?grade=" +
          this.efficiencyStatistics_grade_radio +
          "&type=" +
          this.efficiencyStatistics_radio +
          "&start_date=" +
          this.efficiencyStatistics_value[0] +
          "&end_date=" +
          this.efficiencyStatistics_value[1],
      }).then(function (response) {
        rateChartefficiency.hideLoading();
        var option = {
          y: 25,
          tooltip: {
            trigger: "axis",
          },

          xAxis: {
            type: "category",

            data: response.data.data.date_list,
            axisLabel: {
              interval: 0,
              rotate: 20,
            },
            axisTick: {
              alignWithLabel: true,
            },
          },
          yAxis: { type: "value" },
          legend: {
            y: 25,
            left: "center",
            width: "100%",
            data: [
              "上线课次/人(个)",
              "上线题目/人(个)",
              "测试时长(天)",
              "磨课等待时长(天)",
              "验收时长(天)",
              "buffer数量(个)",
            ],
          },
          grid: {
            left: "35px",
            right: "40px",
            bottom: "29px",
          },
          series: [
            {
              name: "上线课次/人(个)",
              data: response.data.data.online_average,
              type: "line",
              color: "#089CFF",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "上线题目/人(个)",
              data: response.data.data.online_topic_average,
              type: "line",
              color: "#FFAC54",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "测试时长(天)",
              data: response.data.data.test_time,
              type: "line",
              color: "#ff7f50",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "磨课等待时长(天)",
              data: response.data.data.check_await_time,
              type: "line",
              color: "#C66DF2",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "验收时长(天)",
              data: response.data.data.check_time,
              type: "line",
              color: "#58E1F7",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },

            {
              name: "buffer数量(个)",
              data: response.data.data.buffer_num,
              type: "line",
              color: "#9AC411",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
          ],
        };

        rateChartefficiency.setOption(option);
      }),
        (window.onresize = function () {
          rateChartefficiency.resize();
        });
    },
    // buffer数据统计
    buffer_statis() {
      echarts.dispose(document.getElementById("buffer_statis_id"));
      var vm = this;
      if (this.buffer_statis_value[0] == undefined) {
        (this.buffer_statis_value[0] = ""), (this.buffer_statis_value[1] = "");
      }
      var rateChart_buffer = echarts.init(
        document.getElementById("buffer_statis_id")
      );
      rateChart_buffer.showLoading({
        text: "稍等，数据加载中......",
        color: "#0183FF",
        textColor: "#000",
        maskColor: "rgba(247, 248, 250, 0)",
        zlevel: 0,
        lineWidth: 2,
      });
      request({
        method: "POST",
        url:
          "bufferStatisChart" +
          "?subject=" +
          this.buffer_statis_radio +
          "&start_date=" +
          this.buffer_statis_value[0] +
          "&end_date=" +
          this.buffer_statis_value[1],
      }).then(function (response) {
        rateChart_buffer.hideLoading();
        var option = {
          tooltip: {
            trigger: "axis",
          },

          xAxis: {
            type: "category",
            data: response.data.data.subject_class_list,
            axisLabel: {
              interval: 0,
              rotate: 20,
            },
            axisTick: {
              alignWithLabel: true,
            },
          },
          yAxis: {
            type: "value",
            axisLabel: {
              show: true,
              formatter: "{value}",
              interval: "auto",
            },
            show: true,
          },
          legend: {
            y: 25,
            left: "center",
            width: "100%",
            data: ["buffer数目(个)"],
          },
          grid: {
            top: "65px",
            left: "35px",
            right: "40px",
            bottom: "29px",
          },
          series: [
            {
              name: "buffer数目(个)",
              data: response.data.data.buffer_count_list,
              type: "bar",
              color: "#089CFF",
              lineStyle: {
                width: 2,
              },
              label: { show: true },
            },
          ],
        };

        rateChart_buffer.setOption(option);
      }),
        (window.onresize = function () {
          rateChart_buffer.resize();
        });
    },
    GradeChange(val) {
      if (val == undefined) {
        val = this.default_value;
      }
      echarts.dispose(document.getElementById("showcase_id"));
      var rateChart = echarts.init(document.getElementById("showcase_id"));

      if (this.showcase_value[0] == undefined) {
        (this.showcase_value[0] = ""), (this.showcase_value[1] = "");
      }
      request({
        method: "POST",
        url:
          "/showcasetable" +
          "?classname=" +
          val +
          "&subject=" +
          this.showcase_radio,
        // "&start_date=" +
        // this.showcase_value[0] +
        // "&end_date=" +
        // this.showcase_value[1],
      }).then((response) => {
        var option = {
          title: {
            text: "showcase通过率",
          },
          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            type: "category",
            data: response.data.data.all_course_id,
            axisLabel: {
              interval: 0,
              rotate: 20,
            },
            axisTick: {
              alignWithLabel: true,
            },
          },
          yAxis: {
            type: "value",
            axisLabel: {
              show: true,
              interval: "auto",
              formatter: "{value} %",
            },
            show: true,
          },
          series: [
            {
              name: "showcase通过率",
              data: response.data.data.all_pass_rate,
              type: "line",
              color: "#089CFF",
              lineStyle: {
                width: 4,
              },
              label: { show: true, formatter: "{c}%" },
              markLine: {
                silent: true,
                lineStyle: {
                  color: "#333",
                },
                data: [
                  {
                    yAxis: 90,
                  },
                ],
              },
            },
          ],
        };
        rateChart.setOption(option);
      });
    },
    // 缺陷/磨课排行
    defectMokeGrind() {
      echarts.dispose(document.getElementById("defectMokeGrind_id"));
      var vm = this;
      var rateChart = echarts.init(
        document.getElementById("defectMokeGrind_id")
      );
      if (this.defectMokeGrind_dateValue[0] == undefined) {
        (this.defectMokeGrind_dateValue[0] = ""),
          (this.defectMokeGrind_dateValue[1] = "");
      }
      rateChart.showLoading({
        text: "稍等，数据加载中......",
        color: "#0183FF",
        textColor: "#000",
        maskColor: "rgba(247, 248, 250, 0)",
        zlevel: 0,
        lineWidth: 2,
      });
      request({
        method: "POST",
        url:
          "/defectMokeGrind" +
          "?start_date=" +
          this.defectMokeGrind_dateValue[0] +
          "&end_date=" +
          this.defectMokeGrind_dateValue[1],
      }).then(function (response) {
        rateChart.hideLoading();
        var option = {
          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            type: "category",

            data: response.data.data.x_axis,
            axisLabel: {
              interval: 0,
              rotate: 20,
            },
            axisTick: {
              alignWithLabel: true,
            },
          },
          yAxis: {
            type: "value",
            axisLabel: {
              show: true,
              formatter: "{value}",
              interval: "auto",
            },
            show: true,
          },
          legend: {
            data: ["缺陷", "磨课"],
          },
          grid: {
            top: "65px",
            left: "35px",
            right: "40px",
            bottom: "65px",
          },
          series: [
            {
              name: "缺陷",
              data: response.data.data.defect_list,
              type: "bar",
              color: "#089CFF",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "磨课",
              data: response.data.data.moke_list,
              type: "bar",
              color: "#FFAC54",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
          ],
        };
        rateChart.setOption(option);
        rateChart.on("click", function (params) {
          if (params != null)
            window.open(
              "https://jira.bg.huohua.cn/secure/Dashboard.jspa?selectPageId=20028"
            );
        });
      }),
        (window.onresize = function () {
          rateChart.resize();
        });
    },
    // qa主动发现缺陷
    qaActiveDiscovery() {
      echarts.dispose(document.getElementById("qaActiveDiscovery_id"));
      var vm = this;
      var rateChart = echarts.init(
        document.getElementById("qaActiveDiscovery_id")
      );
      if (this.qaActiveDiscovery_dateValue[0] == undefined) {
        (this.qaActiveDiscovery_dateValue[0] = ""),
          (this.qaActiveDiscovery_dateValue[1] = "");
      }
      rateChart.showLoading({
        text: "稍等，数据加载中......",
        color: "#0183FF",
        textColor: "#000",
        maskColor: "rgba(247, 248, 250, 0)",
        zlevel: 0,
        lineWidth: 2,
      });
      request({
        method: "POST",
        url:
          "/qaActiveDiscovery" +
          "?date_start=" +
          this.qaActiveDiscovery_dateValue[0] +
          "&date_end=" +
          this.qaActiveDiscovery_dateValue[1],
      }).then(function (response) {
        rateChart.hideLoading();
        var option = {
          title: {
            text: "QA主动发现缺陷",
          },
          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            type: "category",

            data: response.data.data.names,
            axisLabel: {
              interval: 0,
              rotate: 20,
            },
            axisTick: {
              alignWithLabel: true,
            },
          },
          yAxis: {
            type: "value",
            axisLabel: {
              show: true,
              interval: "auto",
            },
            show: true,
          },
          grid: {
            left: "35px",
            right: "35px",
            bottom: "20px",
          },
          series: [
            {
              name: "QA主动发现缺陷",
              data: response.data.data.nums,
              type: "bar",
              color: "#089CFF",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
          ],
        };
        rateChart.setOption(option);
      });
      rateChart.on("click", function (params) {
        if (params != null)
          window.open(
            "https://jira.bg.huohua.cn/secure/StructureBoard.jspa?p=200547398"
          );
      });
      window.onresize = function () {
        rateChart.resize();
      };
    },
    // qa主动发现率
    qaOnlineDefect() {
      echarts.dispose(document.getElementById("qaOnlineDefect_id"));
      var vm = this;
      var rateChart = echarts.init(
        document.getElementById("qaOnlineDefect_id")
      );
      if (this.qaOnlineDefect_value[0] == undefined) {
        (this.qaOnlineDefect_value[0] = ""),
          (this.qaOnlineDefect_value[1] = "");
      }
      rateChart.showLoading({
        text: "稍等，数据加载中......",
        color: "#0183FF",
        textColor: "#000",
        maskColor: "rgba(247, 248, 250, 0)",
        zlevel: 0,
        lineWidth: 2,
      });
      request({
        method: "POST",
        url:
          "/onlinedefect" +
          "?start_date=" +
          this.qaOnlineDefect_value[0] +
          "&end_date=" +
          this.qaOnlineDefect_value[1],
      }).then(function (response) {
        rateChart.hideLoading();
        var option = {
          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            type: "category",

            data: response.data.data.grade,
            axisLabel: {
              interval: 0,
              rotate: 20,
            },
            axisTick: {
              alignWithLabel: true,
            },
          },

          yAxis: [
            {
              type: "value",
              name: "数量",
              position: "left",
            },
            {
              type: "value",
              name: "百分比%",
              position: "right",
            },
          ],

          legend: {
            bottom: "0px",
            selected: {
              年级缺陷总数: false,
              QA主动发现率: false,
            },
            data: [
              "年级线上缺陷",
              "QA主动发现",
              "年级缺陷总数",
              "QA主动发现率",
            ],
          },
          grid: {
            top: "65px",
            left: "35px",
            right: "40px",
            bottom: "65px",
          },

          series: [
            {
              name: "年级线上缺陷",
              data: response.data.data.num,
              type: "line",
              yAxisIndex: 0,
              color: "#089CFF",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "QA主动发现",
              data: response.data.data.qanum,
              type: "line",
              yAxisIndex: 0,
              color: "#FFAC54",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "年级缺陷总数",
              data: response.data.data.total,
              type: "line",
              yAxisIndex: 0,
              color: "#f411ff",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "QA主动发现率",
              data: response.data.data.per,
              type: "line",
              yAxisIndex: 1,
              color: "#ff7f50",
              lineStyle: {
                width: 4,
              },
              label: { show: true, formatter: "{c}%" },
            },
          ],
        };
        rateChart.setOption(option);
      });
    },
    // 工作度量
    TestMokeIssue() {
      echarts.dispose(document.getElementById("TestMokeIssue_id"));
      var vm = this;
      var rateChart = echarts.init(document.getElementById("TestMokeIssue_id"));
      rateChart.showLoading({
        text: "稍等，数据加载中......",
        color: "#0183FF",
        textColor: "#000",
        maskColor: "rgba(247, 248, 250, 0)",
        zlevel: 0,
        lineWidth: 2,
      });
      request({
        method: "POST",
        url: "/TestMokeIssue" + "?type=" + this.TestMokeIssue_radio,
      }).then(function (response) {
        rateChart.hideLoading();
        var option = {
          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            type: "category",

            data: response.data.data.QA_name,
            axisLabel: {
              interval: 0,
              rotate: 20,
              clickable: true,
            },
            axisTick: {
              alignWithLabel: true,
            },
          },
          legend: {
            y: 25,
            width: "100%",
            selected: {},
            data: ["磨课阶段", "测试阶段", "任务"],
          },
          yAxis: {
            type: "value",
            axisLabel: {
              show: true,
              interval: "auto",
            },
            show: true,
          },
          grid: {
            left: "35px",
            right: "40px",
            bottom: "25px",
          },
          series: [
            {
              name: "测试阶段",
              data: response.data.data.test_jira_statis,
              type: "bar",
              color: "#089CFF",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "磨课阶段",
              data: response.data.data.moke_jira_statis,
              type: "bar",
              color: "#FFAC54",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "任务",
              data: response.data.data.task_statis,
              type: "bar",
              color: "blue",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
          ],
        };
        rateChart.setOption(option);
      });
    },
  },
};
</script>
<style lang="scss" scoped>
// 今日待办+工时统计
.view_todaytodo {
  width: 100%;
  display: flex;
  margin-top: 15px;

  .el-card {
    margin-left: 10px;
    margin-right: 10px;
    width: 100%;

    #todaytodo_id,
    #registertime_id {
      height: 300px;
    }
  }
}

// 代码统计+airtest执行统计
.view_gitCommintStatisticsByQuarter {
  width: 100%;
  display: flex;
  margin-top: 15px;
  .el-card {
    margin-left: 10px;
    margin-right: 10px;
    width: 100%;

    #gitCommintStatisticsByQuarter_id,
    #switch_executor_id {
      height: 300px;
    }
  }
}

// 各年级bug统计
.tatistics-bug {
  margin-top: 15px;
  margin-left: 20px;
  margin-right: 20px;

  .el-card {
    width: 100%;

    #statistics_id {
      height: 300px;
    }
  }
}

// 效能统计
.view_efficiencyStatistics {
  margin-top: 15px;
  margin-left: 20px;
  margin-right: 20px;

  .el-card {
    width: 100%;

    #efficiencyStatistics_id {
      height: 400px;
    }
  }
}

// buffer分析统计
.view_buffer_statis {
  margin-top: 15px;
  margin-left: 20px;
  margin-right: 20px;

  .el-card {
    width: 100%;

    #buffer_statis_id {
      height: 400px;
    }
  }
}

// 缺陷/磨课排行
.view_defect_moke_grind {
  margin-top: 15px;
  margin-left: 20px;
  margin-right: 20px;

  .el-card {
    width: 100%;

    #defectMokeGrind_id {
      height: 400px;
    }
  }
}

// qa主动发现缺陷
.qa_find_bug {
  width: 100%;
  height: 380px;
  display: flex;
  margin-top: 15px;

  .el-card {
    margin-left: 15px;
    margin-right: 15px;
    width: 100%;

    #qaActiveDiscovery_id,
    #qaOnlineDefect_id {
      height: 300px;
    }
  }
}

//  工作度量
.TestMokeIssue {
  margin-top: 15px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 15px;

  .el-card {
    width: 100%;

    #TestMokeIssue_id {
      height: 300px;
    }
  }
}
</style>