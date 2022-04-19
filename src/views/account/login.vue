<script setup lang="ts">
// import { Button } from 'element-plus'
import { getAccountList } from '@/api/account'
import { useAppStore } from '@/store/modules/app'

const pageName = '登录页面'

const appStore = useAppStore()
console.log(1111, appStore, appStore.pageLoading)
appStore.$subscribe((mutation, state) => {
  console.log('subscribe', mutation, state)
})
console.log(1122)
appStore.setPageLoading(true)
console.log(2222, appStore.pageLoading)

try {
  const data = getAccountList({
    page: 1,
    pageSize: 10
  })
  console.log(456, data)
} catch (e) {
  console.log(789, e)
}
</script>

<template>
  <div>
    {{ pageName }}
    <el-row>
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
      <el-button>中文</el-button>
    </el-row>
  </div>
</template>
