<template>
  <div class="wrapper" ref="aaaa">
    <scroll>
      <button @click="btnClick">按钮</button>
      <ul class="content">
        <li v-for="item in 100">{{ item }}</li>
      </ul>
    </scroll>
  </div>

</template>

<script>
  import Scroll from "components/common/scroll/Scroll";
  export default {
    name: "Category",
    components: {
      Scroll
    },
    data() {
      return {
        scroll: null
      }
    },
    methods: {
      btnClick() {
        console.log('btnClick');
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
