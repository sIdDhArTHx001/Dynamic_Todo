import React from 'react'
import Nav from './componenet/Nav'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (<>
    <Nav />
    <Outlet />

  </>
  )
}

export default App