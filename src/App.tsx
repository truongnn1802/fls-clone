import { FC } from 'react'
import useRouteElements from './routes/useRouteElements'
const App: FC = () => {
  const routes = useRouteElements()
  return <div>{routes}</div>
}

export default App
