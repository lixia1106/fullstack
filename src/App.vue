<template>
  <div class="login-container">
    <el-card class="login-card">
      <template #header>
        <div class="login-header">
          <h2>{{ title }}</h2>
          <p>欢迎回来，请登录您的账号</p>
          </div>

      </template>
      <el-form :model="loginForm" label-width="0">
        <el-form-item>
          <el-input v-model="loginForm.username" placeholder="用户名" prefix-icon="User" />
        </el-form-item>
        <el-form-item>
          <el-input v-model="loginForm.password" type="password" placeholder="密码" prefix-icon="Lock" show-password />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="login-button" @click="handleLogin">立即登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>

  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue'

const title = "安全栈实战系统"

// 响应式数据
const loginForm = reactive({
  username: '',
  password: ''
})

const handleLogin = () => {
  console.log('正在登录...', loginForm)
  alert('点击了登录！后续我们将接入你简历里提到的 Axios 拦截器。')
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f7fa;
}
.login-card {
  width: 400px;
}
.login-header {
  text-align: center;
}
.login-button {
  width: 100%;
}
</style>