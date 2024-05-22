
import axios from 'axios';

export const key = '134e5ffca49e8cc44ca4bc15f5e5d4ae12c1c3bc';

const api = axios.create({
    baseURL:'https://api-ssl.bitly.com/v4', 
    headers:{
        'Authorization': `Bearer ${key}`
    }
})

export default api;