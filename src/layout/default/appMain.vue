<script lang="ts" setup>
import Tag from './components/tag.vue'
</script>

<template>
  <div class="main">
    <Tag />
    <router-view class="main-body" />
  </div>
</template>

<style lang="scss" scoped>
.main {
  &-body {
    margin: 20px;
    background: #fff;
  }
}
</style>
