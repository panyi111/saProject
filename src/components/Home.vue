<!--  -->
<template>
  <el-container>
    <!-- 头部区域 -->
    <el-header>Header</el-header>
    <!-- 页面主体区 -->
    <el-container>
      <!-- 左边导航栏 -->
      <el-aside width="200px">Aside</el-aside>
      <!-- 右侧内容 -->
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>