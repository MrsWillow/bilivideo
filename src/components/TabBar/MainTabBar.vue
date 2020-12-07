<template>
    <tab-bar>
        <tab-bar-item path="/home" activeColor="deepPink">
            <img slot="item-icon" src='../../assets/img/TabBar/home.svg'>
            <img slot="item-icon-active" src='../../assets/img/TabBar/home-active.svg'>
            <div slot="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item path="/category" activeColor="red">
            <img slot="item-icon" src='../../assets/img/TabBar/category.svg'>
            <img slot="item-icon-active" src='../../assets/img/TabBar/category-active.svg'>
            <div slot="item-text">分类</div>
        </tab-bar-item>
        <tab-bar-item path="cart" activeColor="red">
            <img slot="item-icon" src='../../assets/img/TabBar/shopCart.svg'>
            <img slot="item-icon-active" src='../../assets/img/TabBar/shopCart-active.svg'>
            <div slot="item-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item path="profile" activeColor="red">
            <img slot="item-icon" src='../../assets/img/TabBar/profile.svg'>
            <img slot="item-icon-active" src='../../assets/img/TabBar/profile-active.svg'>
            <div slot="item-text">我的</div>
        </tab-bar-item>
    </tab-bar>
</template>

<script>
    import TabBar from "./TabBar";
    import TabBarItem from "./TabBarItem";
    export default {
        name: "MainTabBar",
        components: {
            TabBarItem,
            TabBar
        },
    }
</script>

<style scoped>

</style>
