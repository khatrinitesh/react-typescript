
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
// library 
import 'slick-carousel/slick/slick.css'; // slick 
import 'slick-carousel/slick/slick-theme.css'; // slick theme




createRoot(document.getElementById('root')!).render(
  <>
    <RouterProvider router={AppRoutes} />
  </>,
)
