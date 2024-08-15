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
    <div className="bg-custom-image bg-center h-screen">
      <Header/>
      <RouterProvider router={router} />
    </div>
  )
}

