import { FC } from 'react'
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './index.module.scss'
import file from 'src/assets/images/file.png'

const DocumentItem: FC = () => {
  return (
    <div className={styles.document_item}>
      <div style={{ padding: '0px 10px' }}>
        <FontAwesomeIcon icon={faFolderOpen} />
      </div>
      <div style={{ marginLeft: '20px', flex: 1 }}>
        <h4>
          <a href='https://chat.zalo.me/' className={styles.document_guide}>
            Hướng dẫn sử dụng
          </a>
        </h4>
        <div style={{ margin: '10px 0' }}>
          <p style={{ color: '#A8A8A8' }}>
            Các tài liệu hướng dẫn sử dụng hệ thống phần mềm, phần cứng, thiết bị ngoại vi.
          </p>{' '}
        </div>
        <div>
          <ol>
            <li style={{ position: 'relative', listStyle: 'none' }}>
              <a href='faq.php?id=11' className={styles.document_item_detail}>
                eOffice - Tài liệu hướng dẫn sử dụng eOffice bản Mobile{' '}
              </a>
            </li>
            <li style={{ position: 'relative', listStyle: 'none' }}>
              <a href='faq.php?id=11' className={styles.document_item_detail}>
                eOffice - Tài liệu hướng dẫn sử dụng eOffice bản Mobile{' '}
              </a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default DocumentItem
