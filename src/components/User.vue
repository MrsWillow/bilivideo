<template>
    <div>
        <h2>用户</h2>
        <h3>用户名 {{ userName }}</h3>
    </div>

</template>

<script>
    export default {
        name: "User",
        computed: {
            userName() {
                return this.$route.params.name  //路由传的参数
            }
        },
        data() {
            return {

            }
        },
    }
</script>

<style scoped>

</style>