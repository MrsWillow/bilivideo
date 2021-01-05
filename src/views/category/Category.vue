<template>
  <div class="category">
    <side-bar :title-list="titleList"/>
  </div>

</template>

<script>
  import { getCategory,getSubcategory,getSubDetail } from "network/category";
  import SideBar from "./childComps/SideBar";
  export default {
    name: "Category",
    components: {SideBar},
    data() {
      return {
        titleList: [],
        maitKey: 3627,
        miniWallkey: 10062603
      }
    },
    created() {
      this.getCategory()
      this.getSubcategory()
      this.getSubDetail()
    },
    methods: {
      getCategory() {
        getCategory()
        .then(res => {
          console.log(res);
          this.titleList = res.data.category.list
        })
      },
      getSubcategory() {
        getSubcategory(this.maitKey)
          .then(res => {
            console.log(res);
          })
      },
      getSubDetail() {
        getSubDetail(this.miniWallkey)
          .then(res => {
            console.log(res);
          })
      }
    }
  }
</script>

<style scoped>
  .category {
    position: relative;
    z-index: 9;
  }
</style>
