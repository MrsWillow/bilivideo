<template>
  <div id="app">
<!--    <router-link to="/home" tag="button">首页</router-link>-->
<!--    <router-link to="/about" tag="button">关于</router-link>-->
<!--    <router-link :to="'/user/' + userName" tag="button">用户</router-link>-->
<!--    <router-link :to="{ path: '/profile',query: { name: 'pig',age: 15 } }" tag="button">档案</router-link>-->
<!--&lt;!&ndash;  缓存不包括 Profile (vue 文件 script 中 name, 多个可使用逗号分隔，但逗号后不要加空格)  &ndash;&gt;-->
<!--    <keep-alive exclude="Profile">-->
<!--      <router-view/>-->
<!--    </keep-alive>-->
      <main-tab-bar/>
      <router-view/>

  </div>
</template>

<script>

import MainTabBar from "./components/TabBar/MainTabBar";
export default {
  name: 'App',
    components: {MainTabBar},
    data() {
    return {

    }
  }
}
</script>

<style>
  @import "./assets/css/base.css";
  .active {
    color: red;
  }
</style>
