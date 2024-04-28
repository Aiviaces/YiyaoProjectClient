// 修改默认 axios 配置
import $axios from '../axios-0.18.0.js'
$axios.defaults.baseURL = "http://localhost:8081/user"

const axios = $axios;