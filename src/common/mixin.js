import { debounce } from "./utils";
import BackTop from "components/content/backTop/BackTop";
export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null,
      newRefresh: null
    }
  },
  mounted() {
    //  监听goodsItem图片加载完成
    this.newRefresh = debounce(this.$refs.scroll.refresh,200)
    //  对监听的事件进行保存
    this.itemImgListener = () => {
      this.newRefresh()
    }
    this.$bus.$on('itemImageLoad',this.itemImgListener)
  },
}

export const backTopMixIn = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false,
    }
  },
  methods: {
    backClick() {
      //  组件内部封装了方法
      this.$refs.scroll.scrollTo(0,0,500)
    },
  }
}
