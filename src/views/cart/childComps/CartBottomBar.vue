<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button class="check-all"
                    :isChecked="isSelectAll"
                    @click.native="checkClick"/>
      <span>全选</span>
    </div>
    <div class="price">
      合计: {{ totalPrice }}
    </div>
    <div class="calculate">
      去计算({{ checkLength }})
    </div>
  </div>
</template>

<script>
  import CheckButton from "components/content/CheckButton/CheckButton";
  import { mapGetters } from 'vuex'
  export default {
    name: "CartBottomBar",
    components: {
      CheckButton
    },
    computed: {
      ...mapGetters(['cartList']),
      totalPrice() {
        return '¥' + this.cartList.filter(item => {
          return item.checked
        }).reduce((preValue,item) => {
          return preValue + item.price * item.count
        },0).toFixed(2)
      },
      checkLength() {
        return this.cartList.filter(item => item.checked).length
      },
      isSelectAll() {
        // return !(this.cartList.filter(item => !item.checked).length)
        // 有一个不选中就不全选
        if (this.cartList.length === 0) return false
        return !this.cartList.find(item => !item.checked)
      }
    },
    methods: {
      checkClick() {
        if (this.isSelectAll) {
          this.cartList.forEach(item => item.checked = false)
        } else {
          this.cartList.forEach(item => item.checked = true)
        }
      }
    }
  }
</script>

<style scoped>
  .bottom-bar {
    position: relative;
    display: flex;
    height: 40px;
    line-height: 40px;
    background-color: #eee;
    font-size: 14px;
  }
  .check-content {
    display: flex;
    align-items: center;
    margin-left: 10px;
    width: 60px;
  }
  .check-all {
    width: 20px;
    height: 20px;
    line-height: 20px;
    margin-right: 5px;
  }
  .price {
    margin-left: 30px;
    flex: 1;
  }
  .calculate {
    width: 90px;
    background-color: red;
    color: white;
    text-align: center;
  }
</style>
