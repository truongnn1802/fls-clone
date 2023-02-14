import axios from 'axios'

export const http = axios.create({
  // Configuration
  baseURL: 'http://localhost:8000/',
  timeout: 8000
})
