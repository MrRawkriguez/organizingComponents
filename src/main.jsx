import { createRoot } from 'react-dom/client'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'
import './index.css'
import App from './App.jsx'

const root = createRoot(document.getElementById('root'))


function Page() {
  return(
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}


root.render(
  <Page />
)