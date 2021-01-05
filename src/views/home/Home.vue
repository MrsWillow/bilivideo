<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control :titles="['流行','新款','精选']"
                 @tabClick="tabClick"
                 ref="tabControl1"
                 class="tab-control"
                 v-show="isTabFixed"/>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            :pull-up-load = true
            @scroll="contentScroll"
            @pullingUp="loadMore">
      <home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad"/>
      <recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control :titles="['流行','新款','精选']"
                   @tabClick="tabClick"
                   ref="tabControl2"/>
      <goods-list :goods="showGoods"/>
    </scroll>
    <!-- 监听组件点击,@click.native   -->
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import FeatureView from "./childComps/FeatureView";

  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tabControl/TabControl";
  import GoodsList from "components/content/goods/GoodsList";
  import Scroll from "components/common/scroll/Scroll"

  import { getHomeMultidata,getHomeGoods } from "network/home";
  import { itemListenerMixin,backTopMixIn } from "common/mixin";

  export default {
    name: "Home",
    components: {
      HomeSwiper,
      RecommendView,
      FeatureView,
      NavBar,
      TabControl,
      GoodsList,
      Scroll,
    },
    mixins: [itemListenerMixin,backTopMixIn],
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': { page: 0,list: [] },
          'new': { page: 0,list: [] },
          'sell': { page: 0,list: [] },
        },
        currentType: 'pop',
        tabOffsetTop: 0,
        isTabFixed: false,
        saveY: 0,
      }
    },
    created() {
      // 函数调用 -> 压入函数栈(保存函数调用过程中所有变量)
      // 函数调用结束 -> 弹出函数栈(释放函数所有变量)
      this.getHomeMultidata()
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    computed: {
      showGoods(){
        return this.goods[this.currentType].list
      }
    },
    // 活跃
    activated() {
      this.$refs.scroll.scrollTo(0,this.saveY,0)
      this.$refs.scroll.refresh()
    },
    // 离开
    deactivated() {
      // 保存滚动位置
      this.saveY = this.$refs.scroll.getScrollY()
      // 取消全部事件的监听
      this.$bus.$off('itemImageLoad',this.itemImgListener)
    },
    methods: {
      /*
      *   事件监听
      */
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
        this.$refs.tabControl1.currentIndex = index
        this.$refs.tabControl2.currentIndex = index
      },

      contentScroll(position) {
        // backTop
        this.isShowBackTop = (-position.y ) > 1000
        // tabControl position:fixed
        this.isTabFixed = (-position.y) > this.tabOffsetTop
      },
      loadMore() {
        this.getHomeGoods(this.currentType)
        // scroll 组件会提前计算好可滚动的区域，而图片是
        // 异步加载的，组件计算的高度不包含图片高度，需要刷新重新计算高度
      },
      swiperImgLoad() {
        // 获取tabControl的offsetTop
        // 所有的组件都有一个属性$el: 用于获取组件中的元素
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
      },

      /*
      *   网络请求
      */
      getHomeMultidata()  {
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type,page).then(res => {
          // for (let item of res.data.list) {
          //   this.goods[type].list.push(item)
          // }
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1

          // 完成上拉加载更多
          this.$refs.scroll.finishPullUp()
        })
      }
    }
  }
</script>

<style scoped>
  #home {
    height: 100vh;
    position: relative;
    /*  vh viewport height  */
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    /*在使用浏览器原生滚动时，为了不让导航跟随一起滚动*/
    /*position: fixed;*/
    /*left: 0;*/
    /*right: 0;*/
    /*top: 0;*/
    /*z-index: 9;*/
  }
  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  /*.content {*/
  /*  height: calc(100% - 93px);*/
  /*  overflow: hidden;*/
  /*  margin-top: 44px;*/
  /*}*/
  .tab-control {
    position: relative;
    z-index: 9;
  }

  /*.fixed {*/
  /*  position: fixed;*/
  /*  left: 0;*/
  /*  right: 0;*/
  /*  top: 44px;*/
  /*}*/
</style>
