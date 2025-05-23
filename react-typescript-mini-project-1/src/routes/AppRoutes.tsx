
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import ProductDetail from '../pages/ProductDetail';
import Product from '../pages/Product';
import About from '../pages/About';
import Contact from '../pages/Contact';

const AppRoutes = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:"about",
                element:<About/>
            },
            {
                path:"product",
                element:<Product/>
            },
            {
                path:"product/:id",
                element:<ProductDetail/>
            },
            {
                path:"contact",
                element:<Contact/>
            },
        ]
    }
])

export default AppRoutes;
