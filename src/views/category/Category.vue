<template>
  <div class="wrapper" ref="aaaa">
 <!--  wrapper 下只能有一个大的标签  -->
    <div>
      <button @click="btnClick">按钮</button>
      <ul class="content">
        <li v-for="item in 100">{{ item }}</li>
      </ul>
    </div>
  </div>

</template>

<script>
  export default {
    name: "Category",
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
