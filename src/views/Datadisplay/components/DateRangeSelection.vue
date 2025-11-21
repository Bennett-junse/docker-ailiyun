<template>
  <el-date-picker
    v-model="localValue"
    type="daterange"
    size="small"
    value-format="yyyy-MM-dd"
    range-separator="至"
    start-placeholder="开始日期"
    end-placeholder="结束日期"
    @change="handleChange"
  />
</template>
  
  <script>
export default {
  props: {
    value: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      localValue: [],
    };
  },
  mounted() {
    this.localValue = this.value;
  },
  methods: {
    handleChange(value) {
      this.localValue = value;
      this.$emit("change", value);
    },
  },
};
</script>