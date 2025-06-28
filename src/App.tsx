import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './AppLayout/Layout/Layout'
import Bio from './pages/Bio/Bio'
import Contact from './pages/Contact/Contact'
import Hire from './pages/Hire/Hire'
import Newsletter from './pages/Newsletter/Newsletter'
import Projects from './pages/Projects/Projects'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Projects />} />
        <Route path='bio' element={<Bio />} />
        <Route path='contact' element={<Contact />} />
        <Route path='hire' element={<Hire />} />
        <Route path='newsletter' element={<Newsletter />} />
        <Route path='projects' element={<Projects />} />
      </Route>
    </Routes>
  )
}

export default App
