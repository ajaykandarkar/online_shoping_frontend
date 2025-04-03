import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from '../modules/auth/Login'

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>
    </>
  )
}
