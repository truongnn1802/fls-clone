export interface User {
  email: string
  hoten: string
  sdt: string
  phoneExt: string
  timeZone: string
  password: string
}

export interface UserLogin extends User {
  isLogin: boolean
}
