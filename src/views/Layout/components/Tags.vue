<template>
  <div class="tags">
    <ul>
      <li
        class="tags-li"
        v-for="(item, index) in tagsList"
        :key="index"
        :class="{ active: isActive(item.path) }"
      >
        <router-link :to="item.path" class="tags-li-title">{{
          item.title
        }}</router-link>
        <span class="tags-li-icon" @click="closeTags(index, item.path)">
          <i class="el-icon-close"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { messages } from '../../../assets/js/common'
export default {
  created() {
    //判断标签里面是否有值 有的话直接加载
    if (this.tagsList.length == 0) {
      this.setTags(this.$route);
    }
  },
  computed: {
    //computed 方法里面没有set方法因此不能使用mapState,需要重新定义set方法
    tagsList: {
      get() {
        return this.$store.state.tagsList;
      },
      set(newValue) {
        this.$store.commit("TAGES_LIST", newValue);
      },
    },
  },
  watch: {
    //监听路由变化
    $route(newvalue, oldValue) {
      oldValue;
      this.setTags(newvalue);
    },
  },
  methods: {
    // 判断类的添加
    isActive(path) {
      return path === this.$route.fullPath;
    },
    // 添加标签
    setTags(route) {
      let isIn = this.tagsList.some((item) => {
        //判断标签是否存在
        return item.path === route.fullPath;
      });
      // 不存在
      if (!isIn) {
        this.tagsList.push({
          title: route.meta.title,
          path: route.fullPath,
          name: route.name,
        });
        // 存在vuex
        this.$store.commit("TAGES_LIST", this.tagsList);
      }
    },
    // 关闭标签
    closeTags(index, path) {
      if(this.tagsList.length == 1){
        messages("warning","不可全部关闭")
      }else{
        // 删除当前
        let tag = this.tagsList.splice(index,1);
        tag;
        // 重新赋值
        this.$store.commit("TAGES_LIST", this.tagsList);
      }
      ////如果关闭当前直接跳到下一个
      if(path == this.$route.fullPath){
        this.$router.push(
          this.$store.state.tagsList[this.$store.state.tagsList.length - 1]
        )
      }
    },

  },
};
</script>

<style lang="less" scoped>
.tags {
  position: relative;
  height: 30px;
  overflow: hidden;
  background-color: #fff;
  padding-right: 100px;
  box-shadow: 0 5px 10px #ddd;
  z-index: 10;
}
.tags ul {
  width: 100%;
  height: 100%;
}
.tags-li {
  float: left;
  margin: 3px 5px 2px 3px;
  border-radius: 3px;
  font-size: 12px;
  overflow: hidden;
  cursor: pointer;
  height: 23px;
  line-height: 23px;
  border: 1px solid #e9eaec;
  background: white;
  padding: 0 5px 0 12px;
  vertical-align: middle;
  color: #000;
  transition: all 0.3s ease-in;
}
.tags-li:not(.active):hover {
  background: #999;
  color: #000;
}
.tags-li.active {
  color: white;
  background-color: blue;
}
.tags-li-title {
  float: left;
  max-width: 80px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-right: 5px;

}
.tags-li.active .tags-li-title {
  color:white;
}
</style>