<template>
  <div class="category">

  </div>

</template>

<script>
  import { getCategory,getSubcategory,getSubDetail } from "network/category";
  export default {
    name: "Category",
    data() {
      return {
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
  .wrapper {
    height: 150px;
    background-color: red;
    overflow: hidden;
  }
</style>
