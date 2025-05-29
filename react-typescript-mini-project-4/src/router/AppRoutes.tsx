import React from 'react';
import  { createBrowserRouter } from 'react-router-dom';
import Mainlayout from '../layout/Mainlayout';
import Home from '../pages/Home';
import Marketing from '../pages/Marketing';
import Happening from '../pages/Happening';
import Learning from '../pages/Learning';

const AppRoutes = createBrowserRouter([
    {
        path:"/",
        element:<Mainlayout/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:"marketing",
                element:<Marketing/>
            },
            {
                path:"happening",
                element:<Happening/>
            },
            {
                path:"learning",
                element:<Learning/>
            },
        ]
    }
])

export default AppRoutes;
