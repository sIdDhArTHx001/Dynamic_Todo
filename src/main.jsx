import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Supplyer from './context/Supplyer.jsx'
import ViewUser from './componenet/ViewUser.jsx'
import User from './componenet/User.jsx'



const router = createBrowserRouter([{
  path: "/", element: <App />, children: [
    { path: '/', element: <User /> },
    
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Supplyer>
    <RouterProvider router={router}></RouterProvider>
  </Supplyer>

)
