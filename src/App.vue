<template>
  <div id="app">
<!--    <router-link to="/home" tag="button">首页</router-link>-->
    <button @click="btnClick">首页</button>
    <router-link to="/about" tag="button">关于</router-link>
    <router-link :to="'/user/' + userName" tag="button">用户</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      userName: 'pig'
    }
  },
  methods: {
    btnClick() {
      this.$router.push('/home')
    }
  }
}
</script>

<style>
  .active {
    color: red;
  }
</style>
