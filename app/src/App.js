import './App.css';
import CakeContainer from './components/CakeContainer';
import {Provider} from 'react-redux'
import store from './redux/store'
import HooksCakeContainer from './components/HooksCakeContainer';
import FormSession from './components/FormSession';
import LogoImage from './components/back.jpg'
import StoreView from './components/StoreView';
import Naveg from './components/Naveg';
var sectionStyle1 = {
  width: '100%',
  height: '800px',
  height: '100%',
  
  backgroundImage: `url(${LogoImage})`,
  backgroundSize: 'cover'  

}
//<FormSession/>
function App() {
  return (
    <Provider store={store} >
    <div className="App" >
    <Naveg/>
      <StoreView/>
      
    </div>
    </Provider>
  );
}

export default App;
