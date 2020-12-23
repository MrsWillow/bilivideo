<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <Scroll class="content">
      <home-swiper :banners="banners"/>
      <recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control class="tab-control"
                   :titles="['流行','新款','精选']"
                   @tabClick="tabClick"/>
      <goods-list :goods="showGoods"/>
    </Scroll>
  </div>
</template>

<script>
  import HomeSwiper from "./chiildComps/HomeSwiper";
  import RecommendView from "./chiildComps/RecommendView";
  import FeatureView from "./chiildComps/FeatureView";

  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tabControl/TabControl";
  import GoodsList from "components/content/goods/GoodsList";
  import Scroll from "components/common/scroll/Scroll";

  import { getHomeMultidata,getHomeGoods } from "network/home";

  export default {
    name: "Home",
    components: {
      HomeSwiper,
      RecommendView,
      FeatureView,
      NavBar,
      TabControl,
      GoodsList,
      Scroll
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': { page: 0,list: [] },
          'new': { page: 0,list: [] },
          'sell': { page: 0,list: [] },
        },
        currentType: 'pop'
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
    methods: {
      /*
      *   事件监听
      **/
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
      },

      /*
     *   网络请求
     **/
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          // console.log(res);
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type,page).then(res => {
          // console.log(res);
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
        })
      }
    }
  }
</script>

<style scoped>
  #home {
    height: 100vh;
    /*  vh viewport height  */
  }
  .home-nav {
    background-color: var(--color-tint);
    color: white;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 9;
  }
  .content {
    height: calc(100% - 93px);
    margin-top: 44px;
  }
</style>
