import { useEffect, useRef, useState } from 'react'
import styles from './index.module.scss'

type Props = {
  type: string
  label?: JSX.Element
  note?: string
  require?: boolean
  widthLabel?: string
  width?: string
  style?: object
  styleLabel?: object
  styleInput?: object
  name?: string
  placeHolder?: string
}

const InputIcon = ({
  type,
  label,
  require,
  widthLabel = 'auto',
  width = '100%',
  style,
  styleLabel,
  styleInput,
  note,
  name,
  placeHolder
}: Props): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState<string>('')
  useEffect(() => {}, [value])

  return (
    <div className={styles.wrapperInputIcon} style={{ width: width, ...style }}>
      {label && <label style={{ width: widthLabel, flexBasis: widthLabel, ...styleLabel }}>{label}</label>}
      <input
        type={type}
        placeholder={placeHolder}
        style={{ ...styleInput }}
        className='itemForm'
        ref={inputRef}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        name={name}
      />
      {note && (
        <em className={styles.note}>
          {note}
          <span style={{ color: require ? 'red' : 'transparent' }}>*</span>
        </em>
      )}
    </div>
  )
}

export default InputIcon
