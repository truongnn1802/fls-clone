import { FC, useContext, useEffect, useRef, useState } from 'react'
import Button from 'src/components/Button'
import Form from 'src/components/Form'
import Input from 'src/components/Input'
import Select from 'src/components/Select'
import { GlobalContext } from 'src/useContext/GlobalContext'
import DefaultLayout from '../../layouts/BaseLayout/DefaultLayout'
import styles from './index.module.scss'

type typeErr = {
  email: boolean
  hoten: boolean
  password: boolean
  repeatPassword: boolean
  sdt: boolean
  timeZone: boolean
  phoneExt: boolean
  newpassword: boolean
  renewPassword: boolean
}

const Profile: FC = () => {
  const [errors, setErrors] = useState<typeErr>({
    email: false,
    password: false,
    repeatPassword: false,
    sdt: false,
    hoten: false,
    timeZone: false,
    phoneExt: false,
    newpassword: false,
    renewPassword: false
  })
  const [reset, setReset] = useState<boolean>(false)
  const { user } = useContext(GlobalContext)
  const formRef = useRef<HTMLFormElement>(null)
  const account: any = window.localStorage.getItem('account')
  useEffect(() => {
    let listInput: NodeListOf<HTMLInputElement>
    if (formRef.current?.querySelectorAll('.itemForm')) {
      listInput = formRef.current?.querySelectorAll('.itemForm')

      for (const input of listInput) {
        input.value = ''
        if (Object.keys(JSON.parse(account)).find((key) => key === input?.name))
          input.value = JSON.parse(account)[input?.name]
      }
    }
  }, [reset])

  const handleSubmit = () => {
    const dataInput: any = {}
    let errClone = { ...errors }
    let listInput: NodeListOf<HTMLInputElement>
    if (formRef.current?.querySelectorAll('.itemForm')) {
      listInput = formRef.current?.querySelectorAll('.itemForm')

      for (const input of listInput) {
        if (typeof errClone === 'object') {
          errClone = { ...errClone, [input.name]: input.value === '' && input.required ? true : false }
          dataInput[input.name] = input.value
        }
      }

      if (Object.values(errClone).every((err) => err == false)) {
        if (dataInput.password !== JSON.parse(account).password) {
          alert('M???t kh???u hi???n t???i kh??ng ????ng')
          return
        }
        if (dataInput.newpassword !== dataInput.renewPassword) {
          alert('M???t kh???u kh??ng kh???p')
          return
        }
        const accList = window.localStorage.getItem('listAccount')
        if (accList) {
          const accListObj = JSON.parse(accList)
          if (!accListObj.some((acc: any) => acc.hoten === dataInput.hoten) && !user.hoten) {
            alert('T??n ????ng nh???p ???? t???n t???i')
          } else if (accListObj.some((acc: any) => acc.hoten === dataInput.hoten) && !user.hoten) {
            window.localStorage.setItem('listAccount', JSON.stringify([...accListObj, dataInput]))
          } else {
            const index = accListObj.findIndex((acc: any) => acc.hoten === user.hoten)
            delete dataInput.renewPassword

            accListObj[index] = dataInput
            accListObj[index].password = dataInput.newpassword
            delete accListObj[index].newpassword

            window.localStorage.setItem('listAccount', JSON.stringify(accListObj))
          }
        } else {
          window.localStorage.setItem('listAccount', JSON.stringify([dataInput]))
        }
      }
      setErrors(errClone)
    }
  }

  return (
    <DefaultLayout>
      <section className='container' style={{ minHeight: 'calc(100vh - 245px)' }}>
        <h2 className={styles.title}>T???o y??u c???u m???i</h2>
        <p style={{ margin: '0 0 10px' }}>H??y ??i???n v??o b???ng d?????i ????y ????? m??? phi???u y??u c???u m???i.</p>
        <h3>Th??ng tin li??n l???c</h3>
        <hr style={{ marginBottom: '20px' }} />
        <div className={styles.infomation}>
          <Form action='' ref={formRef}>
            <Input label='?????a ch??? email' type='email' require name='email' error={errors?.email} />
            <div className='mb-15' />
            <Input label='H??? t??n' type='text' require name='hoten' error={errors?.hoten} />
            <div className='mb-15' />
            <Input
              label='S??? ??i???n tho???i'
              type='text'
              require
              widthLabel='195px'
              width='406px'
              name='sdt'
              error={errors?.sdt}
            />
            <Input
              label='S??? m??y l???'
              type='text'
              widthLabel='76px'
              width='165px'
              styleLabel={{ padding: 0 }}
              styleInput={{ margin: 0, fontWeight: 400 }}
              name='phoneExt'
            />
            <h3 style={{ padding: '0 15px' }}>T??y ch???nh c?? nh??n</h3>
            <hr style={{ margin: '10px 0 20px' }} />
            <Select widthLabel='195px' label='M??i gi???' require setSlected='Viet Nam' width='500px' name='timeZone' />
            <div className='mb-15' />
            <h3 style={{ padding: '0 15px' }}>M???t kh???u x??c th???c v??o h??? th???ng</h3>
            <hr style={{ margin: '25px 0 20px' }} />
            <Input label='M???t kh???u hi???n t???i' error={errors?.password} type='password' name='password' />
            <div className='mb-15' />
            <Input label='M???t kh???u m???i' error={errors?.newpassword} type='password' name='newpassword' />
            <div className='mb-15' />
            <Input label='X??c nh???n m???t kh???u m???i' error={errors?.renewPassword} type='password' name='renewPassword' />
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
              <Button
                text={user?.hoten ? '????ng k??' : 'C???p nh???t'}
                bgColor='#5cb85c'
                borderColor='#4cae4c'
                handleClick={handleSubmit}
              />
              {user?.hoten && (
                <Button text='L??m m???i' bgColor='#f0ad4e' borderColor='#eea236' handleClick={() => setReset(true)} />
              )}
              <Button text='H???y b???' bgColor='#ac2925' borderColor='#d43f3a' handleClick={() => {}} />
            </div>
            <br />
            <br />
          </Form>
        </div>
      </section>
    </DefaultLayout>
  )
}

export default Profile
