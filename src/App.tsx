import { Home } from './pages/home/index'
import { Institucional } from './pages/institucional/index'
import { Header } from './components/header'
import { ModalMenu } from './components/modalMenu';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { useState } from 'react';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/institucional",
    element: <Institucional />
  }
]);


export function App() {
  
  const [menuIsVisible, setMenuIsVisible] = useState(false)

  function openMenuModal(){
    setMenuIsVisible(true)
  }
  function closeMenuModal(){
    setMenuIsVisible(false)
  }

  return (
    <div className="bg-custom-image bg-center bg-cover h-full">
      {menuIsVisible ? (
        <ModalMenu
          closeMenuModal={closeMenuModal}
        />
      ) :
      (
        <Header 
          openMenuModal={openMenuModal}
        />
      )}
      
      <RouterProvider router={router} />
    </div>
  )
}

