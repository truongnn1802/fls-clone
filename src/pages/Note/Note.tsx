import DefaultLayout from 'src/layouts/BaseLayout'
import { Select, Button, Table, Badge } from 'antd'
import { Col, Row } from 'antd/es/grid'
import Search from 'antd/es/input/Search'
import styles from './index.module.scss'
import type { ColumnsType } from 'antd/es/table'
import { SyncOutlined } from '@ant-design/icons'

const Note = () => {
  const onSearch = (value: string) => console.log(value)
  const handleChange = (value: { value: string; label: React.ReactNode }) => {
    console.log(value)
  }
  interface DataType {
    key: string
    name: string
    createDate: string
    status: string
    title: string
    room: string
  }
  const columns: ColumnsType<DataType> = [
    {
      title: 'Phiếu#',
      dataIndex: 'name',
      width: '35%'
    },
    {
      title: 'Tạo ngày',
      dataIndex: 'createDate',
      width: '15%'
    },
    {
      title: 'Trạng Thái',
      dataIndex: 'status',
      width: '15%'
    },
    {
      title: 'Tiêu đề',
      dataIndex: 'title',
      width: '25%'
    },
    {
      title: 'Ban | Phòng ',
      dataIndex: 'room',
      width: '10%'
    }
  ]

  const data: DataType[] = [
    {
      key: '1',
      name: 'Phiếu 1',
      createDate: '14/2/2023',
      status: 'Done',
      title: 'Đã hoàn thành điền phiếu',
      room: 'CNTT'
    },
    {
      key: '2',
      name: 'Phiếu 2',
      createDate: '14/2/2023',
      status: 'Done',
      title: 'Tạo ngày 14/2/2023',
      room: 'CNTT'
    }
  ]

  return (
    <DefaultLayout>
      <section className='container'>
        <div className={styles.titleHeader}>
          <h2>Phiếu</h2>
          <a className={styles.icSyn} href='/'>
            <SyncOutlined />
          </a>
        </div>
        <Row className={styles.form}>
          <Col xl={8}>
            <Search placeholder='input search text' onSearch={onSearch} style={{ width: '75%' }} />
          </Col>
          <Col xl={8}>
            <Select
              labelInValue
              defaultValue={{ value: '', label: '' }}
              style={{ width: '100%' }}
              onChange={handleChange}
              options={[
                {
                  value: '1',
                  label: 'VPTĐ/ Đặt lịch jopj (1)'
                },
                {
                  value: '2',
                  label: 'CNTT./ Boá hỗ trợ dịch vụ CNTT (2)'
                },
                {
                  value: '3',
                  label: '__Tất cả các chủ đề trợ giúp__'
                }
              ]}
            />
          </Col>
          <Col xl={8}>
            <div className={styles.presentation}>
              <a href='/'>Đã đóng</a>
              <span>
                <Badge count={3} showZero color='#777' />
              </span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xl={24}>
            <Table columns={columns} dataSource={data} bordered />
          </Col>
        </Row>
      </section>
    </DefaultLayout>
  )
}
export default Note
