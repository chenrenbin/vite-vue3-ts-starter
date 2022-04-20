<script setup lang="ts">
// import { Button } from 'element-plus'
import { Login } from '@/api/account'
import { useAppStore } from '@/store/modules/app'

const pageName = '登录页面'

const appStore = useAppStore()
console.log(1111, appStore.pageLoading)
appStore.$subscribe((mutation, state) => {
  console.log('subscribe', mutation, state)
})
appStore.setPageLoading(true)
console.log(2222, appStore.pageLoading)

try {
  Login({ name: 'abcd', password: '1234' }).then((res: unknown) => {
    console.log(456, res)
  })
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
