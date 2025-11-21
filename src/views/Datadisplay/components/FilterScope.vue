<template>
  <el-radio-group v-model="localValue" :size="size" @change="onChange">
    <el-radio-button
      v-for="option in options"
      :key="option.label"
      :label="option.label"
    >
      {{ option.text }}
    </el-radio-button>
  </el-radio-group>
</template>
  
  <script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: "small",
    },
    options: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      localValue: this.value,
    };
  },
  watch: {
    value(newValue) {
      this.localValue = newValue;
    },
    localValue(newValue) {
      this.$emit("input", newValue);
    },
  },
  methods: {
    onChange(value) {
      this.$emit("change", value);
    },
  },
};
</script>