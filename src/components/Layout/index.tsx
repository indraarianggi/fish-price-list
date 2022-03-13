import React from 'react'
import { NavLink } from 'react-router-dom'
import { ClipboardListIcon, PlusCircleIcon } from '@heroicons/react/outline'

import './styles.scss'

const Layout: React.FC = ({ children }) => {
  return (
    <div id="app">
      <header>
        <div className="header-content">
          <img src={require('@/assets/images/logo.png')} alt="Logo" />
        </div>
      </header>
      <div id="app-content">
        <nav>
          <h3 className="nav-label">Menu</h3>
          <NavLink
            to="/"
            className="nav-item"
            activeClassName="nav-active"
            exact>
            <ClipboardListIcon className="icon" />
            <span className="nav-text">Daftar Harga</span>
          </NavLink>
          <NavLink to="/add" className="nav-item" activeClassName="nav-active">
            <PlusCircleIcon className="icon" />
            <span className="nav-text">Tambah Data</span>
          </NavLink>
        </nav>
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
