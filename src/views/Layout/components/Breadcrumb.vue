<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <template v-for="(item,index) in $store.state.breadList">
        <el-breadcrumb-item
        :to="activeList.indexOf(item)== -1?'':{ path:'/'+item}"
        :key="index"
        >
          {{china[item]}}
        </el-breadcrumb-item>
      </template>
      
    </el-breadcrumb>
  </div>
</template>

<script>
import zh from '../../../lang/zh'
    export default {
        data(){
            return {
                activeList: [],
                china:zh.route
            }
        },
        mounted(){
          this.getBreadcrumb()
        },
        watch:{
          $route(n,o){
            //获取即将进入的路由
            console.log(n);
            console.log(o);
            let route = n.fullPath.replace("/","")
            this.getBreadcrumb(route)
          }
        },
        methods:{
            //获取面包屑
             getBreadcrumb(route) {
                 this.activeList = [];
                 
      //activeList取出vuex面包屑的第一项和最后一项，由于中间无论多少项都是不可点击的，所以拿出来和面包屑导航进行比较
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