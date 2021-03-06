import {Routes,Route,BrowserRouter} from "react-router-dom";
import {HomePage} from './pages/home-page'
import {Header} from './components/header/Header'
import {GamePage} from './pages/GamePage/GamePage'
import {OrderPage} from './pages/OrderPage/OrderPage'
import Futer from "./components/Futer/Futer";
import './index.css';
import {Provider} from 'react-redux'
import {store} from './redux'

export const App = () => {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <div className="App">
    <Header/>
      <Routes path="/" element={<App />}>
         <Route path="/" element={<HomePage/>}/>
         <Route path="/app/:title" element={<GamePage/>}/>
         <Route path="/order" element={<OrderPage/>}/>
      </Routes>
      <Futer/>
      </div>
    </BrowserRouter>
    </Provider>
  );
}

