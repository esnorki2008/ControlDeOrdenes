import './App.css';
import {Provider} from 'react-redux'
import store from './redux/store'


import FormSession from './components/FormSession';
import StoreView from './components/StoreView';

import AppContainer from './components/AppContainer';

//<FormSession/>
//<StoreView/>
function App() {
  return (
    <Provider store={store}>
    <div className="App" >
    
      <AppContainer/>
      
    </div>
    </Provider>
    
  );
}

export default App;
