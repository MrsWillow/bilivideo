<template>
  <div class="img-goods-item">
    <img v-lazy="goodsItem.image"/>
    <span>{{ goodsItem.title }}</span>
  </div>
</template>

<script>
  export default {
    name: "ImageGoodsItem",
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .img-goods-item {
    padding-bottom: 20px;
    position: relative;
    width: 100px;
    background-color: rgba(236, 121, 15, 0.15);
    margin-bottom: 10px;
  }
  .img-goods-item img{
    width: 95%;
    text-align: center;
  }
  .img-goods-item span{
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
</style>
