<template>
    <div>
        <h2>新闻列表</h2>
        <li v-for="item in newsList" :key="item">{{ item }}</li>
    </div>

</template>

<script>
    export default {
        name: "HomeNews",
        data() {
            return {
                newsList: ['新闻1','新闻2','新闻3']
            }
        }
    }
</script>

<style scoped>

</style>
