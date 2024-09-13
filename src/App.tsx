import { Home } from './pages/home/index'
import { Institucional } from './pages/institucional/index'
import { Planos } from './pages/planos/index'
import { Ambulatorio } from './pages/ambulatorio/index'
import { Header } from './components/header'
import { ModalMenu } from './components/modalMenu';
import { Footer } from './components/footer'
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
  },
  {
    path: "/planos",
    element: <Planos />,
  },
  {
    path: "/ambulatorios",
    element: <Ambulatorio />
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
      <Header 
          openMenuModal={openMenuModal}
        />
      {menuIsVisible &&(
        <ModalMenu
          closeMenuModal={closeMenuModal}
        />
      )}
      
      <RouterProvider router={router} />
      
      <Footer/>
    </div>
  )
}

