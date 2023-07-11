import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
import Lightindex from './components/light/Lightindex';
import Aboutlight from './components/light/Aboutlight';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';


function App() {
  return (
   
    <Router>
    <Routes>
    <Route exact path='/' element={<Home/>} />
    <Route exact path='/light' element={<Lightindex/>} />
    <Route exact path='/aboutlight' element={<Aboutlight/>} />

    </Routes>

    </Router>

    
      );
}

export default App;
