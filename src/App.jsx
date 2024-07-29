import './App.css'

import FTF from './components/FTF/FTF'
import Header from './components/header/header'
import PageNotFound from './components/page_not_found'
import Footer from './components/footer/footer'

function App() {

  return (
    <>
      <div>
        <div id="tree-background"></div>
        <Header></Header>
        <FTF></FTF>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
