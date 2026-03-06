<template>
    <div>
        <h1>首页</h1>
      <el-button type="danger" @click="handleLogout">退出登录</el-button>
    </div>
</template>
<script setup lang="ts">
import {useRouter} from 'vue-router'
const router = useRouter()
const handleLogout=()=>{
    localStorage.removeItem('token') //清除登录标记
    router.push('/')//跳回登录页
}

</script>
