import { MockMethod } from 'vite-plugin-mock'

// const Mock = require('mockjs')
export default [
  {
    url: '/api/login',
    method: 'post',
    response: req => {
      console.log('mock-response', req.body)
      return {
        code: 0,
        result: { abcd: 1234 },
        message: '请求成功'
      }
    }
  }
] as MockMethod[]
