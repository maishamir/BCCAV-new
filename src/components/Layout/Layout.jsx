import React from 'react'

function Layout({children}) {
  return (
    <div>
        <header>Header + Nav</header>
        {children}
        <footer>Footer</footer>
    </div>
  )
}

export default Layout