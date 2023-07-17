import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SignupPage from './Components/SignupPage'
import PostPage from './Components/PostPage'
import LoginPage from './Components/LoginPage'

export default function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/login" elemet={<LoginPage />} ></Route>
                <Route path="/register" elemet={<SignupPage />} ></Route>
                <Route path="/post" elemet={<PostPage />} ></Route>

            </Routes>


        </div>
    )
}
