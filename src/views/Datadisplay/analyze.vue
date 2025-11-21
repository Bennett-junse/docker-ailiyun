<template>
  <!-- 分析大盘 -->
  <!-- 缺陷分析,磨课分析,磨课类型分类,二次磨课类型分类,会议统计4张图,重新上线统计,重新上线分析,重新上线趋势 -->
  <div>
    <!-- 缺陷分类 -->
    <div class="view_getbugClsaaify">
      <el-card>
        <el-radio-group size="small" class="getbugClsaaify">
          <el-date-picker
            v-model="getbugClsaaify_value"
            type="daterange"
            size="small"
            value-format="yyyy-MM-dd"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            @change="getbugClsaaify"
          >
          </el-date-picker>
        </el-radio-group>
        <el-radio-group
          v-model="getbugClsaaify_radio"
          size="small"
          @change="getbugClsaaify"
          :disabled="getbugClsaaifya"
          style="margin-left: 10px"
        >
          <el-radio-button label="week">周</el-radio-button>
          <el-radio-button label="month">月</el-radio-button>
        </el-radio-group>

        <el-radio-group
          v-model="getbugClsaaify_subject_radio"
          size="small"
          @change="getbugClsaaify"
          style="margin-left: 10px"
        >
          <el-radio-button label="数学">数学</el-radio-button>
          <el-radio-button label="语文">语文</el-radio-button>
          <el-radio-button label="英语">英语</el-radio-button>
          <el-radio-button label="自然科学">自然科学</el-radio-button>
        </el-radio-group>
        <el-select
          id="class"
          v-model="default_label"
          placeholder="选择年级"
          size="small"
          style="float: right; margin-left: 10px"
          @change="getbugClsaaify1"
        >
          <el-option
            v-for="item in getbugClsaaify_class_radio"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            @change="getbugClsaaify1"
          >
          </el-option>
        </el-select>
        <el-col>
          <h2 style="text-align: left; margin-left: 5px; font-size: 18px">
            {{ "缺陷分类" }}
          </h2>
        </el-col>
        <div id="getbugClsaaify_id" />
      </el-card>
    </div>
    <!-- 磨课分类 -->
    <div class="view_getmokeClsaaify">
      <el-card>
        <el-radio-group size="small" class="getmokeClsaaify">
          <el-date-picker
            v-model="getmokeClsaaify_value"
            type="daterange"
            size="small"
            value-format="yyyy-MM-dd"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            @change="getmokeClsaaify"
          >
          </el-date-picker>
        </el-radio-group>
        <el-radio-group
          v-model="getmokeClsaaify_radio"
          size="small"
          @change="getmokeClsaaify"
          :disabled="getmokeClsaaifya"
          style="margin-left: 10px"
        >
          <el-radio-button label="week">周</el-radio-button>
          <el-radio-button label="month">月</el-radio-button>
        </el-radio-group>
        &emsp;
        <el-radio-group
          v-model="getmokeClsaaify_subject_radio"
          size="small"
          @change="getmokeClsaaify"
          style="margin-left: 10px"
        >
          <el-radio-button label="数学">数学</el-radio-button>
          <el-radio-button label="语文">语文</el-radio-button>
          <el-radio-button label="英语">英语</el-radio-button>
          <el-radio-button label="自然科学">自然科学</el-radio-button>
        </el-radio-group>
        <el-select
          id="class"
          v-model="default_label_moke"
          placeholder="选择年级"
          size="small"
          style="float: right"
          @change="getmokeClsaaify1"
        >
          <el-option
            v-for="item in getmokeClsaaify_class_radio"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            @change="getmokeClsaaify1"
          >
          </el-option>
        </el-select>
        <el-col>
          <h2 style="text-align: left; margin-left: 5px; font-size: 18px">
            {{ "磨课分类" }}
          </h2>
        </el-col>
        <div id="getmokeClsaaify_id" />
      </el-card>
    </div>
    <!-- 磨课类型信息 -->
    <div class="view_GrindingIssueType">
      <el-card>
        <el-radio-group size="small" class="GrindingIssueType">
          <el-date-picker
            v-model="GrindingIssueType1_value"
            type="daterange"
            size="small"
            value-format="yyyy-MM-dd"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            @change="GrindingIssueType1"
          >
          </el-date-picker>
        </el-radio-group>
        &emsp;
        <el-radio-group
          v-model="GrindingIssueType_radio"
          size="small"
          @change="GrindingIssueType"
          :disabled="GrindingIssue"
          style="margin-left: 10px"
        >
          <el-radio-button label="week">周</el-radio-button>
          <el-radio-button label="month">月</el-radio-button>
        </el-radio-group>
        &emsp;
        <el-radio-group
          v-model="GrindingIssueType_subject_radio"
          size="small"
          @change="GrindingIssueType"
          style="margin-left: 10px"
        >
          <el-radio-button label="数学">数学</el-radio-button>
          <el-radio-button label="语文">语文</el-radio-button>
          <el-radio-button label="英语">英语</el-radio-button>
          <el-radio-button label="自然科学">自然科学</el-radio-button>
        </el-radio-group>
        <el-select
          id="class"
          v-model="default_value_GrindingIssueType"
          placeholder="选择年级"
          size="small"
          style="float: right"
          @change="GrindingIssueType1"
        >
          <el-option
            v-for="item in GrindingIssueType_class_radio"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            @change="GrindingIssueType1"
          >
          </el-option>
        </el-select>
        <el-col>
          <h2 style="text-align: left; margin-left: 5px; font-size: 18px">
            {{ "磨课类型信息" }}
          </h2>
        </el-col>
        <div id="GrindingIssueType_id" />
      </el-card>
    </div>
    <!-- 二次磨课分类 -->
    <div class="view_GrindingClass">
      <el-card>
        <el-radio-group size="small" class="GrindingClass">
          <el-date-picker
            v-model="GrindingClass2_value"
            type="daterange"
            size="small"
            value-format="yyyy-MM-dd"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            @change="GrindingClass2"
          >
          </el-date-picker>
        </el-radio-group>
        &emsp;
        <el-radio-group
          v-model="GrindingClass_radio"
          size="small"
          @change="GrindingClass"
          :disabled="GrindingIssue"
          style="margin-left: 10px"
        >
          <el-radio-button label="week">周</el-radio-button>
          <el-radio-button label="month">月</el-radio-button>
        </el-radio-group>
        &emsp;
        <el-radio-group
          v-model="GrindingClass_subject_radio"
          size="small"
          @change="GrindingClass"
          style="margin-left: 10px"
        >
          <el-radio-button label="数学">数学</el-radio-button>
          <el-radio-button label="语文">语文</el-radio-button>
          <el-radio-button label="英语">英语</el-radio-button>
          <el-radio-button label="自然科学">自然科学</el-radio-button>
        </el-radio-group>
        <el-select
          id="class"
          v-model="default_value_GrindingClass"
          placeholder="选择年级"
          size="small"
          style="float: right"
          @change="GrindingClass2"
        >
          <el-option
            v-for="item in GrindingClass_class_radio"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            @change="GrindingClass2"
          >
          </el-option>
        </el-select>
        <el-col>
          <h2 style="text-align: left; margin-left: 5px; font-size: 18px">
            {{ "二次磨课分类" }}
          </h2>
        </el-col>
        <div id="GrindingClass_id" />
      </el-card>
    </div>
    <!-- 会议平均时长统计（折线图） -->
    <div class="view_conferenceStatistics">
      <el-card>
        <el-radio-group>
          <el-date-picker
            v-model="conferenceStatistics_value"
            type="daterange"
            size="small"
            style="float: right; width: 300px"
            value-format="yyyy-MM-dd"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            @change="conferenceStatistics"
          >
          </el-date-picker>
        </el-radio-group>

        <el-radio-group
          v-model="conferenceStatistics_radio"
          size="small"
          @change="conferenceStatistics"
          :disabled="cc"
          style="margin-left: 10px"
        >
          <el-radio-button label="week">周</el-radio-button>
          <el-radio-button label="month">月</el-radio-button>
        </el-radio-group>

        <el-select
          id="class"
          v-model="conferenceStatistics_grade_radio"
          placeholder="选择年级"
          size="small"
          style="float: right; width: 105px"
          @change="conferenceStatistics"
        >
          <el-option
            v-for="item in gradeOptions"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
        <h2 style="text-align: left; margin-left: 5px; font-size: 18px">
          {{ "会议物理时长" }}
        </h2>
        <div id="conferenceStatisticsavg_id" />
        <h2 style="text-align: left; margin-left: 5px; font-size: 18px">
          {{ "会议总时长" }}
        </h2>
        <div id="conferenceStatisticstotol_id" />
      </el-card>
      <el-card>
        <el-radio-group>
          <el-date-picker
            v-model="conferenceStatistics1_value"
            type="daterange"
            style="float: right; width: 300px"
            size="small"
            value-format="yyyy-MM-dd"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            @change="conferenceStatistics1"
          >
          </el-date-picker>
        </el-radio-group>

        <el-radio-group
          v-model="conferenceStatistics1_radio"
          size="small"
          @change="conferenceStatistics1"
          :disabled="dd"
          style="margin-left: 10px"
        >
          <el-radio-button label="week">周</el-radio-button>
          <el-radio-button label="month">月</el-radio-button>
        </el-radio-group>

        <el-select
          id="class"
          v-model="conferenceStatistics1_grade_radio"
          placeholder="选择年级"
          size="small"
          style="float: right; width: 105px"
          @change="conferenceStatistics1"
        >
          <el-option
            v-for="item in gradeOptions"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
        <h2 style="text-align: left; margin-left: 5px; font-size: 18px">
          {{ "会议物理时长" }}
        </h2>
        <div id="conferenceStatisticsavg_id1" />
        <h2 style="text-align: left; margin-left: 5px; font-size: 18px">
          {{ "会议总时长" }}
        </h2>
        <div id="conferenceStatisticstotol_id1" />
      </el-card>
    </div>
    <!-- 重新上线-数量统计 -->
    <!-- <div class="view_getReOnlineAll">
      <el-card>
        <el-radio-group
          v-model="escape_radio"
          size="small"
          class="getReOnlineAll"
        >
          <el-date-picker
            v-model="getReOnlineAll_value"
            type="daterange"
            size="small"
            value-format="yyyy-MM-dd"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            @change="getReOnlineAll"
          >
          </el-date-picker>
        </el-radio-group>
        <el-col>
          <h2 style="text-align: left; margin-left: 5px; font-size: 18px">
            {{ "重新上线-数量统计" }}
          </h2>
        </el-col>
        <div id="getReOnlineAll_id" />
      </el-card>
    </div> -->
    <!-- 重新上线-类型分析 -->
    <!-- <div class="view_online_bug_wtfl">
      <el-card>
        <el-radio-group size="small" class="online_bug_wtfl1">
          <el-date-picker
            v-model="online_bug_wtfl_value"
            type="daterange"
            size="small"
            value-format="yyyy-MM-dd"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            @change="online_bug_wtfl1"
          >
          </el-date-picker>
        </el-radio-group>
        &emsp;
        <el-radio-group
          v-model="wtfl_subject_radio"
          size="small"
          @change="online_bug_wtfl1"
          style="margin-left: 10px"
        >
          <el-radio-button label="数学">数学</el-radio-button>
          <el-radio-button label="语文">语文</el-radio-button>
          <el-radio-button label="英语">英语</el-radio-button>
          <el-radio-button label="自然科学">自然科学</el-radio-button>
        </el-radio-group>
        <el-select
          id="class"
          v-model="default_wtfl_label"
          placeholder="选择年级"
          size="small"
          style="float: right"
          @change="online_bug_wtfl"
        >
          <el-option
            v-for="item in wtfl_class_radio"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            @change="online_bug_wtfl"
          >
          </el-option>
        </el-select>
        <h2 style="text-align: left; margin-left: 5px; font-size: 18px">
          {{ "重新上线-类型分析" }}
        </h2>

        <div id="online_bug_wtfl_id" />
      </el-card>
    </div> -->
    <!-- 重新上线-趋势分析 -->
    <!-- <div class="view_reonlinetrend">
      <el-card>
        <el-radio-group size="small" class="reonlinetrend">
          <el-date-picker
            v-model="reonlinetrend_dt_value"
            type="daterange"
            size="small"
            value-format="yyyy-MM-dd"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            @change="reonlinetrend"
          >
          </el-date-picker>
        </el-radio-group>
        <el-radio-group
          v-model="reonlinetrend_radio"
          size="small"
          @change="reonlinetrend"
          :disabled="reonlinetrenda"
          style="margin-left: 10px"
        >
          <el-radio-button label="week">周</el-radio-button>
          <el-radio-button label="month">月</el-radio-button>
        </el-radio-group>
        <el-radio-group
          v-model="reonlinetrend_subject_radio"
          size="small"
          @change="reonlinetrend1"
          style="margin-left: 10px"
        >
          <el-radio-button label="数学">数学</el-radio-button>
          <el-radio-button label="语文">语文</el-radio-button>
          <el-radio-button label="英语">英语</el-radio-button>
          <el-radio-button label="自然科学">自然科学</el-radio-button>
        </el-radio-group>
        <el-select
          id="class"
          v-model="vaule1"
          multiple
          collapse-tags
          placeholder="选择年级"
          size="small"
          style="float: right"
          @chnge="reonlinetrend"
        >
          <el-option
            v-for="item in reonlinetrend_class_radio"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            @chnge="reonlinetrend"
          >
          </el-option>
        </el-select>
        <el-col>
          <h2 style="text-align: left; margin-left: 5px; font-size: 18px">
            {{ "重新上线-趋势分析" }}
          </h2>
        </el-col>
        <div id="reonlinetrend_id" />
      </el-card>
    </div> -->
  </div>
</template>
<script>
import { request } from "@/utils/quality";
import { _Defect, _Acceptance } from "@/api/form_submission";
const echarts = require("echarts");
export default {
  name: "analyze",
  data() {
    return {
      cc: false,
      dd: false,
      ee: false,
      rr: false,
      GrindingIssue: false,
      getmokeClsaaifya: false,
      getbugClsaaifya: false,
      getbugClsaaify_value: false,
      getbugClsaaify_radio: "month",
      getmokeClsaaify_radio: "month",
      GrindingIssueType_radio: "month",
      GrindingClass_radio: "month",
      conferenceStatistics_radio: "month",
      conferenceStatistics1_radio: "week",
      conferenceStatistics_grade_radio: "MA-K2",
      conferenceStatistics1_grade_radio: "MA-K2",
      getCreatandSolve_class: "MA-K2",
      getbugClsaaify_class: "",
      getbugClsaaify_subject_radio: "数学",
      getmokeClsaaify_subject_radio: "数学",
      GrindingIssueType_subject_radio: "数学",
      GrindingClass_subject_radio: "数学",
      GrindingClass_class_radio: [],
      GrindingClass2_value: [],
      getCreatandSolve_subject_radio: "数学",
      statistics_radio: "数学",
      getmokeClsaaify_class_radio: [],
      getbugClsaaify_class_radio: [],
      getCreatandSolve_class_radio: [],
      GrindingIssueType_class_radio: [],
      getmokeClsaaify_value: [],
      getbugClsaaify_value: [],
      getReOnlineAll_value: [],
      online_bug_wtfl_value: [],
      reonlinetrend_dt_value: [],
      wtfl_subject_radio: "数学",
      default_wtfl_label: "",
      vaule1: "",
      default_wtfl_value: "",
      wtfl_class_radio: [],
      default_value: "",
      conferenceStatistics_value: [],
      conferenceStatistics1_value: [],
      GrindingIssueType1_value: [],
      default_label: "",
      default_value: "",
      escape_radio: "month",
      default_value_moke: "",
      default_label_moke: "",
      default_creatandsolve_value: "",
      default_creatandsolve_label: "",
      default_value_GrindingIssueType: "",
      default_label_GrindingIssueType: "",
      default_value_GrindingClass: "",
      default_label_GrindingClass: "",
      seGameDate_radio: "week",
      statistics_value: [],
      gradetrend_radio: [],
      reonlinetrend_default_label: "",
      reonlinetrend_default_value: "",
      reonlinetrend_value: [],
      reonlinetrend_class_radio: [],
      reonlinetrend_subject_radio: "数学",
      reonlinetrend_radio: "month",
      reonlinetrend_value: [],
      reonlinetrenda: false,
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
    };
  },
  mounted() {
    this.getbugClsaaify();
    this.getmokeClsaaify();
    this.conferenceStatistics();
    this.conferenceStatistics1();
    this.GrindingIssueType();
    this.GrindingClass();
    // this.getReOnlineAll();
    // this.online_bug_wtfl1();
    // this.reonlinetrend();
    // this.reonlinetrend1();
  },
  methods: {
    // 缺陷分类
    getbugClsaaify() {
      let vm = this;
      request({
        method: "POST",
        url: "/provide_data" + "?Subject=" + this.getbugClsaaify_subject_radio,
      }).then(function (response) {
        vm.getbugClsaaify_class_radio = response.data.data;
        vm.default_label = vm.getbugClsaaify_class_radio[0].label;
        vm.default_value = vm.getbugClsaaify_class_radio[1].value;
        vm.getbugClsaaify1();
      });
    },
    getbugClsaaify1(val) {
      if (val == undefined) {
        val = this.default_value;
      }
      echarts.dispose(document.getElementById("getbugClsaaify_id"));
      let vm = this;
      var rateChart = echarts.init(
        document.getElementById("getbugClsaaify_id")
      );
      if (this.getbugClsaaify_value[0] == undefined) {
        (this.getbugClsaaify_value[0] = ""),
          (this.getbugClsaaify_value[1] = "");
      }
      var conferenceStatistics_startdata = parseInt(
        this.getbugClsaaify_value[0].replaceAll("-", "")
      );
      var conferenceStatistics_enddata = parseInt(
        this.getbugClsaaify_value[1].replaceAll("-", "")
      );
      this.getbugClsaaifya =
        conferenceStatistics_enddata - conferenceStatistics_startdata > 180
          ? true
          : false;
      // request({
      //   method: "POST",
      //   url:
      //     "/getbugClsaaify" +
      //     "?type=" +
      //     this.getbugClsaaify_radio +
      //     "&subject=" +
      //     this.getbugClsaaify_subject_radio +
      //     "&aclass=" +
      //     val +
      //     "&startdate=" +
      //     this.getbugClsaaify_value[0] +
      //     "&enddate=" +
      //     this.getbugClsaaify_value[1],
      // })
      const datas = {
        type: this.getbugClsaaify_radio,
        subject: this.getbugClsaaify_subject_radio,
        aclass: val,
        start: this.getbugClsaaify_value[0],
        end: this.getbugClsaaify_value[1],
      };
      _Defect(datas).then((res) => {
        var option = {
          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            type: "category",
            data: res.data.data,
            axisLabel: {
              interval: 0,
              rotate: 20,
            },
            axisTick: {
              alignWithLabel: true,
            },
          },
          yAxis: { type: "value" },
          legend: {},
          grid: {
            left: "35px",
            right: "35px",
            bottom: "35px",
          },
          series: [
            {
              name: "总计",
              data: res.data.总计,
              type: "line",
              color: "#026FFC",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "教研需求",
              data: res.data.教研需求,
              type: "line",
              color: "#089CFF",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "游戏策划",
              data: res.data.游戏策划,
              type: "line",
              color: "#FFAC54",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "交互原画",
              data: res.data.交互原画,
              type: "line",
              color: "#ff7f50",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "交互动画",
              data: res.data.交互动画,
              type: "line",
              color: "#C66DF2",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "剧情原画",
              data: res.data.剧情原画,
              type: "line",
              color: "#58E1F7",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "剧情动画",
              data: res.data.剧情动画,
              type: "line",
              color: "#F8E83B",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "配音",
              data: res.data.配音,
              type: "line",
              color: "#D0D31C",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "音效",
              data: res.data.音效,
              type: "line",
              color: "#B5C411",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "拍摄",
              data: res.data.拍摄,
              type: "line",
              color: "#9AC411",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "后期",
              data: res.data.后期,
              type: "line",
              color: "#63CF35",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "开发",
              data: res.data.开发,
              type: "line",
              color: "#A7CC14",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "执行策划",
              data: res.data.执行策划,
              type: "line",
              color: "#7E59E3",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "测试",
              data: res.data.测试,
              type: "line",
              color: "#EE63B9",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
          ],
        };
        rateChart.setOption(option);
      }),
        (window.onresize = function () {
          rateChart.resize();
        });
    },
    // 磨课分类
    getmokeClsaaify() {
      let vm = this;
      request({
        method: "POST",
        url: "/provide_data" + "?Subject=" + this.getmokeClsaaify_subject_radio,
      }).then(function (response) {
        vm.getmokeClsaaify_class_radio = response.data.data;
        vm.default_label_moke = vm.getmokeClsaaify_class_radio[0].label;
        vm.default_value_moke = vm.getmokeClsaaify_class_radio[1].value;
        vm.getmokeClsaaify1();
      });
    },
    getmokeClsaaify1(val) {
      if (val == undefined) {
        val = this.default_value_moke;
      }
      echarts.dispose(document.getElementById("getmokeClsaaify_id"));
      let vm = this;
      var rateChart = echarts.init(
        document.getElementById("getmokeClsaaify_id")
      );
      if (this.getmokeClsaaify_value[0] == undefined) {
        (this.getmokeClsaaify_value[0] = ""),
          (this.getmokeClsaaify_value[1] = "");
      }
      var conferenceStatistics_startdata = parseInt(
        this.getmokeClsaaify_value[0].replaceAll("-", "")
      );
      var conferenceStatistics_enddata = parseInt(
        this.getmokeClsaaify_value[1].replaceAll("-", "")
      );
      this.getmokeClsaaifya =
        conferenceStatistics_enddata - conferenceStatistics_startdata > 180
          ? true
          : false;
      const datas = {
        type: this.getbugClsaaify_radio,
        subject: this.getbugClsaaify_subject_radio,
        aclass: val,
        start: this.getbugClsaaify_value[0],
        end: this.getbugClsaaify_value[1],
      };
      _Acceptance(datas).then((res) => {
        var option = {
          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            type: "category",
            data: res.data.data,
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
            selected: {},
          },
          grid: {
            left: "35px",
            right: "35px",
            bottom: "35px",
          },
          series: [
            {
              name: "总计",
              data: res.data.总计,
              type: "line",
              color: "#026FFC",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "教研需求",
              data: res.data.教研需求,
              type: "line",
              color: "#089CFF",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "游戏策划",
              data: res.data.游戏策划,
              type: "line",
              color: "#FFAC54",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "交互原画",
              data: res.data.交互原画,
              type: "line",
              color: "#ff7f50",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "交互动画",
              data: res.data.交互动画,
              type: "line",
              color: "#C66DF2",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "剧情原画",
              data: res.data.剧情原画,
              type: "line",
              color: "#58E1F7",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "剧情动画",
              data: res.data.剧情动画,
              type: "line",
              color: "#F8E83B",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "配音",
              data: res.data.配音,
              type: "line",
              color: "#D0D31C",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "音效",
              data: res.data.音效,
              type: "line",
              color: "#B5C411",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "拍摄",
              data: res.data.拍摄,
              type: "line",
              color: "#9AC411",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "后期",
              data: res.data.后期,
              type: "line",
              color: "#63CF35",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "开发",
              data: res.data.开发,
              type: "line",
              color: "#A7CC14",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "执行策划",
              data: res.data.执行策划,
              type: "line",
              color: "#7E59E3",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "测试",
              data: res.data.测试,
              type: "line",
              color: "#EE63B9",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
          ],
        };
        rateChart.setOption(option);
      }),
        (window.onresize = function () {
          rateChart.resize();
        });
    },
    // 磨课类型分类
    GrindingIssueType() {
      let vm = this;
      request({
        method: "POST",
        url:
          "/provide_data" + "?Subject=" + this.GrindingIssueType_subject_radio,
      }).then(function (response) {
        vm.GrindingIssueType_class_radio = response.data.data;
        vm.default_label_GrindingIssueType =
          vm.GrindingIssueType_class_radio[0].label;
        vm.default_value_GrindingIssueType =
          vm.GrindingIssueType_class_radio[0].value;
        vm.GrindingIssueType1();
      });
    },
    GrindingIssueType1(val) {
      if (val == undefined) {
        val = this.default_value_GrindingIssueType;
      }
      echarts.dispose(document.getElementById("GrindingIssueType_id"));
      let vm = this;
      var rateChart = echarts.init(
        document.getElementById("GrindingIssueType_id")
      );
      rateChart.showLoading({
        text: "稍等，数据加载中......",
        color: "#0183FF",
        textColor: "#000",
        maskColor: "rgba(247, 248, 250, 0)",
        zlevel: 0,
        lineWidth: 2,
      });
      if (this.GrindingIssueType1_value[0] == undefined) {
        (this.GrindingIssueType1_value[0] = ""),
          (this.GrindingIssueType1_value[1] = "");
      }
      var conferenceStatistics_startdata = parseInt(
        this.GrindingIssueType1_value[0].replaceAll("-", "")
      );
      var conferenceStatistics_enddata = parseInt(
        this.GrindingIssueType1_value[1].replaceAll("-", "")
      );
      this.GrindingIssue =
        conferenceStatistics_enddata - conferenceStatistics_startdata > 180
          ? true
          : false;
      request({
        method: "POST",
        url:
          "/getgrindingtype" +
          "?type=" +
          this.GrindingIssueType_radio +
          "&subject=" +
          this.GrindingIssueType_subject_radio +
          "&aclass=" +
          val +
          "&startdate=" +
          this.GrindingIssueType1_value[0] +
          "&enddate=" +
          this.GrindingIssueType1_value[1],
      }).then(function (response) {
        rateChart.hideLoading();
        var option = {
          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            type: "category",
            data: response.data.data.date,
            axisLabel: {
              interval: 0,
              rotate: 20,
            },
            axisTick: {
              alignWithLabel: true,
            },
          },
          grid: {
            left: "35px",
            right: "35px",
            bottom: "35px",
          },
          yAxis: { type: "value" },
          legend: {},
          series: [
            {
              name: "改进",
              data: response.data.data.改进,
              type: "bar",
              stack: "one",
              color: "#089CFF",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "规则遗漏",
              data: response.data.data.规则遗漏,
              type: "bar",
              stack: "one",
              color: "#FFAC54",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "确认遗漏",
              data: response.data.data.确认遗漏,
              type: "bar",
              stack: "one",
              color: "#ff7f50",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "需求变更",
              data: response.data.data.需求变更,
              type: "bar",
              stack: "one",
              color: "#C66DF2",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "缺陷",
              data: response.data.data.缺陷,
              type: "bar",
              stack: "one",
              color: "#58E1F7",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
          ],
        };
        rateChart.setOption(option);
      }),
        (window.onresize = function () {
          rateChart.resize();
        });
    },
    //二次磨课分类
    GrindingClass() {
      let vm = this;
      request({
        method: "POST",
        url: "/provide_data" + "?Subject=" + this.GrindingClass_subject_radio,
      }).then(function (response) {
        vm.GrindingClass_class_radio = response.data.data;
        vm.default_label_GrindingClass = vm.GrindingClass_class_radio[0].label;
        vm.default_value_GrindingClass = vm.GrindingClass_class_radio[0].value;
        vm.GrindingClass2();
      });
    },
    GrindingClass2(val) {
      if (val == undefined) {
        val = this.default_value_GrindingClass;
      }
      echarts.dispose(document.getElementById("GrindingClass_id"));
      let vm = this;
      var rateChart = echarts.init(document.getElementById("GrindingClass_id"));
      rateChart.showLoading({
        text: "稍等，数据加载中......",
        color: "#0183FF",
        textColor: "#000",
        maskColor: "rgba(247, 248, 250, 0)",
        zlevel: 0,
        lineWidth: 2,
      });
      if (this.GrindingClass2_value[0] == undefined) {
        (this.GrindingClass2_value[0] = ""),
          (this.GrindingClass2_value[1] = "");
      }
      var conferenceStatistics_startdata = parseInt(
        this.GrindingClass2_value[0].replaceAll("-", "")
      );
      var conferenceStatistics_enddata = parseInt(
        this.GrindingClass2_value[1].replaceAll("-", "")
      );
      this.GrindingIssue =
        conferenceStatistics_enddata - conferenceStatistics_startdata > 180
          ? true
          : false;
      request({
        method: "POST",
        url:
          "/secondgrindingtype" +
          "?type=" +
          this.GrindingClass_radio +
          "&subject=" +
          this.GrindingClass_subject_radio +
          "&aclass=" +
          val +
          "&startdate=" +
          this.GrindingClass2_value[0] +
          "&enddate=" +
          this.GrindingClass2_value[1],
      }).then(function (response) {
        rateChart.hideLoading();
        var option = {
          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            type: "category",
            data: response.data.data.date,
            axisLabel: {
              interval: 0,
              rotate: 20,
            },
            axisTick: {
              alignWithLabel: true,
            },
          },
          grid: {
            left: "35px",
            right: "35px",
            bottom: "35px",
          },
          yAxis: { type: "value" },
          legend: {},
          series: [
            {
              name: "改进",
              data: response.data.data.改进,
              type: "bar",
              stack: "one",
              color: "#089CFF",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "规则遗漏",
              data: response.data.data.规则遗漏,
              type: "bar",
              stack: "one",
              color: "#FFAC54",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "确认遗漏",
              data: response.data.data.确认遗漏,
              type: "bar",
              stack: "one",
              color: "#ff7f50",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "需求变更",
              data: response.data.data.需求变更,
              type: "bar",
              stack: "one",
              color: "#C66DF2",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "缺陷",
              data: response.data.data.缺陷,
              type: "bar",
              stack: "one",
              color: "#58E1F7",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
          ],
        };
        rateChart.setOption(option);
      }),
        (window.onresize = function () {
          rateChart.resize();
        });
    },
    // 会议统计（折线图）
    conferenceStatistics() {
      echarts.dispose(document.getElementById("conferenceStatisticsavg_id"));
      if (this.conferenceStatistics_value[0] == undefined) {
        (this.conferenceStatistics_value[0] = ""),
          (this.conferenceStatistics_value[1] = "");
      }
      var conferenceStatistics_startdata = parseInt(
        this.conferenceStatistics_value[0].replaceAll("-", "")
      );
      var conferenceStatistics_enddata = parseInt(
        this.conferenceStatistics_value[1].replaceAll("-", "")
      );
      this.cc =
        conferenceStatistics_enddata - conferenceStatistics_startdata > 180
          ? true
          : false;
      var rateChartavg = echarts.init(
        document.getElementById("conferenceStatisticsavg_id")
      );
      echarts.dispose(document.getElementById("conferenceStatisticstotol_id"));
      var rateCharttotol = echarts.init(
        document.getElementById("conferenceStatisticstotol_id")
      );
      request({
        method: "POST",
        url:
          "/MeetingSum" +
          "?grade=" +
          this.conferenceStatistics_grade_radio +
          "&type=" +
          this.conferenceStatistics_radio +
          "&start_date=" +
          this.conferenceStatistics_value[0] +
          "&end_date=" +
          this.conferenceStatistics_value[1],
      }).then(function (response) {
        var option = {
          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            type: "category",
            data: response.data.data.date,
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
            selected: {
              平均: false,
            },
          },
          grid: {
            left: "35px",
            right: "35px",
            // bottom: "110px",
          },
          // dataZoom: [
          //   {
          //     type: "slider",
          //     show: true,
          //     start: 0,
          //     end: 100,
          //     xAxisIndex: [0],
          //   },
          // ],
          series: [
            {
              name: "站会",
              data: response.data.data.站会.ave_hour,
              type: "line",
              color: "#089CFF",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "脚本会",
              data: response.data.data.脚本会.ave_hour,
              type: "line",
              color: "#FFAC54",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "磨课会",
              data: response.data.data.磨课会.ave_hour,
              type: "line",
              color: "#ff7f50",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "小组会",
              data: response.data.data.小组会.ave_hour,
              type: "line",
              color: "#C66DF2",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "分享会",
              data: response.data.data.分享会.ave_hour,
              type: "line",
              color: "#58E1F7",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "复盘会",
              data: response.data.data.复盘会.ave_hour,
              type: "line",
              color: "#F8E83B",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "部门会",
              data: response.data.data.部门会.ave_hour,
              type: "line",
              color: "#708090",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "管理会",
              data: response.data.data.管理会.ave_hour,
              type: "line",
              color: "#7E59E3",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "项目沟通会",
              data: response.data.data.项目沟通会.ave_hour,
              type: "line",
              color: "#9AC411",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "需求会",
              data: response.data.data.需求会.ave_hour,
              type: "line",
              color: "#FF6666",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "评审会",
              data: response.data.data.评审会.ave_hour,
              type: "line",
              color: "#EE63B9",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "平均",
              data: response.data.data.平均,
              type: "line",
              color: "red",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
          ],
        };
        var optiontotol = {
          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            type: "category",
            data: response.data.data.date,
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
            selected: {
              总计: false,
            },
          },
          grid: {
            left: "35px",
            right: "35px",
            // bottom: "110px",
          },
          // dataZoom: [
          //   {
          //     type: "slider",
          //     show: true,
          //     start: 0,
          //     end: 30,
          //     xAxisIndex: [0],
          //   },
          // ],
          series: [
            {
              name: "站会",
              data: response.data.data.站会.sum_hour,
              type: "line",
              color: "#089CFF",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "脚本会",
              data: response.data.data.脚本会.sum_hour,
              type: "line",
              color: "#FFAC54",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "磨课会",
              data: response.data.data.磨课会.sum_hour,
              type: "line",
              color: "#ff7f50",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "小组会",
              data: response.data.data.小组会.sum_hour,
              type: "line",
              color: "#C66DF2",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "分享会",
              data: response.data.data.分享会.sum_hour,
              type: "line",
              color: "#58E1F7",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "复盘会",
              data: response.data.data.复盘会.sum_hour,
              type: "line",
              color: "#F8E83B",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "部门会",
              data: response.data.data.部门会.sum_hour,
              type: "line",
              color: "#708090",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "管理会",
              data: response.data.data.管理会.sum_hour,
              type: "line",
              color: "#7E59E3",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "项目沟通会",
              data: response.data.data.项目沟通会.sum_hour,
              type: "line",
              color: "#9AC411",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "需求会",
              data: response.data.data.需求会.sum_hour,
              type: "line",
              color: "#FF6666",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "评审会",
              data: response.data.data.评审会.sum_hour,
              type: "line",
              color: "#EE63B9",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "总计",
              data: response.data.data.总计,
              type: "line",
              color: "red",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
          ],
        };
        rateChartavg.setOption(option);
        rateCharttotol.setOption(optiontotol);
      }),
        (window.onresize = function () {
          rateChartavg.resize();
          rateCharttotol.resize();
        });
    },
    // 会议统计（柱状图）
    conferenceStatistics1() {
      echarts.dispose(document.getElementById("conferenceStatisticsavg_id1"));
      let vm = this;
      if (this.conferenceStatistics1_value[0] == undefined) {
        (this.conferenceStatistics1_value[0] = ""),
          (this.conferenceStatistics1_value[1] = "");
      }
      var rateChartavg = echarts.init(
        document.getElementById("conferenceStatisticsavg_id1")
      );
      var conferenceStatistics_startdata = parseInt(
        this.conferenceStatistics1_value[0].replaceAll("-", "")
      );
      var conferenceStatistics_enddata = parseInt(
        this.conferenceStatistics1_value[1].replaceAll("-", "")
      );
      this.dd =
        conferenceStatistics_enddata - conferenceStatistics_startdata > 180
          ? true
          : false;
      echarts.dispose(document.getElementById("conferenceStatisticstotol_id1"));
      var rateCharttotol = echarts.init(
        document.getElementById("conferenceStatisticstotol_id1")
      );
      request({
        method: "POST",
        url:
          "/MeetingSum" +
          "?grade=" +
          this.conferenceStatistics1_grade_radio +
          "&type=" +
          this.conferenceStatistics1_radio +
          "&start_date=" +
          this.conferenceStatistics1_value[0] +
          "&end_date=" +
          this.conferenceStatistics1_value[1],
      }).then(function (response) {
        var option = {
          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            type: "category",
            data: response.data.data.date,
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
            selected: {
              平均: false,
            },
          },
          grid: {
            left: "35px",
            right: "35px",
            // bottom: "110px",
          },
          // dataZoom: [
          //   {
          //     type: "slider",
          //     show: true,
          //     start: 0,
          //     end: 20,
          //     xAxisIndex: [0],
          //   },
          // ],
          series: [
            {
              name: "站会",
              data: response.data.data.站会.ave_hour,
              stack: "one",
              type: "bar",
              color: "#089CFF",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "脚本会",
              data: response.data.data.脚本会.ave_hour,
              stack: "one",
              type: "bar",
              color: "#FFAC54",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "磨课会",
              data: response.data.data.磨课会.ave_hour,
              stack: "one",
              type: "bar",
              color: "#ff7f50",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "小组会",
              data: response.data.data.小组会.ave_hour,
              stack: "one",
              type: "bar",
              color: "#C66DF2",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "分享会",
              data: response.data.data.分享会.ave_hour,
              stack: "one",
              type: "bar",
              color: "#58E1F7",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "复盘会",
              data: response.data.data.复盘会.ave_hour,
              stack: "one",
              type: "bar",
              color: "#F8E83B",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "部门会",
              data: response.data.data.部门会.ave_hour,
              stack: "one",
              type: "bar",
              color: "#708090",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "管理会",
              data: response.data.data.管理会.ave_hour,
              stack: "one",
              type: "bar",
              color: "#7E59E3",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "项目沟通会",
              data: response.data.data.项目沟通会.ave_hour,
              stack: "one",
              type: "bar",
              color: "#9AC411",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "需求会",
              data: response.data.data.需求会.ave_hour,
              stack: "one",
              type: "bar",
              color: "#FF6666",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "评审会",
              data: response.data.data.评审会.ave_hour,
              stack: "one",
              type: "bar",
              color: "#EE63B9",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "平均",
              data: response.data.data.平均,
              stack: "one",
              type: "bar",
              color: "red",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
          ],
        };

        var optiontotol = {
          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            type: "category",
            data: response.data.data.date,
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
            selected: {
              总计: false,
            },
          },
          grid: {
            left: "35px",
            right: "35px",
            // bottom: "30px",
          },
          // dataZoom: [
          //   {
          //     type: "slider",
          //     show: true,
          //     start: 0,
          //     end: 20,
          //     xAxisIndex: [0],
          //   },
          // ],
          series: [
            {
              name: "站会",
              data: response.data.data.站会.sum_hour,
              stack: "one",
              type: "bar",
              color: "#089CFF",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "脚本会",
              data: response.data.data.脚本会.sum_hour,
              stack: "one",
              type: "bar",
              color: "#FFAC54",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "磨课会",
              data: response.data.data.磨课会.sum_hour,
              stack: "one",
              type: "bar",
              color: "#ff7f50",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "小组会",
              data: response.data.data.小组会.sum_hour,
              stack: "one",
              type: "bar",
              color: "#C66DF2",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "分享会",
              data: response.data.data.分享会.sum_hour,
              stack: "one",
              type: "bar",
              color: "#58E1F7",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "复盘会",
              data: response.data.data.复盘会.sum_hour,
              stack: "one",
              type: "bar",
              color: "#F8E83B",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "部门会",
              data: response.data.data.部门会.sum_hour,
              stack: "one",
              type: "bar",
              color: "#708090",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "管理会",
              data: response.data.data.管理会.sum_hour,
              stack: "one",
              type: "bar",
              color: "#7E59E3",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "项目沟通会",
              data: response.data.data.项目沟通会.sum_hour,
              stack: "one",
              type: "bar",
              color: "#9AC411",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "需求会",
              data: response.data.data.需求会.sum_hour,
              stack: "one",
              type: "bar",
              color: "#FF6666",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "评审会",
              data: response.data.data.评审会.sum_hour,
              stack: "one",
              type: "bar",
              color: "#EE63B9",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "总计",
              data: response.data.data.总计,
              stack: "one",
              type: "bar",
              color: "red",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
          ],
        };
        rateChartavg.setOption(option);
        rateCharttotol.setOption(optiontotol);
      }),
        (window.onresize = function () {
          rateChartavg.resize();
          rateCharttotol.resize();
        });
    },
    // 重新上线-数量统计
    getReOnlineAll() {
      echarts.dispose(document.getElementById("getReOnlineAll_id"));
      let vm = this;
      var rateChart = echarts.init(
        document.getElementById("getReOnlineAll_id")
      );
      if (this.getReOnlineAll_value[0] == undefined) {
        (this.getReOnlineAll_value[0] = ""),
          (this.getReOnlineAll_value[1] = "");
      }
      request({
        method: "POST",
        url:
          "/getReOnlineAll" +
          "?date_start=" +
          this.getReOnlineAll_value[0] +
          "&date_end=" +
          this.getReOnlineAll_value[1],
      }).then(function (response) {
        var option = {
          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            type: "category",
            data: response.data.data.mingcheng,
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
            },
            show: true,
          },
          legend: {
            selected: {
              总计: false,
            },
          },
          grid: {
            left: "35px",
            right: "35px",
            bottom: "35px",
          },
          series: [
            {
              name: "总计",
              data: response.data.data.zongji,
              type: "bar",
              stack: "datapreview",
              color: "pink",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "规则遗漏",
              data: response.data.data.guizeyilou,
              type: "bar",
              stack: "datapreview",
              color: "#f411ff",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "确认遗漏",
              data: response.data.data.querenyilou,
              type: "bar",
              stack: "datapreview",
              color: "blue",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "改进",
              data: response.data.data.gaijin,
              stack: "datapreview",
              type: "bar",
              color: "#089CFF",
              lineStyle: {
                width: 4,
              },
              label: { show: true },
            },
            {
              name: "需求变更",
              data: response.data.data.xuqiubiangeng,
              stack: "datapreview",
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
      });
    },
    // 重新上线-类型分析
    online_bug_wtfl1() {
      let vm = this;
      request({
        method: "POST",
        url: "/provide_data" + "?Subject=" + this.wtfl_subject_radio,
      }).then(function (response) {
        vm.wtfl_class_radio = response.data.data;
        vm.default_wtfl_label = vm.wtfl_class_radio[0].label;
        vm.default_wtfl_value = vm.wtfl_class_radio[0].value;
        vm.online_bug_wtfl();
      });
    },
    online_bug_wtfl(val) {
      if (val == undefined) {
        val = this.default_wtfl_value;
      }
      echarts.dispose(document.getElementById("online_bug_wtfl_id"));
      let vm = this;
      var rateChart = echarts.init(
        document.getElementById("online_bug_wtfl_id")
      );
      if (this.online_bug_wtfl_value[0] == undefined) {
        (this.online_bug_wtfl_value[0] = ""),
          (this.online_bug_wtfl_value[1] = "");
      }
      request({
        method: "POST",
        url:
          "/online_bug_wtfl" +
          "?start_time=" +
          this.online_bug_wtfl_value[0] +
          "&end_time=" +
          this.online_bug_wtfl_value[1] +
          "&subject=" +
          this.wtfl_subject_radio +
          "&aclass=" +
          val,
      }).then(function (response) {
        var option = {
          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            type: "category",
            data: response.data.data.type,
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
            bottom: "35px",
          },
          series: [
            {
              name: "重新上线分析",
              data: response.data.data.num,
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
    },
    // 重新上线-趋势分析
    reonlinetrend1() {
      let vm = this;
      request({
        method: "POST",
        url: "/provide_data" + "?Subject=" + this.reonlinetrend_subject_radio,
      }).then(function (response) {
        vm.reonlinetrend_class_radio = response.data.data;
        vm.default_label_reonlinetrend = vm.reonlinetrend_class_radio[0].label;
        vm.default_value_reonlinetrend = vm.reonlinetrend_class_radio[0].value;
        vm.reonlinetrend();
      });
    },
    reonlinetrend(val) {
      if (val == undefined) {
        val = this.default_value_reonlinetrend;
      }
      let start_date = "";
      let end_date = "";
      echarts.dispose(document.getElementById("reonlinetrend_id"));
      // let vm = this;
      var rateChart = echarts.init(document.getElementById("reonlinetrend_id"));
      rateChart.showLoading({
        text: "稍等，数据加载中......",
        color: "#0183FF",
        textColor: "#000",
        maskColor: "rgba(247, 248, 250, 0)",
        zlevel: 0,
        lineWidth: 2,
      });

      if (this.online_bug_wtfl_value[0] == undefined) {
        (this.online_bug_wtfl_value[0] = ""),
          (this.online_bug_wtfl_value[1] = "");
      }

      request({
        method: "POST",
        url:
          "/reonlinetrend" +
          "?type=" +
          this.reonlinetrend_radio +
          "&subject=" +
          this.reonlinetrend_subject_radio +
          "&aclass=" +
          val +
          "&startdate=" +
          start_date +
          "&enddate=" +
          end_date,
      }).then(function (response) {
        rateChart.hideLoading();
        let arr = [];
        const cls_data = response.data.data.cls;
        for (var i in cls_data) {
          let dd = {
            name: cls_data[i].name,
            data: cls_data[i].num,
            type: "line",
            // color: "#026FFC",
            lineStyle: {
              width: 4,
            },
            label: { show: true },
          };
          arr.push(dd);
        }

        var option = {
          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            type: "category",
            data: response.data.data.datalist,
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
            // selected: {
            // },
          },
          grid: {
            left: "35px",
            right: "35px",
            bottom: "35px",
          },
          series: arr,
        };
        rateChart.setOption(option);
      }),
        (window.onresize = function () {
          rateChart.resize();
        });
    },
  },
};
</script>
<style lang="scss" scoped>
// 缺陷分类
.view_getbugClsaaify {
  margin-top: 15px;
  margin-left: 20px;
  margin-right: 20px;
  text-align: left;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  .el-card {
    #getbugClsaaify_id {
      margin-top: 35px;
      height: 300px;
    }
  }
}
//磨课分类
.view_getmokeClsaaify {
  margin-top: 15px;
  margin-left: 20px;
  margin-right: 20px;
  text-align: left;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  .el-card {
    #getmokeClsaaify_id {
      margin-top: 35px;
      height: 300px;
    }
  }
}
// 磨课类型信息
.view_GrindingIssueType {
  margin-top: 15px;
  margin-left: 20px;
  margin-right: 20px;
  text-align: left;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  .el-card {
    #GrindingIssueType_id {
      margin-top: 10px;
      height: 300px;
    }
  }
}
//二次磨课类型
.view_GrindingClass {
  margin-top: 15px;
  margin-left: 20px;
  margin-right: 20px;
  text-align: left;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  .el-card {
    #GrindingClass_id {
      margin-top: 10px;
      height: 300px;
    }
  }
}

// 会议统计样式对齐展示
.view_conferenceStatistics {
  width: 100%;
  display: flex;
  margin-top: 15px;
  .el-card {
    margin-left: 10px;
    margin-right: 10px;
    width: 100%;
    #conferenceStatisticsavg_id,
    #conferenceStatisticstotol_id {
      height: 400px;
    }
  }
  .el-card {
    margin-left: 10px;
    margin-right: 10px;
    width: 100%;
    #conferenceStatisticsavg_id1,
    #conferenceStatisticstotol_id1 {
      height: 400px;
    }
  }
}

//重新上线--数量统计
.view_getReOnlineAll {
  margin-top: 15px;
  margin-left: 20px;
  margin-right: 20px;
  .el-card {
    width: 100%;
    #getReOnlineAll_id {
      height: 300px;
    }
  }
}
//重新上线--类型分析
.view_online_bug_wtfl {
  margin-top: 15px;
  margin-left: 20px;
  margin-right: 20px;

  .el-card {
    width: 100%;
    #online_bug_wtfl_id {
      height: 300px;
    }
  }
}
//重新上线--趋势分析
.view_reonlinetrend {
  margin-top: 15px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 15px;
  .el-card {
    width: 100%;
    #reonlinetrend_id {
      height: 300px;
    }
  }
}
</style>