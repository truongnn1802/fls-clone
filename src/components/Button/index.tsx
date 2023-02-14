import styles from './index.module.scss'

type Props = {
  text: string
  bgColor: string
  borderColor: string
  width?: string
  handleClick?: (data?: any) => void
}

const Button = ({ text, bgColor, borderColor, width = 'auto', handleClick }: Props): JSX.Element => {
  return (
    <button
      className={styles.button}
      onClick={handleClick}
      style={{ backgroundColor: bgColor, border: '1px solid' + { borderColor }, width }}
    >
      {text}
    </button>
  )
}

export default Button
