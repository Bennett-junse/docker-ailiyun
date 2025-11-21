<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      active-text-color="#3582fb"
      text-color="#182b50"
      @select="handleSelect"
    >
      <el-menu-item index="1" style="font-size: 16px; font-weight: 700"
        >交付总览</el-menu-item
      >
      <el-menu-item index="2" style="font-size: 16px; font-weight: 700"
        >分析大盘</el-menu-item
      >
      <el-menu-item  v-permission="['admin','editor']" index="3" style="font-size: 16px; font-weight: 700"
        >数据总览</el-menu-item
      >
    </el-menu>
    <div v-if="this.activeIndex === '1'">
      <delivery />
    </div>
    <div v-if="this.activeIndex === '2'">
      <analyze />
    </div>
    <div v-if="this.activeIndex === '3'">
      <dataPreview />
    </div>
  </div>
</template>
<script>
import delivery from "./delivery.vue";
import analyze from "./analyze.vue";
import dataPreview from "./dataPreview.vue";
import permission from '@/directive/permission/index.js' // 权限判断指令
export default {
  directives: { permission },
  name: "Add_information",
  data() {
    return {
      activeIndex: "1",
    };
  },

  components: {
    delivery,
    analyze,
    dataPreview,
  },
  methods: {
    handleSelect(key) {
      this.activeIndex = key;
    },
  },
};
</script>
