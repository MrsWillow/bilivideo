<template>
  <div class="wallet">
    <div class="wallet-item">
      <p><span>0.0</span>元</p>
      <p>我的余额</p>
    </div>
    <div class="wallet-item">
      <p><span>0.0</span>个</p>
      <p>我的优惠</p>
    </div>
    <div class="wallet-item">
      <p><span>0.0</span>分</p>
      <p>我的积分</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProfileWallet"
  }
</script>

<style scoped>
  .wallet {
    display: flex;
    text-align: center;
    justify-content: center;
    font-size: 14px;
    border-bottom: 3.2vw solid rgba(199,194,194,.08);
  }
  .wallet-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 33.33%;
    height: 60px;
    border-right: 1px solid rgba(199,194,194,.6);
  }
  .wallet-item span {
    color: var(--color-tint);
    font-size: 20px;
    font-weight: 500;
    padding: 0 5px 0 5px;
  }
</style>
