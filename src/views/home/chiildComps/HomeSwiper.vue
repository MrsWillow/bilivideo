<template>
  <swiper>
    <swiper-item v-for="(item,index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  //   有了 components/common/swiper/index  就可以同时导入这两个组件
  import { Swiper, SwiperItem } from "components/common/swiper";
  export default {
    name: "HomeSwiper",
    // 父组件中通过v-bind定义一个动态值，子组件通过Prop接收该值
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>

</style>
