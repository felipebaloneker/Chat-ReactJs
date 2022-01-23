import React, { useState } from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './pages/Login'
import Chat from './pages/Chat'
import "./global.css"
import { AuthContextProvider } from './contexts/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/chat' element={<Chat/>}/>
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
