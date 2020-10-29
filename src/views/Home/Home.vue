<template>
  <div class="home">
    <el-row :gutter="40">
      <el-col :lg="6" :sm="12">
        <div class="grid-content bg-white">
          <el-row>
            <el-col :span="12">
              <div class="grid-content">
                <div class="icons">
                  <i class="iconfont el-icon-user"></i>
                </div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content">
                <ul class="icons-right">
                  <li class="chain">用户</li>
                  <li>
                    <countTo
                      :startVal="0"
                      :endVal="68542"
                      :duration="3000"
                    ></countTo>
                  </li>
                </ul>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>

      <el-col :lg="6" :sm="12">
        <div class="grid-content bg-white">
          <el-row>
            <el-col :span="12">
              <div class="grid-content">
                <div class="icons">
                  <i class="iconfont el-icon-user"></i>
                </div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content">
                <ul class="icons-right">
                  <li class="chain">用户</li>
                  <li>
                    <countTo
                      :startVal="0"
                      :endVal="68542"
                      :duration="3000"
                    ></countTo>
                  </li>
                </ul>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>

      <el-col :lg="6" :sm="12">
        <div class="grid-content bg-white">
          <el-row>
            <el-col :span="12">
              <div class="grid-content">
                <div class="icons">
                  <i class="iconfont el-icon-user"></i>
                </div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content">
                <ul class="icons-right">
                  <li class="chain">用户</li>
                  <li>
                    <countTo
                      :startVal="0"
                      :endVal="68542"
                      :duration="3000"
                    ></countTo>
                  </li>
                </ul>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>

      <el-col :lg="6" :sm="12">
        <div class="grid-content bg-white">
          <el-row>
            <el-col :span="12">
              <div class="grid-content">
                <div class="icons">
                  <i class="iconfont el-icon-user"></i>
                </div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content">
                <ul class="icons-right">
                  <li class="chain">用户</li>
                  <li>
                    <countTo
                      :startVal="0"
                      :endVal="68542"
                      :duration="3000"
                    ></countTo>
                  </li>
                </ul>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import countTo from "vue-count-to";
export default {
  components: {
    countTo,
  },
};
</script>

<style lang="less" scoped>
.home {
  padding: 40px;
  box-sizing: border-box;
  background-color: rgb(236, 234, 234);
}
.bg-white {
  background-color: white;
  box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
  margin-bottom: 20px;
  cursor: pointer;
  border-color: rgba(0, 0, 0, 0.05);
  .icons {
    text-align: left;
    width: 86px;
    height: 86px;
    margin: 10px;
    padding: 13px;
    box-sizing: border-box;
    transition: 0.3s ease-in-out;
    border-radius: 3px;
    text-align: center;
    line-height: 86px;
    &:hover {
      background-color: blue;
      .el-icon-user {
        color: white;
      }
    }
    .iconfont {
      font: 60px;
    }
    .el-icon-user {
      display: block;
      font-size: 60px;
      color: blue;
    }
  }
  .icons-right {
    font-size: 24px;
    margin-top: 16px;
    margin-right: 16px;
    li {
      height: 50%;
      margin: 10px 0;
    }
  }
  .chain {
    color: rgba(0, 0, 0, 0.45);
    font-size: 18px;
  }
}
</style>