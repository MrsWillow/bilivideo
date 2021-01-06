<template>
  <div class="side-bar">
    <scroll class="content" ref="scroll">
      <div v-for="(item,index) in titleList"
           class="side-bar-item"
           :key="index"
           @click="itemClick(index,item)"
           :class="{'activate':index === currentIndex}">
        <span>{{ item.title }}</span>
      </div>
    </scroll>

  </div>
</template>

<script>
  import Scroll from "components/common/scroll/Scroll";
  export default {
    name: "SideBar",
    props: {
      titleList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Scroll
    },
    data() {
      return {
        currentIndex: 0,
      }
    },
    activated() {
      this.$refs.scroll.refresh()
    },
    methods: {
      itemClick(index,item) {
        this.currentIndex = index
        this.$emit('titleClick',item)
      },
    }
  }
</script>

<style scoped>
  .side-bar {
    width: 30%;
    height: calc(100% - 93px);
    background-color: #f6f6f6;
    float: left;
  }
  .content {
    height: 100%;
    overflow: hidden;
  }
  .side-bar-item {
    display: block;
    font-size: 14px;
    text-align: center;
    height: 50px;
    line-height: 50px;
  }
  .activate{
    border-radius: 10px 0 0 10px;
    background-color: #fff;
  }
  .active-bottom {
    border-radius: 0 10px 0 0;
  }
  .active-top {
    border-radius: 0 0 10px 0;
  }
</style>
