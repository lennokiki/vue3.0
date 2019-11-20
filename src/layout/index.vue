<template>
  <el-container>
    <nav-header></nav-header>
    <el-main>
      <transition name="fade-transform" mode="out-in">
        <router-view />
      </transition>
    </el-main>
  </el-container>
</template>

<script>
import NavHeader from './NavHeader';

export default {
  name: 'layout',
  data() {
    return {

    }
  },
  components: {
    NavHeader,
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  .el-container {
    height: 100%;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>
