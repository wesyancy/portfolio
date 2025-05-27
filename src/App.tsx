import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './AppLayout/Layout/Layout'
import Bio from './pages/Bio/Bio'
import Projects from './pages/Projects/Projects'
import Contact from './pages/Contact/Contact'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Bio />} />
        <Route path='bio' element={<Bio />} />
        <Route path='projects' element={<Projects />} />
        <Route path='contact' element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
