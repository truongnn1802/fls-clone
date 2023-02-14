import { memo, useEffect, useRef, useState } from 'react'
import styles from './index.module.scss'

type Props = {
  type: string
  label?: string
  note?: string
  require?: boolean
  widthLabel?: string
  width?: string
  style?: object
  styleLabel?: object
  styleInput?: object
  name?: string
  placeHolder?: string
  validator?: () => string
  error?: boolean
}

const Input = ({
  type,
  label,
  require,
  widthLabel = '16.66666667%',
  width = '100%',
  style,
  styleLabel,
  styleInput,
  note,
  name,
  placeHolder,
  validator,
  error
}: Props): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState<string>('')
  useEffect(() => {
    if (inputRef.current?.blur()) {
      console.log('blur')
    }
  }, [])

  return (
    <>
      <div className={styles.wrapperInput} style={{ width: width, ...style }}>
        {label && (
          <label style={{ width: widthLabel, flexBasis: widthLabel, ...styleLabel }}>
            {label}
            <span style={{ color: require ? 'red' : 'transparent' }}>*</span>
          </label>
        )}
        <input
          type={type}
          placeholder={placeHolder}
          style={{ ...styleInput }}
          className='itemForm'
          ref={inputRef}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          name={name}
          required={require}
        />
        {note && (
          <em className={styles.note}>
            {note}
            <span style={{ color: require ? 'red' : 'transparent' }}>*</span>
          </em>
        )}
        {require && error && (
          <span className={styles.error} style={{ marginLeft: `calc(${widthLabel} + 15px)` }}>
            Yêu cầu điền thông tin vào mục {label}
          </span>
        )}
      </div>
    </>
  )
}

export default memo(Input)
