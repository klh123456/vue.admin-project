<template>
  <div class="box">
    <el-form label-width="80px" :inline="true">
      <el-form-item label="活动名称">
        <el-input type="text"></el-input>
      </el-form-item>
      <el-form-item label="活动名称">
        <el-input type="text"></el-input>
      </el-form-item>
    </el-form>
    <el-divider></el-divider>
    <vue-good-table :columns="column" :rows="rows" :select-options="{ enabled: true , disableSelectInfo: true, } " :search-options="{ enabled: true ,placeholder: '搜索数据',}"> </vue-good-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      column: [
        {
          label: "名字",
          field: "name",
        },
        {
          label: "性别",
          field: "sex",
        },
        {
          label: "年龄",
          field: "age",
          type: "number",
        },
      ],
      rows: [
        { id: 1, name: "张三", age: 23, sex: "男" },
        { id: 1, name: "张三", age: 22, sex: "男" },
        { id: 1, name: "张三", age: 21, sex: "男" },
        { id: 1, name: "张三", age: 18, sex: "男" },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.box {
  padding: 30px;
  box-sizing: border-box;
}
</style>