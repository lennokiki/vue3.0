<template>
  <el-breadcrumb separator-class="el-icon-arrow-right" class="container">
    <el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="index">{{item.title}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
import NavHeader from './NavHeader';
import { mapGetters } from 'vuex'

export default {
  name: 'NavBreadcrumb',
  computed: {
    ...mapGetters([
      'breadcrumbList',
    ])
  },
}
</script>

<style lang="scss" scoped>
  .container {
    & > span {
      line-height: 26px;
      margin-bottom: 10px;
      font-size: 16px;
    }
    & > span:first-child {
      font-weight: 400;
    }
  }
</style>
