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
        <template v-for="(item,index) in menu" v-key="index">
            
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
    ...mapState(["isCollapse"]),
  },
  mounted() {},
  methods: {
    handleOpen() {
      //   console.log(index);
      //   console.log(indexpath);
    },
    handleClose() {
    //   console.log(index);
    //   console.log(indexpath);
    },
    select() {
    //   console.log(index);
    //   console.log(indexpath);
    },
  },
};
</script>

<style>
</style>