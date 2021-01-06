<template>
  <div class="category">
    <nav-bar class="nav-bar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <side-bar :title-list="titleList" @titleClick="titleClick"/>
    <image-goods :goods="imageGoods" class="image-goods"/>
  </div>

</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import Scroll from "components/common/scroll/Scroll";

  import SideBar from "./childComps/SideBar";
  import ImageGoods from "./childComps/ImageGoods";
  import { getCategory,getSubcategory,getSubDetail } from "network/category";

  export default {
    name: "Category",
    components: {
      NavBar,
      Scroll,
      SideBar,
      ImageGoods
    },
    data() {
      return {
        titleList: [],
        imageGoods: [],
        maitKey: 3627,
        miniWallkey: 10062603
      }
    },
    created() {
      this.getCategory()
      this.getSubcategory(this.maitKey)
      // this.getSubDetail()
    },
    methods: {
      titleClick(item) {
        this.maitKey = item.maitKey
        this.getSubcategory(this.maitKey )
      },

      /*
      *   网络请求
      */
      getCategory() {
        getCategory()
        .then(res => {
          // console.log(1,res);
          this.titleList = res.data.category.list
        })
      },
      getSubcategory(maitKey) {
        getSubcategory(maitKey)
          .then(res => {
            console.log(2,res);
            this.imageGoods = res.data.list
          })
      },
      getSubDetail() {
        getSubDetail(this.miniWallkey)
          .then(res => {
            console.log(3,res);
          })
      }
    }
  }
</script>

<style scoped>
  .category {
    height: 100vh;
    overflow: hidden;
  }
  .nav-bar {
    background-color: var(--color-tint);
    color: white;
  }
  /*.category-content {*/
  /*  height: 100%;*/
  /*  width: 100%;*/
  /*}*/
  /*.side-bar {*/
  /*  background-color: #f6f6f6;*/
  /*  width: 30%;*/
  /*  overflow: hidden;*/
  /*}*/
  /*.image-goods {*/
  /*  !*flex: 1;*!*/
  /*}*/

</style>
