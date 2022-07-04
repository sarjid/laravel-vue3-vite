<template>
    <div>
        <router-link to="/">Home Page</router-link>
        <br />
        <router-link :to="{ name: 'about' }">About Page</router-link>

        <router-view></router-view>
    </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
