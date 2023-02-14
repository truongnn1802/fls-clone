import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

type Props = {
  children: string | JSX.Element | JSX.Element[]
}

const DefaultLayout = ({ children }: Props): JSX.Element => {
  return (
    <div className='wrapper'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default DefaultLayout
