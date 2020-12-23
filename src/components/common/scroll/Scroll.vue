<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from '@better-scroll/core'
  import PullUp from '@better-scroll/pull-up'
  BScroll.use(PullUp)

  export default {
    name: "Scroll",
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      //   默认情况BScroll不可以实时监听滚动位置
      //   prob侦测  probeType: 0,1 不侦测   2,手指滚动过程中侦测,手指离开后的惯性
      // 过程中不侦测    3, 只要滚动都侦测
      const scroll = new BScroll(this.$refs.wrapper, {
        probeType: 3,
        click: true,   // 滚动部分click为true才能监听点击事件
        pullUpLoad: true
      });
      this.scroll = scroll
      //  监听位置
      scroll.on('scroll',(position) => {
        // console.log(position);
      })
      scroll.on('pullingUp',() => {
        console.log('上拉加载');
        setTimeout(() => {
          scroll.finishPullUp()
        },200)
      })
    },
  }
</script>

<style scoped>

</style>
