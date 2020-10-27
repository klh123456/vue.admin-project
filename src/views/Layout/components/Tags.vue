<template>
  <div class="tags">
    <scroll-pane wrap-class="scrollbar-wrapper">
      <ul>
        <li
          class="tags-li"
          v-for="(item, index) in tagsList"
          :key="index"
          :class="{ active: isActive(item.path) }"
        >
          <router-link :to="item.path" class="tags-li-title">{{
            $t("route." + item.title)
          }}</router-link>
          <span class="tags-li-icon" @click="closeTags(index, item.path)">
            <i class="el-icon-close"></i>
          </span>
        </li>
      </ul>
    </scroll-pane>
  </div>
</template>

<script>
// import { messages } from '../../../assets/js/common'
export default {

};
</script>

<style lang="less" scoped>
</style>