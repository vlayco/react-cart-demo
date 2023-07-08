import './App.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './components/pages/Home'
import Cart from './components/pages/Cart'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="cart" element={<Cart />} />
    </Route>
  )
)

export default function App() {
  return <RouterProvider router={router} />
}
