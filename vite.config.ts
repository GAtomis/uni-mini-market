import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import { resolve } from "path"
import commonjs from '@rollup/plugin-commonjs'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni(),commonjs()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },

  server:{
    // 如果使用docker-compose开发模式，设置为false

    // proxy: {
    //   // 把key的路径代理到target位置
    //   // detail: https://cli.vuejs.org/config/#devserver-proxy
    //   ['/api'||process.env.VITE_BASE_API]: { // 需要代理的路径   例如 '/api'
    //     target: `${"http://127.0.0.1"||process.env.VITE_BASE_PATH}:${8888||process.env.VITE_SERVER_PORT}/`, // 代理到 目标路径
    //     changeOrigin: true,
    //     rewrite: path => path.replace(new RegExp('^' + `/api`||process.env.VITE_BASE_API), ''),
    //   }
    // },

  }
});
