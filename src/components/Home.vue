<template>
    <div>
        <h2>主页</h2>
        <router-link to="/home/news">新闻</router-link><br>
        <router-link to="/home/message">消息</router-link>
        <router-view></router-view>
    </div>

</template>
<script>
    export default {
        name: 'Home',
        data() {
            return {
                path: '/home/news'
            }
        },
        created() {
            console.log('Home create')
        },
        destroyed() {
            console.log('Home destroyed')
        },
        // 在keep-alive 时会执行该函数
        activated() {
            console.log('activated')
            this.$router.push(this.path)
        },
        beforeRouteLeave(to,form,next) {
            console.log('from',this.$route.path)
            this.path = this.$route.path
            next()
        }
    }
</script>
