import SideBar from '../SideBar/SideBar'
import Header from '../Header/Header'
import StatusBar from '../StatusBar/StatusBar'
import { Outlet } from 'react-router-dom'
import './Layout.css'

export default function Layout() {
  return (
    <div className="vs-root">
      <SideBar />
      <div className="vs-main-area">
        <Header />
        <div className="vs-content">
          <Outlet />
        </div>
        <StatusBar />
      </div>
    </div>
  )
}