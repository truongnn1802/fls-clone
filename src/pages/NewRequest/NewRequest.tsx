import { FC, useContext } from 'react'
import Button from 'src/components/Button'
import Capcha from 'src/components/Capcha'
import Form from 'src/components/Form'
import Input from 'src/components/Input'
import Select from 'src/components/Select'
import { GlobalContext } from 'src/useContext/GlobalContext'
import DefaultLayout from '../../layouts/BaseLayout/DefaultLayout'
import styles from './index.module.scss'
const NewRequest: FC = () => {
  const handleSubmit = () => {}
  const { user } = useContext(GlobalContext)
  return (
    <DefaultLayout>
      <section className='container' style={{ minHeight: 'calc(100vh - 245px)' }}>
        <h2 className={styles.title}>Tạo yêu cầu mới</h2>
        <p style={{ margin: '0 0 10px' }}>Hãy điền vào bảng dưới đây để mở phiếu yêu cầu mới.</p>
        {!user?.isLogin ? (
          <>
            <h3>Thông tin liên lạc</h3>
            <hr style={{ marginBottom: '20px' }} />
            <div className={styles.infomation}>
              <Form action='' onSubmit={handleSubmit}>
                <Input label='Địa chỉ email' type='text' require />
                <div className='mb-15' />
                <Input label='Họ tên' type='text' require name='hoten' />
                <div className='mb-15' />
                <Input label='Số điện thoại' type='text' require widthLabel='195px' width='406px' name='sdt' />
                <Input
                  label='Số máy lẻ'
                  type='text'
                  widthLabel='76px'
                  width='165px'
                  styleLabel={{ padding: 0 }}
                  styleInput={{ margin: 0, fontWeight: 400 }}
                />
                <hr style={{ margin: '10px 0 20px' }} />
                <Select label='Chủ đề' require setSlected='---Chọn một chủ đề---' />
                <div className='mb-15' />
                <Capcha label='Capcha' widthLabel='195px' width='295px' />
                <Input
                  note='Vui lòng điền dãy số - đăng nhập tài khoản để tắt chức năng này.'
                  type='text'
                  width='500px'
                  styleInput={{ margin: 0, width: '80px', height: '30px' }}
                  require
                />
                <hr style={{ margin: '25px 0 20px' }} />
                <div style={{ textAlign: 'center' }}>
                  <Button text='Gửi đi' bgColor='#5cb85c' borderColor='#4cae4c' />
                  <Button text='Làm mới' bgColor='#f0ad4e' borderColor='#eea236' />
                  <Button text='Hủy bỏ' bgColor='#ac2925' borderColor='#d43f3a' />
                </div>
                <br />
                <br />
              </Form>
            </div>
          </>
        ) : (
          <>
            <div className={styles.formGroup}>
              <strong className='name'>Email:</strong>
              <p>{user?.email}</p>
            </div>
            <div className={styles.formGroup}>
              <strong className='name'>Họ và tên:</strong>
              <p>{user?.hoten}</p>
            </div>
            <hr style={{ margin: '10px 0 20px' }} />
            <Select label='Chủ đề' require setSlected='---Chọn một chủ đề---' />
            <div style={{ marginBottom: '30px' }}></div>
            <hr />

            <div style={{ textAlign: 'center', marginTop: '30px' }}>
              <Button text='Gửi đi' bgColor='#5cb85c' borderColor='#4cae4c' />
              <Button text='Làm mới' bgColor='#f0ad4e' borderColor='#eea236' />
              <Button text='Hủy bỏ' bgColor='#ac2925' borderColor='#d43f3a' />
            </div>
          </>
        )}
      </section>
    </DefaultLayout>
  )
}

export default NewRequest
