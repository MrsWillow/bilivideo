<template>
  <div class="side-bar">
    <div v-for="(item,index) in titleList"
         class="side-bar-item"
         :key="index">
      <span>{{ item.title }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SideBar",
    props: {
      titleList: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .side-bar {
    width: 100px;
    height: 100vh;
    font-size: 16px;
  }
  .side-bar-item {
    padding: 20px 17px;
    background-color: #f6f6f6;
    border-bottom: 1px solid #666666;
    text-align: center;
  }
</style>
