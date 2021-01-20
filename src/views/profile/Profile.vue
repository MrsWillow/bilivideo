<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="center">我的</div>
    </nav-bar>
    <profile-top/>
    <profile-wallet/>
    <profile-bottom/>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import ProfileTop from "./childComps/ProfileTop";
  import ProfileWallet from "./childComps/ProfileWallet";
  import ProfileBottom from "./childComps/ProfileBottom";

  export default {
    name: "Profile",
    components: {
      NavBar,
      ProfileTop,
      ProfileWallet,
      ProfileBottom
    },
  }
</script>

<style scoped>
  .nav-bar {
    background-color: var(--color-tint);
    color: white;
  }
</style>
