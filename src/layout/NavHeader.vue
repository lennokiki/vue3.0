<template>
    <el-header>
      <div class="nav-logo" @click="handleSelect('dashboard')">
        <img :src="logo" />
      </div>
      <div class="nav-menu">
        <el-menu
          :default-active="activeMenu"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
            <template v-for="(item, index) in filterRoutes">
              <el-menu-item v-if="!item.children || (item.children && !item.children.length)" :key="index" :index="item.name">
                <!-- <i class="el-icon-s-grid"></i> -->
                <span>{{ item.meta.title }}</span>
              </el-menu-item>
              <el-submenu v-else :key="index" :index="item.name">
                <template slot="title">{{ item.meta.title }}</template>
                <template v-for="(sub, subIndex) in item.children">
                  <el-menu-item  :key="'sub' + subIndex" :index="sub.name">
                    <i :class="sub.meta.icon" :style="{color: '#fff'}"></i>
                    <span>{{ sub.meta.title }}</span>
                  </el-menu-item>
                </template>
              </el-submenu>
            </template>
        </el-menu>
      </div>
      <div class="nav-setting">
        <!-- <i class="el-icon-lock"></i> -->
      </div>
    </el-header>
</template>

<script>
import './NavHeaderFormat.scss';
export default {
  name: 'NavHeader',
  computed: {
    filterRoutes() {
      return this.$store.getters.permission_routes.filter((item) => !item.hidden)
    },
  },
  data() {
    return {
      logo: require("@/assets/images/logo.png"),
      activeMenu: null,
    }
  },
  created() {
    this.renderCurActive();
    // this.handleChangeBread(this.$route.name);
  },
  methods: {
    renderCurActive() {
      this.activeMenu = this.$route.name;
    },
    handleSelect(name) {
      this.$router.push({ name })
      this.handleChangeBread(name);
    },
    handleChangeBread(name) {
      let breadList = [];
      if (name !== 'dashboard') {
        const routes = this.$store.getters.permission_routes;
        out: for (let i = 0; i < routes.length; i++) {
          if (routes[i]['children']) {
            for (let j = 0; j < routes[i]['children'].length; j++) {
              if (routes[i]['children'][j]['name'] === name) {
                const par = {title: routes[i]['meta']['title'], name: routes[i]['name']};
                const sub = {title: routes[i]['children'][j]['meta']['title'], name};
                breadList = [].concat(par, sub)
                break out;
              }
            }
          }
        }
      }
      this.$store.dispatch('app/changeBreadcrumbList', breadList);
    }
  },
  watch: {
    $route () {
      this.renderCurActive();
    }
  },
}
</script>

<style lang="scss" scoped>
  .el-header {
    width: 100%;
    background-color: #545c64;
    height: 60px;
    display: flex;
    align-items: center;
    .nav-logo {
      width: 200px;
      flex: none;
      cursor: pointer;
      // background: #ccc;
    }
    .nav-menu {
      height: 60px;
      flex: 1;
    }
    .nav-setting {
      flex: none;
      width: 100px;
      display: flex;
      align-items: center;
      color: #fff;
      font-size: 20px;
      & > i {
        cursor: pointer;
      }
    }
  }

</style>
