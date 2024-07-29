import './App.css'

import FTF from './components/FTF/FTF'
import Header from './components/header/header'
import PageNotFound from './components/page_not_found'
import Footer from './components/footer/footer'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <div id="detail">
        <div id="tree-background"></div>
        <Header></Header>
        <Outlet/>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
