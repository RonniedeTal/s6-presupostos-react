import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom'
import './App.css'
import WelcomePage from './assets/pages/welcomePage/WelcomePage';
import HomePage from './assets/pages/homePage/HomePage';

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<WelcomePage />} />
      <Route path='/home' element={<HomePage />} />
    </Routes>
    </>
  )
}

export default App
