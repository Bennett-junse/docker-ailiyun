<template>
  <!-- 交付总览  -->
  <!-- 交付统计,模板交付统计,课次统计,子任务拆分统计,逃逸率,showcase通过率,课次题目数量统计,游戏平台交付统计,千行代码缺陷率,过程缺陷库存趋势,缺陷退回统计 -->
  <div>
    <!--交付统计-->
    <!-- <div class="view_getdata">
      <el-card>
        <el-date-picker
          v-model="getdata_value"
          type="daterange"
          size="small"
          value-format="yyyy-MM-dd"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          @change="getdata_statistics"
        >
        </el-date-picker>
        &emsp;
        <el-radio-group
          v-model="getdata_radio"
          size="small"
          @change="getdata_statistics"
          style="margin-left: 10px"
        >
          <el-radio-button label="month">月</el-radio-button>
          <el-radio-button label="week">周</el-radio-button>
        </el-radio-group>
        &emsp;
        <el-radio-group
          v-model="getdata_subject"
          size="small"
          @change="getdata_statistics"
          style="margin-left: 10px"
        >
          <el-radio-button label="数学">数学</el-radio-button>
          <el-radio-button label="语文">语文</el-radio-button>
          <el-radio-button label="英语">英语</el-radio-button>
          <el-radio-button label="自然科学">自然科学</el-radio-button>
        </el-radio-group>
        <el-select
          id="class"
          v-model="default_getdata_value"
          placeholder="选择年级"
          size="small"
          style="float: right; margin-left: 10px"
          @change="getdata"
        >
          <el-option
            v-for="item in getdata_aclass"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-col>
          <h2 style="text-align: left; margin-left: 5px; font-size: 18px">
            {{ "课件交付统计" }}
          </h2>
        </el-col>
        <div id="getdata_id"/>
      </el-card>
    </div> -->
    <!-- 游戏平台交付统计 -->
    <div class="view_game_platform_statis">
      <el-card>
        <el-radio-group size="small">
          <el-date-picker
            v-model="gamePlatformStatics_value"
            type="daterange"
            size="small"
            value-format="yyyy-MM-dd"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            @change="gamePlatformStatics"
          >
          </el-date-picker>
        </el-radio-group>
        <el-radio-group
          v-model="gamePlatformStatics_radio"
          size="small"
          @change="gamePlatformStatics"
          style="margin-left: 10px"
        >
          <el-radio-button label="month">月</el-radio-button>
          <el-radio-button label="week">周</el-radio-button>
        </el-radio-group>

        <el-button
          size="small"
          @click="GamePlatupdata()"
          style="margin-left: 10px"
          type="primary"
        >刷新
        </el-button
        >
        <el-col :span="18">
          <h2 style="text-align: left; margin-left: 5px; font-size: 18px">
            {{ "游戏平台交付统计" }}
          </h2>
        </el-col>
        <div id="gamePlatformStatics_id"/>
      </el-card>
    </div>
    <!-- 模板交付统计 -->
    <div class="view_tem_getdata">
      <el-card>
        <el-date-picker
          v-model="getdata_tem_value"
          type="daterange"
          size="small"
          value-format="yyyy-MM-dd"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          @change="getdata_tem_statistics"
        >
        </el-date-picker>
        &emsp;
        <el-radio-group
          v-model="getdata_tem_radio"
          size="small"
          @change="getdata_tem_statistics"
          style="margin-left: 10px"
        >
          <el-radio-button label="month">月</el-radio-button>
          <el-radio-button label="week">周</el-radio-button>
        </el-radio-group>
        &emsp;

        <el-col>
          <h2 style="text-align: left; margin-left: 5px; font-size: 18px">
            {{ "模板交付统计" }}
          </h2>
        </el-col>
        <div id="getdata_tem_id"/>
      </el-card>
    </div>
    <!-- 课次统计 -->
    <div class="view_statistics">
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

        <el-radio-group
          v-model="statistics_radio"
          size="small"
          @change="statistics"
          style="margin-left: 10px"
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
        <el-col>
          <h2 style="text-align: left; margin-left: 5px; font-size: 18px">
            {{ "课次统计" }}
          </h2>
        </el-col>
        <div id="statistics_id"/>
      </el-card>
    </div>
    <!-- 子任务拆分统计 -->
    <div class="SubtaskStatistics">
      <el-card>
        <el-col :span="18">
          <h2 style="text-align: left; margin-left: 5px; font-size: 20px">
            {{ "子任务拆分统计" }}
          </h2>
        </el-col>
        <div id="SubtaskStatistics_id"/>
      </el-card>
    </div>
    <!-- 缺陷逃逸率 -->
    <div class="view_escape">
      <el-card>
        <el-radio-group v-model="escape_radio" size="small" @change="escape">
          <el-radio-button label="month">月</el-radio-button>
          <el-radio-button label="week">周</el-radio-button>
        </el-radio-group>
        <h2 style="text-align: left; margin-left: 5px; font-size: 20px">
          {{ "缺陷逃逸率" }}
        </h2>
        <div id="escape_id"/>
      </el-card>
    </div>
    <!-- showcase通过率 -->
    <div class="view_showcase">
      <el-card>
        &emsp;
        <el-radio-group
          v-model="showcase_radio"
          size="small"
          @change="showcase"
        >
          <el-radio-button label="数学">数学</el-radio-button>
          <el-radio-button label="语文">语文</el-radio-button>
          <el-radio-button label="英语">英语</el-radio-button>
          <el-radio-button label="自然科学">自然科学</el-radio-button>
          <el-radio-button label="平台">平台</el-radio-button>
        </el-radio-group>
        <el-select
          id="class"
          v-model="default_value"
          placeholder="选择年级"
          size="small"
          style="float: right; margin-left: 10px"
          @change="GradeChange"
        >
          <el-option
            v-for="item in gradeChange_radio"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-col>
          <h2 style="text-align: left; margin-left: 5px; font-size: 18px">
            {{ "ShowCase通过率" }}
          </h2>
        </el-col>
        <div id="showcase_id"/>
      </el-card>
    </div>
    <!-- 课程题目数量统计 -->
    <div class="topic_statistics">
      <el-card>
        <el-date-picker
          v-model="topic_value_time"
          type="daterange"
          size="small"
          value-format="yyyy-MM-dd"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          @change="topic_Statistics"
        >
        </el-date-picker>
        &emsp;
        <el-radio-group
          v-model="topic_subject_radio"
          size="small"
          @change="topic_Statistics"
          style="margin-left: 10px"
        >
          <el-radio-button label="MA">数学</el-radio-button>
          <el-radio-button label="CH">语文</el-radio-button>
          <el-radio-button label="EN">英语</el-radio-button>
          <el-radio-button label="自然科学">自然科学</el-radio-button>
        </el-radio-group>
        <el-select
          id="class"
          v-model="topic_radio"
          placeholder="选择年级"
          size="small"
          style="float: right; margin-left: 10px"
          @change="topic_Gradetrend"
        >
          <el-option
            v-for="item in level"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>

        <h2 style="text-align: left; margin-left: 5px; font-size: 18px">
          {{ "课程题目数量统计" }}
        </h2>
        <div id="topic_id"/>
      </el-card>
    </div>
    <!-- 千行代码bug率 -->
    <!-- <div>
      <div class="view_getCodeBugsByWeekMonth">
        <el-card>
          <el-radio-group size="small" class="getCodeBugsByWeekMonth">
            <el-date-picker
              v-model="getCodeBugsByWeekMonth_value"
              type="daterange"
              size="small"
              value-format="yyyy-MM-dd"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              @change="getCodeBugsByWeekMonth"
            >
            </el-date-picker>
          </el-radio-group>
          <el-radio-group
            v-model="getCodeBugsByWeekMonth_radio"
            size="small"
            style="margin-left: 10px"
            @change="getCodeBugsByWeekMonth"
          >
            <el-radio-button label="week">周</el-radio-button>
            <el-radio-button label="month">月</el-radio-button>
          </el-radio-group>
          <el-radio-group
            v-model="getCodeBugsByWeekMonth_subject_radio"
            size="small"
            style="margin-left: 10px"
            @change="getCodeBugsByWeekMonth"
          >
            <el-radio-button label="768">平台</el-radio-button>
            <el-radio-button label="1708">课件</el-radio-button>
          </el-radio-group>
          <el-col :span="18">
            <h2 style="text-align: left; margin-left: 5px; font-size: 18px">
              {{ "千行代码Bug率" }}
            </h2>
          </el-col>
          <div id="getCodeBugsByWeekMonth_id"/>
        </el-card>
      </div>
    </div> -->
    <!-- 过程缺陷库存趋势 -->
    <!-- <div class="view_processbugStatistics">
      <el-card>
        <el-radio-group size="small" class="processbugStatistics">
          <el-date-picker
            v-model="processbug_value"
            type="daterange"
            size="small"
            value-format="yyyy-MM-dd"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            @change="processbugStatistics"
          >
          </el-date-picker>
        </el-radio-group>
        &emsp;
        <el-radio-group
          v-model="getCreatandSolve_subject_radio"
          size="small"
          style="margin-left: 10px"
          @change="processbugStatistics"
        >
          <el-radio-button label="数学">数学</el-radio-button>
          <el-radio-button label="语文">语文</el-radio-button>
          <el-radio-button label="英语">英语</el-radio-button>
          <el-radio-button label="自然科学">自然科学</el-radio-button>
        </el-radio-group>
        <el-select
          id="class"
          v-model="default_creatandsolve_label"
          placeholder="选择年级"
          size="small"
          style="float: right"
          @change="processbugStatistics1"
        >
          <el-option
            v-for="item in getCreatandSolve_class_radio"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            @change="processbugStatistics1"
          >
          </el-option>
        </el-select>
        <el-col :span="18">
          <h2 style="text-align: left; margin-left: 5px; font-size: 18px">
            {{ "过程缺陷库存趋势" }}
          </h2>
        </el-col>
        <div id="processbugStatistics_id"/>
      </el-card>
    </div> -->
    <!-- 退回缺陷统计 -->
    <div class="view_reopenIssue">
      <el-card>
        <el-radio-group size="small" class="reopenIssue">
          <el-date-picker
            v-model="reopenIssue_value"
            type="daterange"
            size="small"
            value-format="yyyy-MM-dd"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            @change="reopenIssue"
          >
          </el-date-picker>
        </el-radio-group>
        &emsp;
        <el-radio-group
          v-model="reopenIssue_radio"
          size="small"
          @change="reopenIssue"
          :disabled="rr"
        >
          <el-radio-button label="week">周</el-radio-button>
          <el-radio-button label="month">月</el-radio-button>
        </el-radio-group>
        <el-col :span="18">
          <h2 style="text-align: left; margin-left: 5px; font-size: 18px">
            {{ "缺陷退回或重新打开统计" }}
          </h2>
        </el-col>

        <div id="reopenIssue_id"/>
      </el-card>
    </div>
  </div>
</template>
<script>
import {request} from "@/utils/quality";
import {_PublicData, _DeliverChart} from "@/api/datadisplay";
import {
  _ShowcaseTable,
  _GPUpdate,
  _TemplateDelivery,
  _SubtaskCode,
} from "@/api/form_submission";
import {exhibitGroupData} from "@/api/dashboard";

const echarts = require("echarts");
export default {
  name: "delivery",
  data() {
    return {
      rr: false,
      registertime_value: [],
      gitCommintStatisticsByQuarter_value: [],
      gradeChange_radio: [],
      showcase_value: [],
      se_ige_project_radio: "游戏梦工厂",
      getdata_radio: "month",
      getdata_tem_radio: "month",
      statistics_radio: "数学",
      escape_radio: "month",
      showcase_radio: "数学",
      default_label: "",
      default_value: "",
      topic_value: "",
      getdata_subject: "数学",
      default_getdata_value: "",
      default_getdata_label: "",
      getdata_aclass: [],
      seGameDate_radio: "week",
      switch_executor_radio: "number_executions",
      level: "",
      getdata_value: [],
      getdata_tem_value: [],
      topic_value_time: [],
      statistics_value: [],
      gamePlatformStatics_value: [],
      gamePlatformStatics_radio: "week",
      topic_subject_radio: "MA",
      topic_radio: [],
      gradetrend_radio: [],
      processbug_value: [],
      getCreatandSolve_subject_radio: "数学",
      default_creatandsolve_label: "",
      default_creatandsolve_value: "",
      getCreatandSolve_class_radio: [],
      reopenIssue_value: [],
      reopenIssue_radio: "week",
      getCodeBugsByWeekMonth_value: false,
      getCodeBugsByWeekMonth_radio: "week",
      getCodeBugsByWeekMonth_class: "",
      getCodeBugsByWeekMonth_subject_radio: "1708",
      getCodeBugsByWeekMonth_value: [],
      getCode_value_moke: "",
      levelChina: [
        {
          value: "P1-GSYS",
          label: "P1-GSYS",
        },
        {
          value: "P2-GSYS",
          label: "P2-GSYS",
        },
        {
          value: "P3-GSYS",
          label: "P3-GSYS",
        },
        {
          value: "P4-GSYS",
          label: "P4-GSYS",
        },
        {
          value: "P5-GSYS",
          label: "P5-GSYS",
        },
        {
          value: "P6-GSYS",
          label: "P6-GSYS",
        },
        {
          value: "P1-GVSYS",
          label: "P1-GVSYS",
        },
        {
          value: "P2-GVSYS",
          label: "P2-GVSYS",
        },
        {
          value: "P3-GVSYS",
          label: "P3-GVSYS",
        },
        {
          value: "P4-GVSYS",
          label: "P4-GVSYS",
        },
        {
          value: "P5-GVSYS",
          label: "P5-GVSYS",
        },
        {
          value: "P6-GVSYS",
          label: "P6-GVSYS",
        },
        {
          value: "P3-GCMP",
          label: "P3-GCMP",
        },
        {
          value: "K2-GSYS",
          label: "K2-GSYS",
        },
        {
          value: "S4-GSYS",
          label: "S4-GSYS",
        },
        {
          value: "S2-GSYS",
          label: "S2-GSYS",
        },
        {
          value: "S9-LSYS",
          label: "S9-LSYS",
        },
      ],
      levelMath: [
        {
          value: "P1-GSYS",
          label: "P1-GSYS",
        },
        {
          value: "P2-GSYS",
          label: "P2-GSYS",
        },
        {
          value: "P3-GSYS",
          label: "P3-GSYS",
        },
        {
          value: "P4-GSYS",
          label: "P4-GSYS",
        },
        {
          value: "P5-GSYS",
          label: "P5-GSYS",
        },
        {
          value: "P6-GSYS",
          label: "P6-GSYS",
        },
        {
          value: "P1-GVSYS",
          label: "P1-GVSYS",
        },
        {
          value: "P2-GVSYS",
          label: "P2-GVSYS",
        },
        {
          value: "P3-GVSYS",
          label: "P3-GVSYS",
        },
        {
          value: "P4-GVSYS",
          label: "P4-GVSYS",
        },
        {
          value: "P5-GVSYS",
          label: "P5-GVSYS",
        },
        {
          value: "P6-GVSYS",
          label: "P6-GVSYS",
        },
        {
          value: "P3-GCMP",
          label: "P3-GCMP",
        },
        {
          value: "K2-GSYS",
          label: "K2-GSYS",
        },
        {
          value: "S4-GSYS",
          label: "S4-GSYS",
        },
        {
          value: "S2-GSYS",
          label: "S2-GSYS",
        },
        {
          value: "S9-LSYS",
          label: "S9-LSYS",
        },
      ],
      levelenglish: [
        {
          value: "P1-GSYS",
          label: "P1-GSYS",
        },
        {
          value: "P2-GSYS",
          label: "P2-GSYS",
        },
        {
          value: "P3-GSYS",
          label: "P3-GSYS",
        },
        {
          value: "P4-GSYS",
          label: "P4-GSYS",
        },
        {
          value: "P5-GSYS",
          label: "P5-GSYS",
        },
        {
          value: "P6-GSYS",
          label: "P6-GSYS",
        },
        {
          value: "P1-GVSYS",
          label: "P1-GVSYS",
        },
        {
          value: "P2-GVSYS",
          label: "P2-GVSYS",
        },
        {
          value: "P3-GVSYS",
          label: "P3-GVSYS",
        },
        {
          value: "P4-GVSYS",
          label: "P4-GVSYS",
        },
        {
          value: "P5-GVSYS",
          label: "P5-GVSYS",
        },
        {
          value: "P6-GVSYS",
          label: "P6-GVSYS",
        },
        {
          value: "P3-GCMP",
          label: "P3-GCMP",
        },
        {
          value: "K2-GSYS",
          label: "K2-GSYS",
        },
        {
          value: "S4-GSYS",
          label: "S4-GSYS",
        },
        {
          value: "S2-GSYS",
          label: "S2-GSYS",
        },
        {
          value: "S9-LSYS",
          label: "S9-LSYS",
        },
      ],
      levelNatural: [
        {
          value: "空",
          label: "空",
        },
      ],
      levelPlatform: [
        {
          value: "模板",
          label: "模板",
        },
        {
          value: "非模板",
          label: "非模板",
        },
      ],
    };
  },
  mounted() {
    // this.getdata_statistics();
    this.getdata_tem_statistics();
    this.statistics();
    this.escape();
    this.showcase();
    // this.getCodeBugsByWeekMonth();
    this.gamePlatformStatics();
    this.topic_Statistics();
    // this.processbugStatistics();
    this.reopenIssue();
    this.SubtaskStatistics();
  },
  methods: {
    GamePlatupdata() {
      _GPUpdate().then((res) => {
        this.$notify({
          title: "成功",
          message: res.msg,
          type: "success",
          duration: 2000,
        });
      });
    },
    //交付统计
    getdata_statistics() {
      var vm = this;
      request({
        method: "POST",
        url: "/provide_data" + "?Subject=" + this.getdata_subject,
      }).then((response) => {
        vm.getdata_aclass = response.data.data;
        vm.default_getdata_label = vm.getdata_aclass[0].label;
        vm.default_getdata_value = vm.getdata_aclass[0].value;
        vm.getdata();
      });
    },
    getdata(val) {
      if (val == undefined) {
        val = this.default_getdata_value;
      }
      echarts.dispose(document.getElementById("getdata_id"));
      var rateChart = echarts.init(document.getElementById("getdata_id"));
      rateChart.showLoading({
        text: "稍等，数据加载中......",
        color: "#0183FF",
        textColor: "#000",
        maskColor: "rgba(247, 248, 250, 0)",
        zlevel: 0,
        lineWidth: 2,
      });
      if (this.getdata_value[0] == undefined) {
        (this.getdata_value[0] = ""), (this.getdata_value[1] = "");
      }
      const chartParams = {
        type: this.getdata_radio,
        start: this.getdata_value[0],
        end: this.getdata_value[1],
        aclass: val,
        subject: this.getdata_subject,
      };
      // request({
      //   method: "POST",
      //   url:
      //     "/getdata" +
      //     "?type=" +
      //     this.getdata_radio +
      //     "&start_date=" +
      //     this.getdata_value[0] +
      //     "&end_date=" +
      //     this.getdata_value[1] +
      //     "&aclass=" +
      //     val +
      //     "&subject=" +
      //     this.getdata_subject,
      // })
      _DeliverChart(chartParams).then((response) => {
        rateChart.hideLoading();
        var option = {
          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            type: "category",
            data: response.data.datalist,
            axisLabel: {
              interval: 0,
              rotate: 20,
            },
            axisTick: {
              alignWithLabel: true,
            },
          },
          // toolbox: {
          //   feature: {
          //     dataView: {},
          //     restore: {},
          //   },
          // },
          yAxis: {type: "value"},
          legend: {
            data: ["磨课", "缺陷", "故事"],
          },
          series: [
            {
              name: "磨课",
              data: response.data.mokelist,
              type: "line",
              color: "#089CFF",
              lineStyle: {
                width: 4,
              },
              label: {show: true},
            },
            {
              name: "缺陷",
              data: response.data.buglist,
              type: "line",
              color: "#FFAC54",
              lineStyle: {
                width: 4,
              },
              label: {show: true},
            },
            {
              name: "故事",
              data: response.data.storylist,
              type: "line",
              color: "#ff7f50",
              lineStyle: {
                width: 4,
              },
              label: {show: true},
            },
          ],
          grid: {
            left: "35px",
            right: "35px",
            bottom: "35px",
          },
        };
        rateChart.setOption(option);
      }),
        (window.onresize = function () {
          rateChart.resize();
        });
    },
    // 模板交付统计
    getdata_tem_statistics() {
      var vm = this;
      echarts.dispose(document.getElementById("getdata_tem_id"));
      var rateChart = echarts.init(document.getElementById("getdata_tem_id"));
      rateChart.showLoading({
        text: "稍等，数据加载中......",
        color: "#0183FF",
        textColor: "#000",
        maskColor: "rgba(247, 248, 250, 0)",
        zlevel: 0,
        lineWidth: 2,
      });
      if (this.getdata_tem_value[0] == undefined) {
        (this.getdata_tem_value[0] = ""), (this.getdata_tem_value[1] = "");
      }
      // request({
      //   method: "POST",
      //   url:
      //     "/templateDelivery" +
      //     "?type=" +
      //     this.getdata_tem_radio +
      //     "&date_start=" +
      //     this.getdata_tem_value[0] +
      //     "&date_end=" +
      //     this.getdata_tem_value[1],
      // })
      const data = {
        type: this.getdata_tem_radio,
        start: this.getdata_tem_value[0],
        end: this.getdata_tem_value[1],
      };
      _TemplateDelivery(data).then((res) => {
        rateChart.hideLoading();
        var option = {
          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            type: "category",
            data: res.data.time,
            axisLabel: {
              interval: 0,
              rotate: 20,
            },
            axisTick: {
              alignWithLabel: true,
            },
          },
          yAxis: {type: "value"},
          legend: {
            data: ["K2", "P1", "P2", "P3", "P4", "P5", "对弈", "通用", "总计"],
            selected: {
              K2: true,
              P1: true,
              P2: true,
              P3: true,
              P4: true,
              P5: true,
              对弈: true,
              通用: true,
              总计: false,
            },
          },
          series: [
            {
              name: "K2",
              data: res.data.K2,
              type: "line",
              color: "#FF6347",
              lineStyle: {
                width: 4,
              },
              label: {show: true},
            },
            {
              name: "P1",
              data: res.data.P1,
              type: "line",
              color: "#FFDAB9",
              lineStyle: {
                width: 4,
              },
              label: {show: true},
            },
            {
              name: "P2",
              data: res.data.P2,
              type: "line",
              color: "#808000",
              lineStyle: {
                width: 4,
              },
              label: {show: true},
            },
            {
              name: "P3",
              data: res.data.P3,
              type: "line",
              color: "#FF69B4",
              lineStyle: {
                width: 4,
              },
              label: {show: true},
            },
            {
              name: "P4",
              data: res.data.P4,
              type: "line",
              color: "#FFAC54",
              lineStyle: {
                width: 4,
              },
              label: {show: true},
            },
            {
              name: "P5",
              data: res.data.P5,
              type: "line",
              color: "#ff7f50",
              lineStyle: {
                width: 4,
              },
              label: {show: true},
            },
            {
              name: "对弈",
              data: res.data.duiyi,
              type: "line",
              color: "#00CED1",
              lineStyle: {
                width: 4,
              },
              label: {show: true},
            },
            {
              name: "通用",
              data: res.data.tongyong,
              type: "line",
              color: "#9AC411",
              lineStyle: {
                width: 4,
              },
              label: {show: true},
            },
            {
              name: "总计",
              data: res.data.zongshu,
              type: "line",
              color: "#089CFF",
              lineStyle: {
                width: 4,
              },
              label: {show: true},
            },
          ],
          grid: {
            left: "35px",
            right: "35px",
            bottom: "35px",
          },
        };
        rateChart.setOption(option);
      }),
        (window.onresize = function () {
          rateChart.resize();
        });
    },
    // 课次统计
    statistics() {
      var vm = this;
      request({
        method: "POST",
        url: "/provide_data" + "?Subject=" + this.statistics_radio,
      }).then(function (response) {
        vm.gradetrend_radio = response.data.data;
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
      request({
        method: "POST",
        url:
          "/statistics" +
          "?aclass=" +
          val +
          "&subject=" +
          this.statistics_radio +
          "&start_date=" +
          this.statistics_value[0] +
          "&end_date=" +
          this.statistics_value[1],
      }).then((response) => {
        var option = {
          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            type: "category",
            data: response.data.data.class_name,
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
          legend: {
            data: ["缺陷", "磨课"],
          },
          // toolbox: {
          //   feature: {
          //     dataView: {},
          //     restore: {},
          //   },
          // },
          series: [
            {
              name: "缺陷",
              data: response.data.data.defect,
              type: "line",
              color: "#089CFF",
              lineStyle: {
                width: 4,
              },
              label: {show: true},
              markLine: {
                silent: true,
                lineStyle: {
                  color: "#333",
                },
                data: [
                  {
                    yAxis: 15,
                  },
                ],
              },
            },

            {
              name: "磨课",
              data: response.data.data.optimize,
              type: "line",
              color: "#08922F",
              lineStyle: {
                width: 4,
              },
              label: {show: true},
              markLine: {
                silent: true,
                lineStyle: {
                  color: "#333",
                },
                data: [
                  {
                    yAxis: 15,
                  },
                ],
              },
            },
          ],
          grid: {
            left: "90px",
            right: "20px",
            // bottom: "35px",
          },
        };
        rateChart.setOption(option);
      });
    },

    // 子任务拆分统计
    SubtaskStatistics() {
      echarts.dispose(document.getElementById("SubtaskStatistics_id"));
      var vm = this;
      var rateChart = echarts.init(
        document.getElementById("SubtaskStatistics_id")
      );
      rateChart.showLoading({
        text: "稍等，数据加载中......",
        color: "#0183FF",
        textColor: "#000",
        maskColor: "rgba(247, 248, 250, 0)",
        zlevel: 0,
        lineWidth: 2,
      });
      // request({
      //   method: "POST",
      //   url: "/subtask_codeSubmit",
      // })
      _SubtaskCode().then((res) => {
        rateChart.hideLoading();
        var option = {
          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            type: "category",
            data: res.data.PersonName,
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
            y: 20,
            width: "100%",
            selected: {},
            data: ["已排期工作日", "代码提交天数"],
          },
          yAxis: {
            type: "value",
            min: 0,
            max: 7,
            axisLabel: {
              show: true,
              interval: "auto",
            },
            show: true,
          },
          grid: {
            top: "65px",
            left: "40px",
            right: "40px",
            bottom: "65px",
          },
          series: [
            {
              name: "已排期工作日",
              data: res.data.Subtask,
              type: "bar",
              color: "#089CFF",
              lineStyle: {
                width: 4,
              },
              label: {show: true},
              markLine: {
                silent: true,
                lineStyle: {
                  color: "#333",
                },
                data: [
                  {
                    yAxis: 5,
                  },
                ],
              },
            },
            {
              name: "代码提交天数",
              data: res.data.CodeSubmit,
              type: "bar",
              color: "#08922F",
              lineStyle: {
                width: 4,
              },
              label: {show: true},
              markLine: {
                silent: true,
                lineStyle: {
                  color: "#333",
                },
                data: [
                  {
                    yAxis: 2,
                  },
                ],
              },
            },
          ],
        };
        rateChart.setOption(option);
      });
    },

    // 缺陷逃逸率
    escape() {
      echarts.dispose(document.getElementById("escape_id"));
      var vm = this;
      var rateChart = echarts.init(document.getElementById("escape_id"));
      request({
        method: "POST",
        url: "/escape" + "?type=" + this.escape_radio,
      }).then(function (response) {
        var option = {
          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            type: "category",

            data: response.data.data.bug,
            axisLabel: {
              interval: 0,
              rotate: 20,
              clickable: true,
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
              name: "bug逃逸率",
              data: response.data.data.date,
              type: "line",
              color: "#089CFF",
              lineStyle: {
                width: 4,
              },

              label: {show: true, formatter: "{c}%"},

              markLine: {
                silent: true,
                lineStyle: {
                  color: "#333",
                },
                data: [
                  {
                    yAxis: 1,
                  },
                ],
              },
            },
          ],
          grid: {
            top: "10px",
            left: "60px",
            right: "10px",
            bottom: "50px",
          },
        };
        rateChart.setOption(option);
        rateChart.on("click", function (params) {
          if (param.type == "click") {
            alert(param.name);
          }
        });
      });
    },
    // showcase通过率
    showcase() {
      request({
        method: "POST",
        url: "/provide_data" + "?Subject=" + this.showcase_radio,
      }).then((response) => {
        this.gradeChange_radio = response.data.data;
        [this.default_label, this.default_value] = [
          this.gradeChange_radio[0].label,
          this.gradeChange_radio[0].value,
        ];
        this.GradeChange();
      });
    },
    GradeChange(val) {
      echarts.dispose(document.getElementById("showcase_id"));
      const rateChart = echarts.init(document.getElementById("showcase_id"));
      rateChart.showLoading({
        text: "稍等，数据加载中......",
        color: "#0183FF",
        textColor: "#000",
        maskColor: "rgba(247, 248, 250, 0)",
        zlevel: 0,
        lineWidth: 2,
      });
      if (!this.showcase_value[0]) {
        [this.showcase_value[0], this.showcase_value[1]] = ["", ""];
      }
      if (!val) {
        val = this.default_value;
      }
      _ShowcaseTable(this.showcase_radio, val).then((response) => {
        rateChart.hideLoading();
        var option = {
          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            type: "category",
            data: response.data.all_course_id,

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
            scale: true,
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
              data: response.data.all_pass_rate,
              type: "line",
              color: "#089CFF",
              lineStyle: {
                width: 4,
              },

              label: {show: true, formatter: "{c}%"},

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
          grid: {
            left: "50px",
            right: "35px",
            bottom: "110px",
          },
          dataZoom: [
            {
              type: "slider",
              show: true,
              start: 70,
              end: 100,
              xAxisIndex: [0],
            },
          ],
        };
        rateChart.setOption(option);
      });
    },

    // 课程题目数统计
    topic_Statistics() {
      if (this.topic_subject_radio == "MA") {
        (this.topic_radio = "P1-GSYS"), (this.level = this.levelChina);
        this.topic_Gradetrend();
      } else if (this.topic_subject_radio == "CH") {
        (this.topic_radio = "P1-GVSYS"), (this.level = this.levelMath);
        this.topic_Gradetrend();
      } else if (this.topic_subject_radio == "EN") {
        (this.topic_radio = "P3-GCMP"), (this.level = this.levelNatural);
        this.topic_Gradetrend();
      } else if (this.topic_subject_radio == "SC") {
        (this.topic_radio = ""), (this.level = this.levelNatural);
        this.topic_Gradetrend();
      }
    },
    topic_Gradetrend(val) {
      if (val == undefined) {
        val = this.default_value;
      }

      echarts.dispose(document.getElementById("topic_id"));
      var rateChart = echarts.init(document.getElementById("topic_id"));

      if (this.topic_value_time[0] == undefined) {
        (this.topic_value_time[0] = ""), (this.topic_value_time[1] = "");
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
          "/questions_statistics" +
          "?grade=" +
          this.topic_radio +
          "&subject=" +
          this.topic_subject_radio +
          "&start_date=" +
          this.topic_value_time[0] +
          "&end_date=" +
          this.topic_value_time[1],
      }).then((response) => {
        rateChart.hideLoading();
        var option = {
          tooltip: {
            trigger: "axis",
            magicType: {show: true, type: ["line", "bar"]},
          },
          xAxis: {
            type: "category",
            data: response.data.data.courseware,
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

          series: [
            {
              name: "数量",
              data: response.data.data.question_num,
              type: "bar",
              color: "#9AC411",
              lineStyle: {
                width: 4,
              },
              label: {show: true},
            },
          ],
          grid: {
            left: "50px",
            right: "35px",
            bottom: "80px",
          },
          dataZoom: [
            {
              type: "slider",
              show: true,
              start: 70,
              end: 100,
              xAxisIndex: [0],
              bottom: 6, //距离底部的距离
            },
          ],
        };
        rateChart.setOption(option);
      });
    },

    //千行代码缺陷率
    getCodeBugsByWeekMonth(val) {
      if (val == undefined) {
        val = this.getCode_value_moke;
      }
      echarts.dispose(document.getElementById("getCodeBugsByWeekMonth_id"));
      var vm = this;
      var rateChart = echarts.init(
        document.getElementById("getCodeBugsByWeekMonth_id")
      );
      if (this.getCodeBugsByWeekMonth_value[0] == undefined) {
        (this.getCodeBugsByWeekMonth_value[0] = ""),
          (this.getCodeBugsByWeekMonth_value[1] = "");
      }
      var conferenceStatistics_startdata = parseInt(
        this.getCodeBugsByWeekMonth_value[0].replaceAll("-", "")
      );
      var conferenceStatistics_enddata = parseInt(
        this.getCodeBugsByWeekMonth_value[1].replaceAll("-", "")
      );
      this.ggetCodeBugsByWeekMonth =
        conferenceStatistics_enddata - conferenceStatistics_startdata > 180
          ? true
          : false;
      echarts.dispose(document.getElementById("getCodeBugsByWeekMonth_id"));
      var rateChart = echarts.init(
        document.getElementById("getCodeBugsByWeekMonth_id")
      );
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
          "/getCodeBugsByWeekMonth" +
          "?start_date=" +
          this.getCodeBugsByWeekMonth_value[0] +
          "&end_date=" +
          this.getCodeBugsByWeekMonth_value[1] +
          "&type=" +
          this.getCodeBugsByWeekMonth_radio +
          "&group_id=" +
          this.getCodeBugsByWeekMonth_subject_radio,
      }).then(function (response) {
        rateChart.hideLoading();
        var option = {
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
          yAxis: {
            axisLabel: {
              show: true,
              interval: "auto",
              formatter: "{value} %",
            },
          },
          grid: {
            left: "90px",
            right: "20px",
          },
          series: [
            {
              name: "bug率",
              data: response.data.data.counts,
              type: "line",
              color: "#089CFF",
              lineStyle: {
                width: 4,
              },

              label: {show: true, formatter: "{c}%"},
            },
          ],
        };
        rateChart.setOption(option);
      });
    },
    //游戏平台交付统计
    gamePlatformStatics() {
      echarts.dispose(document.getElementById("gamePlatformStatics_id"));
      var vm = this;
      var rateChart = echarts.init(
        document.getElementById("gamePlatformStatics_id")
      );
      if (this.gamePlatformStatics_value[0] == undefined) {
        (this.gamePlatformStatics_value[0] = ""),
          (this.gamePlatformStatics_value[1] = "");
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
          "/GamePlatform" +
          "?date_type=" +
          this.gamePlatformStatics_radio +
          "&start_date=" +
          this.gamePlatformStatics_value[0] +
          "&end_date=" +
          this.gamePlatformStatics_value[1],
      }).then(function (response) {
        //this.dataFlow=res.data.data
        rateChart.hideLoading();
        var option = {
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
          yAxis: {type: "value"},
          legend: {
            data: ["故事", "技术任务", "任务", "缺陷"],
          },
          grid: {
            top: "65px",
            left: "35px",
            right: "40px",
            bottom: "65px",
          },
          series: [
            {
              name: "故事",
              data: response.data.data.count_story,
              type: "line",
              color: "#089CFF",
              lineStyle: {
                width: 4,
              },
              label: {show: true},
            },
            {
              name: "技术任务",
              data: response.data.data.count_tech_task,
              type: "line",
              color: "#ff7f90",
              lineStyle: {
                width: 4,
              },
              label: {show: true},
            },
            {
              name: "任务",
              data: response.data.data.count_task,
              type: "line",
              color: "#93EB61",
              lineStyle: {
                width: 4,
              },
              label: {show: true},
            },

            {
              name: "缺陷",
              data: response.data.data.count_defect,
              type: "line",
              color: "#DE53BC",
              lineStyle: {
                width: 4,
              },
              label: {show: true},
            },
          ],
          //   dataZoom : [
          //   {
          //     type: 'slider',
          //     show: true,
          //     start: 0,
          //     end: 30,
          //     xAxisIndex: [0],
          //     // bottom:-10//距离底部的距离
          //   },
          // ],
        };
        rateChart.setOption(option);
      }),
        (window.onresize = function () {
          rateChart.resize();
        });
    },
    //过程缺陷库存趋势
    processbugStatistics() {
      var vm = this;
      request({
        method: "POST",
        url:
          "/provide_data" + "?Subject=" + this.getCreatandSolve_subject_radio,
      }).then(function (response) {
        vm.getCreatandSolve_class_radio = response.data.data;
        vm.default_creatandsolve_label =
          vm.getCreatandSolve_class_radio[0].label;
        vm.default_creatandsolve_value =
          vm.getCreatandSolve_class_radio[0].value;
        vm.processbugStatistics1();
      });
    },
    processbugStatistics1(val) {
      if (val == undefined) {
        val = this.default_creatandsolve_value;
      }
      echarts.dispose(document.getElementById("processbugStatistics_id"));
      var vm = this;
      var rateChart = echarts.init(
        document.getElementById("processbugStatistics_id")
      );
      rateChart.showLoading({
        text: "稍等，数据加载中......",
        color: "#0183FF",
        textColor: "#000",
        maskColor: "rgba(247, 248, 250, 0)",
        zlevel: 0,
        lineWidth: 2,
      });
      if (this.processbug_value[0] == undefined) {
        (this.processbug_value[0] = ""), (this.processbug_value[1] = "");
      }
      // request({
      //   method: "POST",
      //   url:
      //     "/CreateAndSolve" +
      //     "?start_time=" +
      //     this.processbug_value[0] +
      //     "&end_time=" +
      //     this.processbug_value[1] +
      //     "&subject=" +
      //     this.getCreatandSolve_subject_radio +
      //     "&aclass=" +
      //     val,
      // })
      _Crea().then(function (response) {
        rateChart.hideLoading();
        var option = {
          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            type: "category",
            //type: "value",
            data: response.data.data.date1,
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
          series: [
            {
              name: "解决缺陷统计",
              data: response.data.data.num2,
              type: "line",
              color: "#089CFF",
              lineStyle: {
                width: 4,
              },
              label: {show: true},
            },
            {
              name: "创建缺陷统计",
              data: response.data.data.num1,
              type: "line",
              color: "#FFAC54",
              lineStyle: {
                width: 4,
              },
              label: {show: true},
            },
          ],
          grid: {
            left: "50px",
            right: "35px",
            bottom: "50px",
          },
        };
        rateChart.setOption(option);
      });
    },
    // 退回缺陷统计
    reopenIssue() {
      echarts.dispose(document.getElementById("reopenIssue_id"));
      var vm = this;
      var rateChart = echarts.init(document.getElementById("reopenIssue_id"));
      if (this.reopenIssue_value[0] == undefined) {
        (this.reopenIssue_value[0] = ""), (this.reopenIssue_value[1] = "");
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
          "reopenIssue" +
          "?date_start=" +
          this.reopenIssue_value[0] +
          "&date_end=" +
          this.reopenIssue_value[1] +
          "&type=" +
          this.reopenIssue_radio,
      }).then(function (response) {
        rateChart.hideLoading();
        var option = {
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
          yAxis: {
            type: "value",
            axisLabel: {
              show: true,
              interval: "auto",
            },
            show: true,
          },
          legend: {
            y: 25,
            left: "center",
            width: "100%",
            data: ["重新打开缺陷数目", "退回缺陷数目", "缺陷总数"],
          },
          grid: {
            top: "65px",
            left: "35px",
            right: "40px",
            bottom: "65px",
          },
          series: [
            {
              name: "重新打开缺陷数目",
              data: response.data.data.count_chongxindakai_list,
              type: "line",
              color: "#C66DF2",
              lineStyle: {
                width: 4,
              },
              label: {show: true},
            },
            {
              name: "退回缺陷数目",
              data: response.data.data.count_return_dev_list,
              type: "line",
              color: "#089CFF",
              lineStyle: {
                width: 4,
              },
              label: {show: true},
            },
            {
              name: "缺陷总数",
              data: response.data.data.count_all_list,
              type: "line",
              color: "#FFAC54",
              lineStyle: {
                width: 4,
              },
              label: {show: true},
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
// 交付统计
.view_getdata {
  margin-top: 15px;
  margin-left: 20px;
  margin-right: 20px;
  text-align: left;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  border-radius: 4px;

  .el-card {
    #getdata_id,
    #statistics_id {
      margin-top: 10px;
      height: 300px;
    }
  }
}

// 模板交付统计
.view_tem_getdata {
  margin-top: 15px;
  margin-left: 20px;
  margin-right: 20px;
  text-align: left;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  border-radius: 4px;

  .el-card {
    #getdata_tem_id,
    #statistics_id {
      margin-top: 10px;
      height: 300px;
    }
  }
}

//课次统计
.view_statistics {
  margin-top: 15px;
  margin-left: 20px;
  margin-right: 20px;
  text-align: left;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  border-radius: 4px;

  .el-card {
    #statistics_id {
      margin-top: 10px;
      height: 300px;
    }
  }
}

// 子任务拆分统计
.SubtaskStatistics {
  margin-top: 15px;
  margin-left: 20px;
  margin-right: 20px;

  .el-card {
    #SubtaskStatistics_id {
      margin-top: 10px;
      height: 300px;
    }
  }
}

// 缺陷逃逸率
.view_escape {
  margin-top: 15px;
  margin-left: 20px;
  margin-right: 20px;

  .el-card {
    #escape_id {
      margin-top: 10px;
      height: 300px;
    }
  }
}

// showcase通过率
.view_showcase {
  margin-top: 15px;
  margin-left: 20px;
  margin-right: 20px;

  .el-card {
    #showcase_id {
      margin-top: 10px;
      height: 300px;
    }
  }
}

// 课程题目数统计
.topic_statistics {
  margin-top: 15px;
  margin-left: 20px;
  margin-right: 20px;

  .el-card {
    #topic_id {
      margin-top: 10px;
      height: 300px;
    }
  }
}

//千行代码bug率
.view_getCodeBugsByWeekMonth {
  margin-top: 15px;
  margin-left: 20px;
  margin-right: 20px;

  .el-card {
    #getCodeBugsByWeekMonth_id {
      margin-top: 10px;
      height: 300px;
    }
  }
}

// 过程缺陷库存趋势
.view_processbugStatistics {
  margin-top: 15px;
  margin-left: 20px;
  margin-right: 20px;

  .el-card {
    #processbugStatistics_id {
      margin-top: 10px;
      height: 300px;
    }
  }
}

//游戏平台交付统计
.view_game_platform_statis {
  margin-top: 15px;
  margin-left: 20px;
  margin-right: 20px;

  .el-card {
    #gamePlatformStatics_id {
      margin-top: 10px;
      height: 300px;
    }
  }
}

//退回缺陷统计
.view_reopenIssue {
  margin-top: 15px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 15px;

  .el-card {
    #reopenIssue_id {
      margin-top: 10px;
      height: 300px;
    }
  }
}
</style>
