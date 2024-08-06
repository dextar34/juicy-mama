import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Error from './components/page/Error';
import RootLayout from './components/page/RootLayout';
import Home from './components/page/Home';
import Contact from './components/page/Contact';
import AboutUs from './components/page/AboutUs';
import Menu from './components/page/Menu';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<RootLayout />}
      errorElement={<Error/> }
    >
      <Route>
        <Route index element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/our-story' element={<AboutUs/>} />
        <Route path='/menu' element={<Menu/>} />
      </Route>
    </Route>
  )
);

const App = () => {
  return (
    <div className='font-sand' >
      <RouterProvider router={router} />
    </div>
  )
}

export default App
