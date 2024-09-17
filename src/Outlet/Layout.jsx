import React from 'react'

import { Outlet } from 'react-router-dom';
import Structure from '../Layout/Structure';
const Layout = () => {
  return (
    <Structure>
      <Outlet />
    </Structure>
  )
}

export default Layout