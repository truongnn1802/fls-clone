import { useContext, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { GlobalContext } from 'src/useContext/GlobalContext'

const Logout = () => {
  const { handleLogout } = useContext(GlobalContext)
  useEffect(() => {
    alert('Bạn muốn đăng xuất?')
    handleLogout()
  }, [])
  return <Navigate to='/' />
}

export default Logout
