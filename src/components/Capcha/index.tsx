import { useState } from 'react'
import styles from './index.module.scss'

type Props = {
  label?: string
  require?: boolean
  widthLabel?: string
  width?: string
  style?: object
  styleLabel?: object
  styleCapcha?: object
}

const Capcha = ({
  label,
  require,
  widthLabel = '16.66666667%',
  width = '100%',
  style,
  styleLabel,
  styleCapcha
}: Props): JSX.Element => {
  const [state] = useState<string[]>([
    Math.floor(Math.random() * 9999) + '',
    Math.floor(Math.random() * 16777215).toString(16)
  ])

  return (
    <div className={styles.wrapperInput} style={{ width: width, ...style }}>
      {label && (
        <label style={{ width: widthLabel, flexBasis: widthLabel, ...styleLabel }}>
          {label}
          <span style={{ color: require ? 'red' : 'transparent' }}>*</span>
        </label>
      )}
      <div className={styles.capchaCode} style={{ ...styleCapcha, backgroundColor: `#` + state[1] }}>
        {state[0]}
      </div>
    </div>
  )
}

export default Capcha
