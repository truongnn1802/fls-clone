import { http } from 'src/util/http'
import axios from 'axios'

export const Login = (url: string) => {
  axios({
    method: 'get',
    url: 'http://localhost:8000/' + url
  })
}
