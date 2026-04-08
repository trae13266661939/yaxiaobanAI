import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 关键配置：设置基础路径为你的仓库名
  base: '/yaxiaobanAI/' 
})