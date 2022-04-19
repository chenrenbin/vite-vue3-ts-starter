<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
const size = 'large'
const zIndex = 3000
</script>

<template>
  <el-config-provider :size="size" :z-index="zIndex">
    <img alt="Vue logo" src="./assets/logo.png" />
    <router-view />
  </el-config-provider>
</template>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
