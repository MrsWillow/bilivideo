<template>
    <div>
        <div>首页</div>
        <h2> {{ $store.state.count }}</h2>
        <button @click="add">+</button>
        <h3>fullname: {{ $store.getters.getFullName }}</h3>
    </div>
</template>

<script>
    import store from "../../store";
    import { ADDCOUNT } from "../../store/mutations-types";

    export default {
        name: "Home",
        methods: {
            add() {
                // this.$store.commit(ADDCOUNT) // mutation
                this.$store.dispatch('add','我是携带的信息')
                //  调用完 add  返回一个Promise，因此可以用 then
                .then((res) => {
                    console.log(res);
                })
            }
        }
    }
</script>

<style scoped>

</style>
