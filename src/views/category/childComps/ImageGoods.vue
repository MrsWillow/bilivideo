<template>
  <div class="img-goods">
    <scroll class="content" ref="scroll">
      <div v-for="(item,index) in goods" :key="index">
        <image-goods-item :goods-item="item"/>
      </div>
    </scroll>
  </div>
</template>

<script>
  import Scroll from "components/common/scroll/Scroll";
  import ImageGoodsItem from "./ImageGoodsItem";
  export default {
    name: "ImageGoods",
    components: {
      ImageGoodsItem,
      Scroll
    },
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    },
    activated() {
      this.$refs.scroll.refresh()
    },
  }
</script>

<style scoped>
  .img-goods {
    width: 70%;
    height: calc(100% - 93px);
    background-color: rgba(85, 60, 60, 0.24);
    float: right;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    padding: 2px;
  }
  .content {
    height: 100%;
    overflow: hidden;
  }
</style>
