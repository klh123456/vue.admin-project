<template>
  <div class="login-container">
    <vue-particles
      class="bg"
      color="#fff"
      :particlesNumber="80"
      :moveSpeed="1.5"
      :lineOpacity="0.5"
    ></vue-particles>
    <div class="login-form">
      <el-row :gutter="20">
        <el-col :lg="6" :sm="10" class="aa">
          <h3>后台管理系统</h3>
          <el-form
            :model="ruleForm2"
            status-icon
            :rules="rules"
            ref="ruleForm2"
            label-width="100px"
            class="login-ruleForm"
            hide-required-asterisk
          >
            <el-form-item label="用户名" prop="username">
              <el-input v-model="ruleForm2.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input
                type="password"
                autocomplete="off"
                show-password
                v-model="ruleForm2.password"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm2')"
                >登录</el-button
              >
              <el-button @click="resetForm('ruleForm2')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { login } from "../../api/api";
// import axios from 'axios'
export default {
  name: "login",
  data() {
    // 自定义验证规则
    var validatepass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    var validateuser = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        callback();
      }
    };

    return {
      ruleForm2: {
        username: "admin",
        password: "admin",
      },
      rules: {
        password: [{ validator: validatepass, trigger: "blur" }],
        username: [{ validator: validateuser, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      login(this.ruleForm2).then((res) => {
        console.log(res);
        this.$store.commit("COMMIT_TOKEN",res.data.token)
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let roles = [];
            roles.push(this.ruleForm2.username);
            this.$store.commit("COMMIT_ROLE", roles);
            this.$router.push({
              path: "/home",
            });
          } else {
            return false;
          }
        });
      });


    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style >
.el-form-item__label {
  color: white;
}
</style>
<style lang="less" scoped>
.bg {
  position: fixed;
  z-index: -1;
  width: 100%;
  height: 100%;
}

.login-container {
  position: fixed;
  width: 100%;
  height: 100%;
  background: #2d3a4b;
  display: table;
  .login-form {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    color: white;
    font-size: 18px;
    .aa {
      margin: auto;
      float: none;
    }
    h3 {
      line-height: 60px;
      margin-left: 100px;
    }
  }
}
</style>