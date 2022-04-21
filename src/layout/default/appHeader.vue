<script lang="ts" setup>
import { defineProps } from 'vue'
import Logo from './components/logo.vue'
const props = defineProps({
  layout: {
    type: String,
    validator: (val: string) => ['vertical', 'horizontal', 'mix'].includes(val),
    default: 'vertical'
  }
})
</script>

<template>
  <div class="header">
    <Logo class="header-logo" v-if="props.layout === 'horizontal'" />
    <div class="header-nav">
      <div v-if="props.layout === 'vertical'">面包屑</div>
      <div v-else-if="props.layout === 'horizontal'">全路由导航</div>
      <div v-else>一级路由导航</div>
    </div>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  background: #fff;
  &-nav {
    flex: 1 1 auto;
  }
}
</style>
