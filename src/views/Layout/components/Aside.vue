<template>
  <div class="aside">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="onRoutes"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
        @select="select"
        active-text-color="#bdb7ff"
        router
      >
        <template v-for="(item, index) in items" v-key="index">
          <template v-if="item.subs">
            <el-submenu :index="item.index" :key="item.index">
              <template slot="title">
                <i :class="item.icon"></i>
                <span>{{ item.title }}</span>
              </template>

              <template v-for="(subsItem, index) in item.subs" v-key="index">
                <el-submenu
                  v-if="subsItem.subs"
                  :index="subsItem.index"
                  :key="subsItem.index"
                >
                  <template slot="title">
                    <i :class="subsItem.icon"></i>
                    <span>{{ subsItem.title }}</span>
                  </template>
                  <el-menu-item
                    v-for="(threeItem, i) in subsItem.subs"
                    :index="threeItem.index"
                    :key="i"
                    >{{ threeItem.title }}</el-menu-item
                  >
                </el-submenu>

                <el-menu-item
                  v-else
                  :index="subsItem.index"
                  :key="subsItem.index"
                >
                  {{ subsItem.title }}
                </el-menu-item>
              </template>
            </el-submenu>
          </template>

          <template v-else>
            <el-menu-item :index="item.index" :key="item.index">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </el-menu-item>
          </template>
        </template>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { menu } from "./menu";
import { mapState } from "vuex";
export default {
  data() {
    return {
      menu: menu,
    };
  },
  computed: {
    onRoutes() {
      return this.$route.path.replace("/", "");
    },
    ...mapState(["isCollapse", "token"]),
    // 获取对应权限的测导航列表
    items() {
      let items = this.filterMenus(menu, this.$store.state.roles);
      return items;
    },
  },
  mounted() {
    console.log(this.token);
  },

  methods: {
    handleOpen() {
      //   console.log(index);
      //   console.log(indexpath);
    },
    handleClose() {
      //   console.log(index);
      //   console.log(indexpath);
    },
    /**
     * 通过meta.role判断是否与当前用户权限匹配
     * @param roles
     * @param menu
     */
    hasPermission(roles, menu) {
      if (menu.meta && menu.meta.roles) {
        return roles.some((role) => menu.meta.roles.includes(role));
      } else {
        return true;
      }
    },

    /**
     * @param {Arrary} menus 菜单
     * @param {Arrary} roles 角色
     * @return {Arrary} res 过滤后的菜单
     */
    filterMenus(menus, roles) {
      const res = [];
      menus.forEach((route) => {
        const tmp = { ...route };
        if (this.hasPermission(roles, tmp)) {
          if (tmp.subs) {
            tmp.subs = this.filterMenus(tmp.subs, roles);
          }
          res.push(tmp);
        }
      });
      
      return res;
    },
    select(index, indexPath) {
      console.log(index);
      console.log(indexPath);
      if (indexPath.indexOf("home") > -1) return;
      if (index !== null) {
        let breadList = ["home"];
        breadList.push(...indexPath);
        console.log(breadList);
        this.$store.commit("SET_BREAD", breadList);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.aside {
  -webkit-transition: width 0.28s;
  transition: width 0.28s;
  height: 100%;
  position: fixed;
  font-size: 0px;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 180px;
    height: 100vh;
    text-align: left;
  }
  .el-menu--collapse {
    height: 100%;
  }
}
</style>