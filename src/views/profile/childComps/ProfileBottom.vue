<template>
   <div class="profile-bottom">
     <div class="bottom-item">
      <img src="~assets/img/profile/message.svg">
       <span>我的消息</span>
     </div>
     <div class="bottom-item">
       <img src="~assets/img/profile/cart.svg">
       <span>我的购物车</span>
     </div>
     <div class="bottom-item">
       <img src="~assets/img/profile/pointer.svg">
       <span>积分商城</span>
     </div>
     <div class="bottom-item">
       <img src="~assets/img/profile/vip.svg">
       <span>关于</span>
     </div>
   </div>
</template>

<script>
  export default {
    name: "ProfileBottom",
  }
</script>

<style scoped>
  .profile-bottom {
    padding: 0 10px;
  }
  .bottom-item {
    padding: 0 20px;
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid rgba(199,194,194,.6);
  }
  .bottom-item img {
    width: 20px;
    height: 40px;
    vertical-align: middle;
  }
  .bottom-item span {
    font-size: 15px;
    margin-left: 5px;
  }
</style>
