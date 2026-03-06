import axios from 'axios'
import { ElMessage } from 'element-plus'

// 1. 创建实例
const service = axios.create({
    baseURL: '/api', // 对应你配置的 Vite Proxy
    timeout: 5000
})

// 2. 请求拦截器：自动携带 Token
service.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }
        return config
    },
    error => Promise.reject(error)
)

// 3. 响应拦截器：统一处理报错
service.interceptors.response.use(
    response => {
        const res = response.data
        if (res.code !== 200) {
            ElMessage.error(res.message || '系统开小差了')
            return Promise.reject(new Error(res.message || 'Error'))
        }
        return res
    },
    error => {
        ElMessage.error('网络连接异常')
        return Promise.reject(error)
    }
)

export default service