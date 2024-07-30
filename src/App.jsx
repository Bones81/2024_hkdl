import './App.css'

import FTF from './components/FTF/FTF'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import { Outlet, useLocation } from 'react-router-dom'

function App() {
  const location = useLocation()

  return (
    <>
      <div id="detail">
        <div id="tree-background"></div>
        <Header></Header>
        {location.pathname === '/' ? <FTF /> : null}
        <Outlet/>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
