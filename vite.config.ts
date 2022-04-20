import { UserConfigExport, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

// Element-Plus按需加载
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// Mock数据
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default ({ command }: ConfigEnv): UserConfigExport => {
  console.log(111, command)
  return {
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      }),
      viteMockServe({
        // eslint-disable-next-line no-useless-escape
        // ignore: /^\_/,
        mockPath: 'mock',
        localEnabled: command === 'serve'
        // 开启生产环境Mock脚本注入
        // injectCode: `
        //   import { setupProdMockServer } from '../mock/_index';
        //   setupProdMockServer();
        // `
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  }
}
