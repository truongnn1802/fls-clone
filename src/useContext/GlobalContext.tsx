import React, { useEffect } from 'react'
import { User, UserLogin } from 'src/types/user.type'
type Props = {
  children: JSX.Element
}
export const GlobalContext = React.createContext<{
  user: UserLogin
  handleAddUser: (user: User) => void
  handleLogout: () => void
}>({
  user: {
    email: '',
    hoten: '',
    sdt: '',
    phoneExt: '',
    timeZone: '',
    password: '',
    isLogin: false
  },
  handleAddUser: () => {},
  handleLogout: () => {}
})

export const GlobalProvider = ({ children }: Props) => {
  const [user, setUser] = React.useState<UserLogin>({
    email: '',
    hoten: '',
    sdt: '',
    phoneExt: '',
    timeZone: '',
    password: '',
    isLogin: false
  })
  useEffect(() => {
    const acc = window.localStorage.getItem('account')
    if (acc) {
      setUser(JSON.parse(acc))
    } else {
      window.localStorage.setItem('account', JSON.stringify(user))
    }
  }, [])

  const handleAddUser = (userLogin: User) => {
    window.localStorage.setItem('account', JSON.stringify({ ...userLogin, isLogin: true }))
    setUser({ ...userLogin, isLogin: true })
  }
  const handleLogout = () => {
    window.localStorage.setItem(
      'account',
      JSON.stringify({
        email: '',
        hoten: '',
        sdt: '',
        phoneExt: '',
        timeZone: '',
        password: '',
        isLogin: false
      })
    )
    setUser({
      email: '',
      hoten: '',
      sdt: '',
      phoneExt: '',
      timeZone: '',
      password: '',
      isLogin: false
    })
  }
  return <GlobalContext.Provider value={{ user, handleAddUser, handleLogout }}>{children}</GlobalContext.Provider>
}
