// 移除了对 @/api/chart 的引用，因为这是不必要的依赖
export const options1 = {
  title: {
    text: 'ECharts 入门示例'
  },
  tooltip: {},
  legend: {
    data: ['销量', '销量2']
  },
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
  },
  yAxis: {},
  series: [{
    name: '销量',
    type: 'line',
    color: '#089CFF',
    lineStyle: {
      width: 4
    },
    data: [80, 140, 36, 10, 130, 220]
  },
  {
    name: '销量2',
    type: 'line',
    color: '#FFAC54',
    lineStyle: {
      width: 4
    },
    data: [51, 202, 326, 120, 10, 20]
  }],
  grid: {
    left: '35px',
    right: '35px',
    bottom: '35px'
  }
}
