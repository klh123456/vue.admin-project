<template>
  <div class="wapper">
    <Aside></Aside>
    <div
      class="main-container"
      :class="isCollapse == true ? 'container_collapse' : ''"
    >
      <Header />
    </div>
  </div>
</template>

<script>
import Aside from "./components/Aside";
import Header from "./components/Header";
import { mapState } from "vuex";
export default {
  components: {
    Aside,
    Header,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["isCollapse"]),
  },
};
</script>

<style lang="less" scoped>
.wapper {
  width: 100vw;
  height: 100vh;
  position: relative;
  .main-container {
    min-height: 100%;
    -webkit-transition: margin-left 0.28s;
    transition: margin-left 0.28s;
    margin-left: 180px;
    position: relative;
  }
  .container_collapse {
    margin-left: 64px;
  }
}
</style>