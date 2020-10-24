<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item> </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
    export default {
        data(){
            return {
                activeList: []
            }
        },
        methods(){

        },
        watch(){

        },
        methods:{
            //获取面包屑
             getBreadcrumb(route) {
                 this.activeList = [];
                 this.activeList.push(this.$store.state.breadList[0]);
                 let breadList = this.$store.state.breadList;
                 if(route !== "home"){
                     if(breadList[breadList.length - 1] !== "home"){
                         this.activeList.push(breadList[breadList.length-1])
                     }
                 }else{
                     this.$store.commit("SET_BREAD", this.activeList)
                 }
             }
                
        }
    }
</script>

<style lang="less" scoped>
.breadcrumb {
  float: left;
  margin-left: 10px;
}
.el-breadcrumb {
  line-height: 44px;
}
</style>