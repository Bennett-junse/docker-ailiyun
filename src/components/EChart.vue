<template>
  <div id="chart"></div>
</template>
  
  <script>
import * as echarts from 'echarts'

export default {
  props: {
    option: {
      type: Object,
      default: () => {},
    },
  },
  mounted() {
    this.chart = echarts.init(document.getElementById("chart"));
  },
  methods: {
    updateOption(newOption) {
      this.chart.setOption(newOption);
    },
  },
  watch: {
    option: {
      deep: true,
      handler(newOption) {
        this.updateOption(newOption);
      },
    },
  },
};
</script>