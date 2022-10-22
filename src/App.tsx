import {Button, defaultTheme, Provider} from '@adobe/react-spectrum'
import { Layout } from './components'


const  App = () => (
    <Provider theme={defaultTheme}>
    <Layout />
  </Provider>
)

export default App



