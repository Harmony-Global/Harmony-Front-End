import { Outlet } from "react-router-dom"
import Header from "../Header/Header"
import "./Layout.scss"

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <div className="layout-container">
  
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout
