<template>
  <div class="img-goods-item">
    <img v-lazy="goodsItem.image" @load="imgLoad"/>
    <p>{{ goodsItem.title }}</p>
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
    },
    methods: {
      imgLoad() {
        this.$bus.$emit('itemImageLoad')
      },
    }
  }
</script>

<style scoped>
  .img-goods-item {
    padding-bottom: 20px;
    position: relative;
    width: 30%;
    /*height: 100px;*/
    /*margin-bottom: 10px;*/
  }
  .img-goods-item img{
    width: 100%;
    text-align: center;
  }
  .img-goods-item p{
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
</style>
