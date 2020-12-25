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
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      //   默认情况BScroll不可以实时监听滚动位置
      //   prob侦测  probeType: 0,1 不侦测   2,手指滚动过程中侦测,手指离开后的惯性
      // 过程中不侦测    3, 只要滚动都侦测
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,   // 滚动部分(div)click为true才能监听点击事件,button 都可以点击
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      });
      // 监听滚动位置
      if (this.probeType === 2 || this.probeType === 3) {
        this.scroll.on('scroll',(position) => {
          this.$emit('scroll',position)
          this.scroll.refresh()
        })
      }

      // 监听scroll滚动到底部
      if (this.pullUpLoad) {
        this.scroll.on('pullingUp',() => {
          this.$emit('pullingUp')
        })
      }

    },
    methods: {
      scrollTo(x,y,time) {
        this.scroll && this.scroll.scrollTo(x,y,time)
      },
      finishPullUp() {
        this.scroll && this.scroll.finishPullUp()
      },
      refresh() {
        this.scroll && this.scroll.refresh && this.scroll.refresh()
      }
    }
  }
</script>

<style scoped>

</style>
