<template>
  <div class="head-container clearfix">
    <!-- 左边 -->
    <div class="head-left">
      <showAside :toggle-click="toggleClick"></showAside>
      <bread-crunb></bread-crunb>
    </div>
    <!-- 右边 -->
    <div class="head-right">
      <div class="header-use-con">
        <!-- 全屏显示 -->
        <div class="btn-fullscreen" @click="handlefullscreen">
          <el-tooltip effect="dark" content="全屏" placement="bottom">
            <i class="el-icon-rank"></i>
          </el-tooltip>
        </div>
        <!-- 消息提示 -->
        <div class="btn-bell">
          <el-tooltip effect="dark" content="消息" placement="bottom">
            <router-link to="/tabs">
              <i class="el-icon-bell"></i>
            </router-link>
          </el-tooltip>
          <span class="btn-bell-badge" v-if="message"></span>
        </div>
        <!-- 用户名下拉 -->
        <el-dropdown click="avatar-container" trigger="click">
          <div class="avatar-wrapper">
            <img
              src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3266090804,66355162&fm=26&gp=0.jpg"
              class="user-avatar"
            />
            {{ username }}<i class="el-icon-caret-bottom" />
            <el-dropdown-menu slot="dropdown">
              <router-link class="inlineBlock" to="/home">
                <el-dropdown-item>首页</el-dropdown-item>
              </router-link>
              <el-dropdown-item>个人设置</el-dropdown-item>
              <el-dropdown-item divided>
                <span style="display: block" @click="logout">退出登录</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </div>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import showAside from "./showAside";
import BreadCrunb from "./Breadcrumb";
export default {
  components: {
    showAside,
    BreadCrunb,
  },
  data() {
    return {
      message: 2,
      username: "王二狗",
      fullscreen: false,
    };
  },
  computed: {
    isCollapse: {
      get: function () {
        return this.$store.state.isCollapse;
      },
      set: function (newValue) {
        this.$store.commit("IS_COLLAPSE", newValue);
      },
    },
  },
  methods: {
    toggleClick() {
      this.isCollapse = !this.isCollapse;
    },
    // 全屏显示
    handlefullscreen() {
      let element = document.documentElement;
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen();
        }
      }
      this.fullscreen = !this.fullscreen;
    },
    // 退出登录
    logout(){
      this.$store.commit('TAGES_LIST',[])
      this.$store.commit('SET_BREAD',['home'])
      this.$router.push("/login");

    }
  },
};
</script>

<style lang="less" scoped>
.head-container {
  height: 50px;
  line-height: 50px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
  border-bottom: 1px solid #f0f0f0;
  .head-left {
    float: left;
  }
  .head-right {
    float: right;
    padding-right: 50px;
  }
}
.header-use-con {
  display: flex;
  height: 50px;
  align-items: center;
}
.btn-fullscreen {
  transform: rotate(45deg);
  margin-right: 5px;
  font-size: 24px;
  cursor: pointer;
  width: 30px;
  height: 30px;
}
.btn-bell {
  width: 30px;
  height: 30px;
  position: relative;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  margin-right: 20px;
  margin-bottom: 10px;
}
.btn-bell-badge {
  position: absolute;
  right: 0;
  top: 8px;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: #f56c6c;
}
.btn-bell .el-icon-bell {
  color: #666;
}
.avatar-wrapper{
  width: 100px;
}
.avatar-wrapper img{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  vertical-align:bottom
}
.avatar-container {
  height: 50px;
  display: inline-block;
  .avatar-wapper {
    cursor: pointer;
    margin-top: 5px;
    position: relative;
    line-height: initial;
    .user-avatar {
      width: 40px;
      height: 40px;
      border-radius: 10px;
    }
    .el-icon-caret-bottom {
      position: absolute;
      right: -20px;
      top: 25px;
      font-size: 12px;
    }
  }
}
</style>