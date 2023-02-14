import { FC } from 'react'
import Select from 'src/components/Select'
import DefaultLayout from 'src/layouts/BaseLayout'
import DocumentItem from './DocumentItem'
import styles from './index.module.scss'

const InternalDocument: FC = () => {
  const arr = new Array(10).fill(0)
  return (
    <DefaultLayout>
      <section className='container'>
        <h2 className={styles.title}>Tài liệu Nội bộ</h2>
        <p style={{ margin: '0 0 10px' }}>Danh sách các thư mục Tài liệu Nội bộ.</p>
        <div style={{ display: 'flex' }}>
          <div style={{ flexBasis: '74%' }}>
            {arr.map((o, i) => (
              <DocumentItem key={i}></DocumentItem>
            ))}
          </div>
          <div style={{ flexBasis: '26%' }}>
            <Select setSlected={'---Duyệt tìm theo chủ để---'} />
          </div>
        </div>
      </section>
    </DefaultLayout>
  )
}

export default InternalDocument
