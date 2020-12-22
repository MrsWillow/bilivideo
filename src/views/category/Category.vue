<template>
  <div class="wrapper" ref="aaaa">
 <!--  wrapper 下只能有一个大的标签  -->
    <div>
      <div>分类</div>
      <ul class="content">
        <li v-for="item in 100">{{ item }}</li>
      </ul>
    </div>
  </div>

</template>

<script>
  import BScroll from '@better-scroll/core'
  import PullUp from '@better-scroll/pull-up'
  BScroll.use(PullUp)
  export default {
    name: "Category",
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      //   默认情况BScroll不可以实时监听滚动位置
      //   prob侦测  probeType: 0,1 不侦测   2,手指滚动过程中侦测,手指离开后的惯性
      // 过程中不侦测    3, 只要滚动都侦测
      const scroll = new BScroll(this.$refs.aaaa, {
        probeType: 3,
        click: true,   // 滚动部分click为true才能监听点击事件
        pullUpLoad: true
      });
      this.scroll = scroll
      //  监听位置
      scroll.on('scroll',(position) => {
        // console.log(position);
      })
      scroll.on('pullingUP',() => {

      })
    }
  }
</script>

<style scoped>
  .wrapper {
    height: 150px;
    background-color: red;
    overflow: hidden;
  }
</style>
