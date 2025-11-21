<template>
  <div :id="uuid" :style="style" />
</template>

<script>
import * as echarts from 'echarts'

const idGen = () => {
  return new Date().getTime()
}

export default {

  props: {

    height: {
      type: String,
      default: '400px'
    },
    width: {
      type: String,
      default: '600px'
    },

    options: {
      type: Object,
      default: null
    }

  },

  data() {
    return {
      uuid: null,
      myChart: null
    }
  },

  computed: {

    style() {
      return {
        height: this.height,
        width: this.width
      }
    }

  },

  watch: {

    width(a, b) {
      if (this.myChart) {
        setTimeout(() => {
          this.myChart.resize({
            animation: {
              duration: 300
            }
          })
        }, 0)
      }
    },

    options() {
      if (this.myChart) {
        this.myChart.setOption(this.options, {
          notMerge: true
        })
      }
    }
  },

  created() {
    this.uuid = idGen()
  },

  mounted() {
    // 准备实例
    this.myChart = echarts.init(document.getElementById(this.uuid))

    // 应用配置项
    this.myChart.setOption(this.options)
  }
}
</script>
