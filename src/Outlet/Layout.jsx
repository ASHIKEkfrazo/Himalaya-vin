import React, { useEffect, useState } from 'react'

import { Outlet, Navigate } from 'react-router-dom';
import Structure from '../Layout/Structure';
import Login from '../Pages/Auth/Login';
const Layout = () => {

  const login = localStorage.getItem("login")
  const [auth, setAuth] = useState(login)
  useEffect(() => {
    if (login) {
      setAuth(login)
    }
    else {
      setAuth(login)
    }
  }, [auth])

  return (
    <>
      {
        auth ?
          <Structure>
            <Outlet />
          </Structure>
          :
          <Navigate to="/login" />
      }

    </>
  )
}

export default Layout