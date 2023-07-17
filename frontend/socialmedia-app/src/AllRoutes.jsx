import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from './Components/LoginPage'
import { SignupPage } from './Components/SignupPage'
import { PostPage } from './Components/PostPage'

export const AllRoutes = () => {
  return (
    <div>
<Routes>
 <Route path="/login" element={<LoginPage />}></Route>
<Route path="/register" element={<SignupPage />}></Route>
<Route path="/post" element={<PostPage />}></Route>
</Routes>
    </div>
  )
}
