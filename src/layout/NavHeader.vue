<template>
    <el-header>
      <div class="nav-logo"></div>
      <div class="nav-menu">
        <el-menu
          :default-active="activeMenu"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
            <el-submenu v-for="(item, key) in permission_routes" :key="key" :index="item.name">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{ item.title }}</span>
              </template>
              <template v-if="item.chirdren !== null">
                <el-menu-item
                  v-for="(item2, index2) in item.chirdren"
                  :key="index2 + 'sub'"
                  :index="item2.name"
                >
                  <i class="el-icon-s-grid"></i>
                  <span>{{ item2.title }}</span>
                </el-menu-item>
              </template>
            </el-submenu>
        </el-menu>
      </div>
      <div class="nav-setting">
        222
      </div>
    </el-header>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'a1',
  computed: {
    ...mapGetters([
      'permission_routes',
    ]),
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  .el-header {
    background-color: #B3C0D1;
    height: 60px;
    display: flex;
    align-items: center;
    .nav-logo {
      width: 150px;
      flex: none;
      background: #ccc;
    }
    .nav-setting {
      flex: none;
      width: 100px;
      display: flex;
      align-items: center;
    }
  }

</style>
