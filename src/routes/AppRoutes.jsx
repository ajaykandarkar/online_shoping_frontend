import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from '../modules/auth/Login'
import { DashboardLayout } from '../layouts/DashboardLayout'

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<DashboardLayout/>}></Route>
        
      </Routes>
    </>
  )
}
