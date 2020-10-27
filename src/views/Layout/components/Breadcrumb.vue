<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <template v-for="(item,index) in $store.state.breadList">
        <el-breadcrumb-item
        :to="activeList.indexOf(item)== -1?'':{ path:'/'+item}"
        :key="index"
        >
          {{item}}
        </el-breadcrumb-item>
      </template>
      
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
        mounted(){
          this.getBreadcrumb()
        },
        watch:{
          $route(n,o){
            //获取即将进入的路由
            console.log(n,o);
            let route = n.fullPath.replace("/","")
            this.getBreadcrumb(route)
          }
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