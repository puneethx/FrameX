import './App.scss'
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./Pages/Home/Home"
import Placement from  "./Pages/Placement/Placement"
import Internship from "./Pages/Internship/Intership"
import Application from "./Pages/Application/Application"
import SignIn from './Pages/signIn/signIn'
import SignUp from './Pages/signUP/signUp'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/internship' element={<Internship/>}></Route>
          <Route path='/placement' element={<Placement/>}></Route>
          <Route path='/application' element={<Application />}></Route>
          <Route path='/signIn' element={<SignIn />}></Route>
          <Route path='/signUp' element={<SignUp />}></Route>
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  )
}

export default App
