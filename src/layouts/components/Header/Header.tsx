import { FC, useContext } from 'react'
import { Link } from 'react-router-dom'
import Logo from 'src/assets/images/logo.png'
import { GlobalContext } from 'src/useContext/GlobalContext'
import styles from './index.module.scss'
import Form from 'src/components/Form'
import Button from 'src/components/Button'
export const Header: FC = () => {
  const { user } = useContext(GlobalContext)
  return (
    <div className={styles.header}>
      <nav className={styles.navMenu}>
        <div className={styles.container}>
          <div className={styles.pathLeft}>Welcome {user.isLogin ? user.hoten : 'Khách'}</div>
          <div className='partRight'>
            <Link to='/' className={styles.navItem}>
              Trang chủ
            </Link>
            {user.isLogin && (
              <Link to='/document' className={styles.navItem}>
                Tài liệu nội bộ
              </Link>
            )}
            <Link to='/new-request' className={styles.navItem}>
              Tạo yêu cầu mới
            </Link>
            {user.isLogin && (
              <Link to='/ticket' className={styles.navItem}>
                Phiếu
              </Link>
            )}
            {user.isLogin && (
              <Link to='/profile' className={styles.navItem}>
                Thông tin cá nhân
              </Link>
            )}
            {!user.isLogin && (
              <Link to='/progress-check' className={styles.navItem}>
                Kiểm tra tiến độ
              </Link>
            )}
            {!user.isLogin && (
              <Link to='/login' className={styles.navItem}>
                Đăng nhập
              </Link>
            )}
            {user.isLogin && (
              <Link to='/logout' className={styles.navItem}>
                Đăng xuất
              </Link>
            )}
          </div>
        </div>
      </nav>
      <div className={styles.banner}>
        <Link to='/'>
          <img src={Logo} alt='Trung tâm hỗ trợ' />
        </Link>
      </div>
    </div>
  )
}
