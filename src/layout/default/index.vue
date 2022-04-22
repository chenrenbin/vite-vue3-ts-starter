<script lang="ts" setup>
import { ref } from 'vue'
import AppMain from './appMain.vue'
import AppHeader from './appHeader.vue'
import AppNavVertical from './components/nav/vertical.vue'

const layout = ref('vertical')
const options = [
  { value: 'vertical', label: 'vertical' },
  { value: 'horizontal', label: 'horizontal' },
  { value: 'mix', label: 'mix' }
]
</script>

<template>
  <div class="app-container">
    <app-nav-vertical
      class="app-container_nav"
      v-if="layout !== 'horizontal'"
    />
    <div class="app-container_main">
      <app-header :layout="layout"> 右侧操作区 </app-header>
      <app-main />
    </div>
    <el-select v-model="layout">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </div>
</template>

<style lang="scss" scoped>
.app-container {
  height: 100%;
  display: flex;
  &_main {
    flex: 1 1 auto;
  }
}
</style>
