<template>
  <div id="chart" />
</template>

<script>
import * as echarts from 'echarts'

export default {
  props: {
    option: {
      type: Object,
      default: () => {}
    }
  },
  watch: {
    option: {
      deep: true,
      handler(newOption) {
        this.updateOption(newOption)
      }
    }
  },
  mounted() {
    this.chart = echarts.init(document.getElementById('chart'))
  },
  methods: {
    updateOption(newOption) {
      this.chart.setOption(newOption)
    }
  }
}
</script>
