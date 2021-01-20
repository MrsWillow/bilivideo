<template>
  <div class="top">
    <div class="top-left">
      <img src="~assets/img/profile/avatar.svg"/>
    </div>
    <div class="top-center">
      <p style="margin: 4px 0">登录/注册</p>
      <p>暂未绑定手机号</p>
    </div>
    <div class="top-right">
      <img src="~assets/img/common/arrow-left.svg"/>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ProfileTop"
    }
</script>

<style scoped>
  .top {
    width: 100%;
    height: 120px;
    background-color: var(--color-tint);
    border-top: 1px solid rgba(199,194,194,.4);
    display: flex;
    text-align: center;
    align-items: center;
    color: white;
  }
  .top-left {
    width: 120px;
  }
  .top-left img {
    width: 75px;
    height:75px;
  }
  .top .top-center {
    width: 100px;
    font-size: 13px;
    display: flex;
    flex-wrap: wrap;
  }
  .top-right img{
    width: 30px;
    height: 30px;
    margin-left: 100px;
  }
</style>
