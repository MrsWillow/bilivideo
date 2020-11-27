<template>
    <div>
        <h2>档案</h2>
        <h3>name:{{ $route.query.name }}</h3>
        <h3>age:{{ $route.query.age }}</h3>
    </div>
</template>

<script>
    export default {
        name: "Profile"
    }
</script>

<style scoped>

</style>
