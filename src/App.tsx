import { Home } from './pages/home/index'
import { Institucional } from './pages/institucional/index'
import { Header } from './components/header'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

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
  return (
    <div>
      <div className="bg-custom-image bg-cover bg-center bg-fixed h-screen"></div>
      <Header/>
      <RouterProvider router={router} />
    </div>
  )
}

