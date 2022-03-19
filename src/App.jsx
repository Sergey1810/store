import {Routes,Route,BrowserRouter} from "react-router-dom";
import {HomePage} from './pages/home-page'
import {Header} from './components/header/Header'
import './index.css';

export const App = () => {
  return (
    <BrowserRouter>
    <div className="App">
    <Header/>
      <Routes path="/" element={<App />}>
         <Route path="/" element={<HomePage/>}/>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

