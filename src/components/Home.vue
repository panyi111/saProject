<!--  -->
<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <div>
        <!-- <img src="../assets/SA.png" alt="" class="picture"> -->
        <h3>软件协会后台管理系统</h3>
      </div>
    </el-header>
    <el-container>
      <!-- 左侧导航栏 -->
      <el-aside width="200px" router>
         <el-menu
      background-color="#333f4f"
      text-color="#fff"
      active-text-color="#ffd04b">
      
        <!-- -------------------- -->
        <el-menu-item index="1" router>
        <i class="el-icon-user"></i>
        <span slot="title">用户信息</span>
      </el-menu-item>
        <!-- ------------------ -->
      <el-menu-item index="2" router>
        <i class="el-icon-menu"></i>
        <span slot="title">学习小组</span>
      </el-menu-item>
      <el-menu-item index="3" router>
        <i class="el-icon-document"></i>
        <span slot="title">图书管理</span>
      </el-menu-item>
      <el-menu-item index="4" router>
        <i class="el-icon-setting"></i>
        <span slot="title">活动管理</span>
      </el-menu-item>
    </el-menu>
      </el-aside>
      <!-- 右侧主体内容 -->
      <el-main></el-main>
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

.el-header {
  width: 100%;
  background-color: #497da4;
  display: flex;
  justify-content: space-between;
  /* padding-left: 0; */
  align-items: center;
  color: #fff;
}
.el-aside {
  height: 100%;
  background-color: #333f4f;
}
.el-main {
  background-color: #eaedf1;
}
.home-container {
  height: 100vh;
}
.picture {
  height: 70px
}
</style>