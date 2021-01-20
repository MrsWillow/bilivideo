<template>
  <div class="img-goods">
    <image-goods-item v-for="(item,index) in goods" :key="index"
                      :goods-item="item"/>
  </div>
</template>

<script>
  import Scroll from "components/common/scroll/Scroll";
  import ImageGoodsItem from "./ImageGoodsItem";
  import { itemListenerMixin } from "common/mixin";
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
  }
</script>

<style scoped>
  .img-goods {
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    overflow: hidden;
    padding: 2px;
  }

</style>
