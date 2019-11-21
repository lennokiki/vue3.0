<template>
  <el-container>
    <nav-header></nav-header>
    <el-main>
      <nav-breadcrumb></nav-breadcrumb>
      <!-- <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb> -->
      <transition name="fade-transform" mode="out-in">
        <router-view />
      </transition>
    </el-main>
  </el-container>
</template>

<script>
import NavHeader from './NavHeader';
import NavBreadcrumb from './NavBreadcrumb';
export default {
  name: 'layout',
  data() {
    return {

    }
  },
  components: {
    NavHeader,
    NavBreadcrumb,
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  .el-container {
    height: 100%;
    flex-direction: column;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    box-sizing: border-box;
    flex: 1;
    overflow: hidden;
    overflow-y: auto;
    min-height: 500px;
  }
</style>
