
import { Provider } from 'react-redux';
import store from './redux/store';
import Screen1 from './Screen1';

export default function App() {

  return (
    <Provider store={store}>
      <Screen1/>
    </Provider>
  )
}
