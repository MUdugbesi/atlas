import React from 'react';
import './App.css';
import './index.css'
import { Route, createBrowserRouter, RouterProvider, Routes, createRoutesFromElements } from 'react-router-dom';
import AppBody from './containers/appBody';
import Signin from './components/signin/signin';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<AppBody />} />
      <Route path='/signin' element={<Signin />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}


export default App;