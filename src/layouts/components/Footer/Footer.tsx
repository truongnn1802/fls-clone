import { FC } from 'react'
import styles from './index.module.scss'
export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <p className={styles.contentFooter}>
          Copyright © 2023 FLC Ticket System{' '}
          <a href='/scp/' style={{ color: '#337ab7' }}>
            {' '}
            - IT Centre
          </a>
        </p>
      </div>
    </footer>
  )
}
