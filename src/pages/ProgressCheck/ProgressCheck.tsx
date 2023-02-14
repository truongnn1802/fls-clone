import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faEnvelope, faTicketAlt } from '@fortawesome/free-solid-svg-icons'
import Button from 'src/components/Button'
import Capcha from 'src/components/Capcha'
import Form from 'src/components/Form'
import Input from 'src/components/Input'
import Select from 'src/components/Select'
import DefaultLayout from '../../layouts/BaseLayout/DefaultLayout'
import styles from './index.module.scss'
import InputIcon from 'src/components/InputIcon'
const ProgressCheck: FC = () => {
  const handleSubmit = () => {}
  return (
    <DefaultLayout>
      <section className='container'>
        <h2 className={styles.title}>Kiểm tra tiến độ</h2>
        <p style={{ margin: '0 0 10px' }}>
          Hãy cung cấp địa chỉ email và mã số của phiếu để xem trạng thái xử lý. Có thể anh/chị sẽ phải đăng nhập để xem
          nội dung phiếu.
        </p>

        <hr style={{ marginBottom: '20px' }} />
        <div className={styles.ProgressCheck}>
          <Form action='' onSubmit={handleSubmit}>
            <InputIcon label={<FontAwesomeIcon icon={faEnvelope} />} placeHolder='Địa chỉ Email' type='text' />
            <div className='mb-15' />
            <InputIcon label={<FontAwesomeIcon icon={faTicketAlt} />} placeHolder='Ticket' type='text' />
            <div style={{ textAlign: 'center', marginTop: '25px' }}>
              <Button text='Xem phiếu' bgColor='#337ab7' borderColor='#2e6da4' width='100%' />
            </div>
          </Form>
          <div className={styles.partRight}>
            <ul className='list-unstyled'>
              <li>
                <span>
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                Anh/chị đã có tài khoản chưa? <a href='login.php'>Đăng nhập</a> hoặc{' '}
                <a href='account.php?do=create'> đăng ký để tạo tài khoản </a> để truy cập tất cả các phiếu yêu cầu.
              </li>

              <li>
                <span>
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                Đây là lần đầu anh/chị truy cập hệ thống? hoặc anh/chị quên mã số phiếu đã tạo, hãy{' '}
                <a href='open.php'>mở phiếu yêu cầu (ticket) mới</a>.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </DefaultLayout>
  )
}

export default ProgressCheck
