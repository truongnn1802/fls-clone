import { forwardRef, Ref, useRef } from 'react'
import styles from './index.module.scss'

type Props = {
  children: string | JSX.Element | JSX.Element[]
  action?: string
  onSubmit?: () => void
}

//onclick btn gửi=> gọi hàm onsubmit

const Form = ({ children, action, onSubmit }: Props, ref: Ref<HTMLFormElement>): JSX.Element => {
  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   if (onSubmit) onSubmit()
  //   event.preventDefault()
  // }
  // const formRef = useRef<HTMLFormElement>(null)
  return (
    <form onSubmit={(e) => e.preventDefault()} action={action} ref={ref} style={styles}>
      {children}
    </form>
  )
}

export default forwardRef(Form)
