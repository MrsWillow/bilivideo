<template>
    <div>
        <h2>消息列表</h2>
        <li v-for="item in newsList" :key="item">{{ item }}</li>
    </div>
</template>

<script>
    export default {
        name: "HomeMessage",
        data() {
            return {
                newsList: ['消息1','消息2','消息3']
            }
        }
    }
</script>

<style scoped>

</style>
