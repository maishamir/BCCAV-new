import React from 'react'
import Header from '../Header/Header';
import "./Layout.scss"

function Layout({children}) {
  return (
    <div className='layout'>
        <Header/>
        {children}
        <footer>Footer</footer>
    </div>
  )
}

export default Layout