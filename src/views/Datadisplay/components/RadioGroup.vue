<template>
  <el-radio-group v-model="selectedValue" :size="size" @change="handleChange">
    <el-radio-button
      v-for="(option, index) in options"
      :key="index"
      :label="option.value"
    >
      {{ option.label }}
    </el-radio-button>
  </el-radio-group>
</template>
  
  <script>
export default {
  name: "RadioGroup",
  props: {
    value: {
      type: String,
      default: "",
    },
    options: {
      type: Array,
      default: () => [],
    },
    size: {
      type: String,
      default: "small",
    },
  },
  data() {
    return {
      selectedValue: this.value,
    };
  },
  watch: {
    value(newValue) {
      this.selectedValue = newValue;
    },
  },
  methods: {
    handleChange(value) {
      this.selectedValue = value;
      this.$emit("input", value);
      this.$emit("change", value);
    },
  },
};
</script>
  