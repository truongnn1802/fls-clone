import { FC, useContext, useRef, useState } from 'react'
import { faCheck, faEnvelope, faTicketAlt, faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useNavigate } from 'react-router-dom'
import Button from 'src/components/Button'
import Form from 'src/components/Form'
import InputIcon from 'src/components/InputIcon'
import { GlobalContext } from 'src/useContext/GlobalContext'
import DefaultLayout from '../../layouts/BaseLayout/DefaultLayout'
import styles from './index.module.scss'

const Login: FC = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const { handleAddUser } = useContext(GlobalContext)
  const navigate = useNavigate()

  const handleSubmit = () => {
    const dataInput: any = {}
    let listInput: NodeListOf<HTMLInputElement>
    if (formRef.current?.querySelectorAll('.itemForm')) {
      listInput = formRef.current?.querySelectorAll('.itemForm')
      for (const input of listInput) {
        dataInput[input.name] = input.value
      }
    }
    const accountList = window.localStorage.getItem('listAccount')
    const account =
      accountList &&
      JSON.parse(accountList).find(
        (account: any) => account.hoten === dataInput.username && account.password === dataInput.password
      )
    if (account) {
      handleAddUser(account)
      navigate('/')
      return
    } else {
      alert('Tài khoản không đúng')
    }
  }
  return (
    <DefaultLayout>
      <section className='container'>
        <h2 className={styles.title}>Hệ thống Phiếu Yêu cầu - Support Ticket System</h2>
        <p>
          1. Để có thể gửi Phiếu Yêu cầu, anh/chị cần đăng nhập vào tài khoản{' '}
          <strong>
            <a className={styles.link} href='mailto:username@flc.vn' target='_blank' rel='noreferrer'>
              username@flc.vn
            </a>
          </strong>{' '}
          của mình qua form dưới đây. <br></br> 2. Nếu email của anh/chị không phải là{' '}
          <strong>
            <a className={styles.link} href='mailto:username@flc.vn' target='_blank' rel='noreferrer'>
              username@flc.vn
            </a>
          </strong>
          , vui lòng mở một tài khoản mới trên hệ thống này theo email của anh/chị và kích hoạt lần đầu. <br></br> 3.
          Nếu anh/chị quên mật khẩu, hãy nhấn{' '}
          <strong>
            <a className={styles.link} href='https://ticket.flc.vn/pwreset.php' target='_blank' rel='noreferrer'>
              vào đây
            </a>
          </strong>{' '}
          và tiến hành các bước tiếp theo để khôi phục.
        </p>

        <hr style={{ marginBottom: '20px' }} />
        <div className={styles.loginForm}>
          <Form action='' ref={formRef}>
            <InputIcon
              label={<FontAwesomeIcon icon={faUser} />}
              placeHolder='Tên đăng nhập'
              type='text'
              name='username'
            />
            <div className='mb-15' />
            <InputIcon
              label={<FontAwesomeIcon icon={faLock} />}
              placeHolder='Mật khẩu'
              type='password'
              name='password'
            />
            <div style={{ textAlign: 'center', marginTop: '25px' }}>
              <Button
                text='Đăng nhập'
                bgColor='#337ab7'
                borderColor='#2e6da4'
                width='100%'
                handleClick={handleSubmit}
              />
            </div>
          </Form>
          <div className={styles.partRight}>
            <ul>
              <li>
                <span>
                  <FontAwesomeIcon icon={faCheck} />
                </span>{' '}
                Anh/chị chưa đăng ký?{' '}
                <Link className={styles.link} to='/register'>
                  Hãy tạo tài khoản mới!
                </Link>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={faCheck} />
                </span>{' '}
                Đây là lần đầu anh/chị truy cập hệ thống? hoặc anh/chị quên mã số phiếu đã tạo, hãy{' '}
                <Link className={styles.link} to='/new-request'>
                  mở phiếu yêu cầu (ticket) mới
                </Link>
                .
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={faCheck} />
                </span>{' '}
                <b>Tôi là một Hỗ trợ viên</b> -
                <Link className={styles.link} to='/login'>
                  Hãy đăng nhập tại đây!
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </DefaultLayout>
  )
}

export default Login
