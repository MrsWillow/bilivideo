<template>
  <div id="app">
<!--    缓存不包括 Detail (vue 文件 script 中 name, 多个可使用逗号分隔，但逗号后不要加空格)-->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    <main-tab-bar/>
  </div>
</template>

<script>

import MainTabBar from "components/content/mainTabbar/MainTabBar";
export default {
  name: 'App',
    components: {MainTabBar},
}
</script>

<style>
  @import "assets/css/base.css";
</style>
