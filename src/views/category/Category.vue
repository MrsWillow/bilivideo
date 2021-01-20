<template>
  <div class="category">
    <nav-bar class="nav-bar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <side-bar :title-list="titleList" @titleClick="titleClick"/>
    <scroll class="category-content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll">
      <image-goods :goods="imageGoods" class="image-goods"/>
      <tab-control :titles="['推荐']" class="tab-control"/>
      <goods-list :goods="goodsList"/>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>

</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import Scroll from "components/common/scroll/Scroll";
  import GoodsList from "components/content/goods/GoodsList";
  import TabControl from "components/content/tabControl/TabControl";

  import SideBar from "./childComps/SideBar";
  import ImageGoods from "./childComps/ImageGoods";
  import { getCategory,getSubcategory,getSubDetail } from "network/category";

  import { itemListenerMixin, backTopMixIn} from "common/mixin";

  export default {
    name: "Category",
    components: {
      NavBar,
      Scroll,
      GoodsList,
      TabControl,
      SideBar,
      ImageGoods
    },
    mixins: [itemListenerMixin,backTopMixIn],
    data() {
      return {
        titleList: [],
        imageGoods: [],
        goodsList: [],
        maitKey: 3627,
        miniWallkey: 10062603
      }
    },
    created() {
      this.getCategory()
      this.getSubcategory(this.maitKey)
      this.getSubDetail(this.miniWallkey)
    },
    methods: {
      titleClick(item) {
        this.maitKey = item.maitKey
        this.miniWallkey = item.miniWallkey
        this.getSubcategory(this.maitKey )
        this.getSubDetail(this.miniWallkey)
      },
      contentScroll(position) {
        this.isShowBackTop = (-position.y ) > 1000
      },
      /*
      *   网络请求
      */
      // 分类列表
      getCategory() {
        getCategory()
        .then(res => {
          // console.log(1,res);
          this.titleList = res.data.category.list
        })
      },
      //  分类图片
      getSubcategory(maitKey) {
        getSubcategory(maitKey)
          .then(res => {
            // console.log(2,res);
            this.imageGoods = res.data.list
          })
      },
      // 推荐数据
      getSubDetail(miniWallkey) {
        // console.log(miniWallkey)
        getSubDetail(miniWallkey)
          .then(res => {
            // console.log(3,res);
            this.goodsList = res
          })
      }
    }
  }
</script>

<style scoped>
  .category {
    height: 100vh;
    /*display: flex;*/
  }
  /*.category::after {*/
  /*  content: '';*/
  /*  display: block;*/
  /*  height: 0;*/
  /*  clear: both;*/
  /*  visibility: hidden;*/
  /*}*/
  .nav-bar {
    background-color: var(--color-tint);
    color: white;
  }
  .category-content {
    height: calc(100% - 93px);
    overflow: hidden;
  }
  .tab-control {
    position: relative;
    z-index: 9;
  }
</style>
