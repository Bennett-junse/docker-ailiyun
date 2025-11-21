<template>
  <el-row :gutter="40" class="panel-group">
    <el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-icon-wrapper icon-people">
          <i class="card-panel-icon el-icon-s-data" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">xxx</div>
          <span class="card-panel-num">{{ Stats_count }}</span>
          次
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-icon-wrapper icon-message">
          <i class="card-panel-icon el-icon-success" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">xxx</div>
          <span class="card-panel-num">{{ Success_count }}</span>
          次
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-icon-wrapper icon-money">
          <i class="card-panel-icon el-icon-s-marketing" />
        </div>

        <div class="card-panel-description">
          <div class="card-panel-text">xxx</div>
          <span class="card-panel-num">{{ Success_rate }}%</span>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-icon-wrapper icon-shopping">
          <i class="card-panel-icon el-icon-s-comment" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">xxx</div>
          <span class="card-panel-num">{{ exhibit_total }}</span>
          条
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-icon-wrapper icon-shopping">
          <i class="card-panel-icon el-icon-user" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">xxxx</div>
          <span class="card-panel-num">{{ questions_total }}</span>
          条
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-icon-wrapper icon-shopping">
          <i class="card-panel-icon el-icon-s-platform" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">xxx</div>
          <span class="card-panel-num">{{ showcase_total }}</span>
          次
        </div>
      </div>
    </el-col>
    <!-- <el-card class="echarts_card">
      <div id="app" class="echarts_card_bar">
        <MyEcharts :options="options" :width="width"></MyEcharts>
      </div>
    </el-card> -->
  </el-row>
</template>
<script>

import { options1 } from '@/options.js'
// 移除了对 @/api/dashboard 的引用，因为这个API已经被删除了

export default {
  components: {
    // MyEcharts,
  },

  data() {
    return {
      Success_rate: 95.5,
      Stats_count: 128,
      course_rate: 92.3,
      course_count: 118,
      Success_count: 122,
      questions_total: 245,
      exhibit_total: 67,
      report_total: 32,
      showcase_total: 89,
      options: options1,
      width: '100%'
    }
  },
  created() {
    // this.getBaseInfo(); // 移除了对API的调用
  },
  methods: {
    // 移除了 getBaseInfo 方法，因为我们不再调用后端API
  }
}
</script>

<style lang="scss" scoped>
.panel-group {
  margin-top: 18px;

  .card-panel-col {
    margin-bottom: 25px;
  }

  .card-panel {
    height: 100px;
    cursor: pointer;
    font-size: 12px;
    margin-right: 10px;
    margin-left: 10px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: white;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
    border-color: rgba(0, 0, 0, 0.05);

    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }

      .icon-people {
        background: #40c9c6;
      }

      .icon-message {
        background: #36a3f7;
      }

      .icon-money {
        background: #f4516c;
      }

      .icon-shopping {
        background: #34bfa3;
      }
    }

    .icon-people {
      color: #40c9c6;
    }

    .icon-message {
      color: #36a3f7;
    }

    .icon-money {
      color: #f4516c;
    }

    .icon-shopping {
      color: #34bfa3;
    }

    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }

    .card-panel-icon {
      float: left;
      font-size: 48px;
    }

    .card-panel-description {
      // float: right;
      font-weight: bold;
      margin: 30px;
      margin-left: 190px;

      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 10px;
      }

      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}
.echarts_card {
  margin-left: 35px;
  margin-right: 35px;
  margin-bottom: 10px;
}
// .echarts_card_bar {

// }

@media (max-width: 550px) {
  .card-panel-description {
    display: none;
  }

  .card-panel-icon-wrapper {
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;

    .svg-icon {
      display: block;
      margin: 14px auto !important;
      float: none !important;
    }
  }
}
</style>
