<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"
                    ref="nav"
                    @titleClick="titleClick"/>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
      <detail-param-info ref="params" :param-info="paramInfo"/>
      <detail-comment-info ref="comment" :comment-info="commentInfo"/>
      <goods-list ref="recommend" :goods="recommends"/>
    </scroll>
    <detail-bottom-bar @addCart="addCart"/>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";
  import DetailShopInfo from "./childComps/DetailShopInfo";
  import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
  import DetailParamInfo from "./childComps/DetailParamInfo";
  import DetailCommentInfo from "./childComps/DetailCommentInfo";
  import DetailBottomBar from "./childComps/DetailBottomBar";

  import Scroll from "components/common/scroll/Scroll";
  import GoodsList from "components/content/goods/GoodsList";

  import { getDetail, Goods, Shop, GoodsParam, getRecommend } from "network/detail";
  import { itemListenerMixin,backTopMixIn } from "common/mixin";
  import { debounce } from "common/utils";

  import { mapActions } from 'vuex'

  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailBottomBar,
      Scroll,
      GoodsList,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo
    },
    //  混入, 把重复的代码保存起来
    mixins: [itemListenerMixin,backTopMixIn],
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommends: [],
        themeTopYs: [],
        getThemeTopYs: null,
        currentIndex: 0,
      }
    },
    created() {
      // iid
      this.iid = this.$route.params.iid
      // 详情数据
      getDetail(this.iid).then(res => {
        const data = res.result
        //  轮播图
        this.topImages = data.itemInfo.topImages
        //  商品信息
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
        //  店铺信息
        this.shop = new Shop(data.shopInfo)
        //  商品详细信息
        this.detailInfo = data.detailInfo
        //  参数信息
        this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)
        //   评论信息
        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0]
        }
        this.$nextTick(() => {
          // 根据最新的数据，对应的DOM已经被渲染出来
          // 但是图片依然没有加载完
          this.themeTopYs = []
          this.themeTopYs.push(0)
          this.themeTopYs.push(this.$refs.params.$el.offsetTop)
          this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
          this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        })
      })
      // 推荐数据
      getRecommend().then(res => {
        this.recommends = res.data.list
      })
      this.getThemeTopYs = debounce(() => {
        this.themeTopYs = []
        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        this.themeTopYs.push(Number.MAX_VALUE)
      },100)
    },
    methods: {
      // actions 中的方法映射到 methods
      ...mapActions({
        addToCart: 'addCart'
      }),
      imageLoad() {
        this.newRefresh()
        this.getThemeTopYs()
      },
      titleClick(index) {
        this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],200)
      },
      contentScroll(position) {
        let positionY = -position.y
        let length = this.themeTopYs.length
        for (let i = 0;i < length - 1; i ++) {
          // if (this.currentIndex !== i && ((i < length - 1  && positionY >= this.themeTopYs[i]
          //   && positionY < this.themeTopYs[i+1]
          //  ) || (i === length - 1 && positionY >= this.themeTopYs[i]))) {
          //   this.currentIndex = i
          //   this.$refs.nav.currentIndex = this.currentIndex
          // }

          // 数组加入一个非常大的值
          if (this.currentIndex !== i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1])) {
            this.currentIndex = i
            this.$refs.nav.currentIndex = this.currentIndex
          }
        }
        this.isShowBackTop = (-position.y ) > 1000
      },
      addCart() {
        // 获取购物车需要展示的信息
        const product = {}
        product.image = this.topImages[0]
        product.title = this.goods.title
        product.desc = this.goods.desc
        product.price = this.goods.realPrice
        product.iid = this.iid

        // 添加购物车
        // this.$store.dispatch('addCart',product)
        //   .then(res => {
        //     console.log(res);
        //   })
        this.addToCart(product).then(res => {
          console.log(res);
        })
      }

    }
  }
</script>

<style scoped>
  #detail {
   position: relative;
   z-index: 9;
   background-color: white;
   height: 100vh;
  }
  .detail-nav {
    position: relative;
    z-index: 9;
    background-color: white;
  }
  .content {
    height: calc(100% - 93px);
  }
</style>
